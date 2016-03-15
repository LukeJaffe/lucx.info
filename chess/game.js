/* Game class */
function Game(canvas)
{
    this.canvas = canvas;
    try 
    {
        this.gl = this.canvas.getContext("experimental-webgl");
        this.gl.viewport_width = this.canvas.width;
        this.gl.viewport_height = this.canvas.height;
    } 
    catch (e) {}

    if (!this.gl) 
    {
        alert("Could not initialise WebGL, sorry :-(");
    }

    this.shader = new Shader(this.gl);
    this.view = new View(this.gl, this.shader);


    this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
    this.gl.enable(this.gl.DEPTH_TEST);

    // mouse stuff
    this.last_mouse_x = null;
    this.last_mouse_y = null;
    this.out_mouse_down = false;
    this.in_mouse_down = false;

    // keyboard variables
    this.shift_down = false;

    // camera stuff
    this.cam_moving = false;
    this.num_inc = 0;
    this.num_steps = 100;
    this.t_start = [0, 2, 30];
    this.t_zoom = [0, 0, 4];
    this.t_inc = vec3.create();
}

Game.prototype.clear = function()
{
    this.gl.viewport(0, 0, this.gl.viewport_width, this.gl.viewport_height);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
}

Game.prototype.tick = function() 
{
    requestAnimFrame(this.tick.bind(this));
    if (this.cam_moving)
    {
        // update rotation position
        mat4.add(this.view.camera.rm, this.view.camera.rm, this.cam_inc);
        
        // update camera z position
        vec3.add(this.view.camera.tv, this.view.camera.tv, this.t_inc);

        // increment until reach start position
        this.num_inc++;

        //check if done
        if (this.num_inc == this.num_steps)
        {
            this.cam_moving = false;
            this.num_inc = 0;
        }
    }
    this.draw();
}

Game.prototype.draw = function() 
{
    // clear the viewport
    this.clear();

    // set model view to identity
    this.view.world.clear_mv();

    // apply the view matrix to the model matrix
    mat4.multiply(this.view.world.mv, this.view.world.mv, this.view.camera.vm());

    // draw world objects
    for (var i = 0; i < this.view.world.mesh.num; i++)
    {
        // push the current mv matrix on the stack
        this.view.world.push_mv();
        // set the mv matrix for mesh i
        this.view.world.set_mv(i);
        // set the shader matrices
        this.view.set();
        // draw the mesh
        this.view.world.mesh.draw(i);
        // pop the top mv matrix off the stack
        this.view.world.pop_mv();
    }
}

Game.prototype.handle_mouse_down = function(event) 
{
    this.last_mouse_x = event.clientX;
    this.last_mouse_y = event.clientY;

    // check to see if any meshs are selected
    var selected = this.view.world.mesh.selected;
    if (selected !== -1 && !this.cam_moving)
    {
        console.log("Selected: "+selected);
        // zoom in to a mesh
        this.zoom = true;

        // start moving camera
        this.cam_moving = true;

        // get target position
        var pt = mat4.create();
        mat4.identity(pt);
        this.view.world.mesh.set_mv(selected, pt);

        // get diff between current rotation mat and id
        var diff = mat4.create();
        mat4.subtract(diff, pt, this.view.camera.rm);

        // get inc mat by dividing by num steps
        for (var i = 0; i < 16; i++)
            diff[i] = diff[i]/this.num_steps;
        this.cam_inc = diff;

        // get diff between current cam position and default position
        var tdiff = vec3.create();
        vec3.subtract(tdiff, this.t_zoom, this.view.camera.tv);
        vec3.scale(this.t_inc, tdiff, 1.0/this.num_steps);
    }
    else
    {
        // rotate camera around middle axis
        this.out_mouse_down = true;
    }
}

Game.prototype.handle_mouse_up = function(event) 
{
    this.out_mouse_down = false;
}

Game.prototype.handle_mouse_move = function(event) 
{
    var new_x = event.clientX;
    var new_y = event.clientY;

    if (this.out_mouse_down)
    {
        // rotate the camera around the center point
        var dx = new_x - this.last_mouse_x;
        var dy = new_y - this.last_mouse_y;

        var rm_new = mat4.create();
        mat4.identity(rm_new);

        mat4.rotate(rm_new, rm_new, degToRad(dx / 5), [0, 1, 0]);
        mat4.rotate(rm_new, rm_new, degToRad(dy / 5), [1, 0, 0]);

        mat4.invert(rm_new, rm_new);

        mat4.multiply(this.view.camera.rm, this.view.camera.rm, rm_new);
    }

    //this.view.face_collision(new_x, new_y);
    this.view.board_collision(new_x, new_y);

    this.last_mouse_x = new_x;
    this.last_mouse_y = new_y;
}

Game.prototype.handle_mouse_wheel = function(event)
{
    if (event.wheelDelta > 0)
        this.view.camera.tv[2]--;
    else
        this.view.camera.tv[2]++;
}

Game.prototype.handle_key_down = function(event)
{
    if (event.shiftKey && !this.shift_down)
    {
        this.shift_down = true;
    }
    if (event.keyCode == 32 && !this.cam_moving)
    {
        // back to zoomed out mode
        this.zoom = false;

        // camera starts moving
        this.cam_moving = true;

        // get start position
        var rm = mat4.create();
        mat4.identity(rm);
        mat4.rotate(rm, rm, degToRad(45), [1, 0, 0]); 

        // get diff between current rotation mat and id
        var diff = mat4.create();
        mat4.subtract(diff, rm, this.view.camera.rm);

        // get inc mat by dividing by num steps
        for (var i = 0; i < 16; i++)
            diff[i] = diff[i]/this.num_steps;
        this.cam_inc = diff;

        // get diff between current cam position and default position
        var tdiff = vec3.create();
        vec3.subtract(tdiff, this.t_start, this.view.camera.tv);
        vec3.scale(this.t_inc, tdiff, 1.0/this.num_steps);
    }
}

Game.prototype.handle_key_up = function(event)
{
    if (!event.shiftKey && this.shift_down)
    {
        this.shift_down = false;

        // clear all selections
        this.view.clear_selected();
    }
}

/* View class */
function View(gl, shader)
{
    // save gl, shader here b/c they are used multiple times
    this.gl = gl;
    this.shader = shader;

    // world
    this.world = new World(this.gl, this.shader);

    // game board
    this.board = new Board();

    // camera
    this.camera = new Camera(this.gl);

    // cursor
    this.cursor = new Cursor();

    // viewing mode
    this.mode = 0; // zoomed out
}

View.prototype.set = function()
{
    this.gl.uniformMatrix4fv(this.shader.program.pMatrixUniform, false, this.camera.p);
    this.gl.uniformMatrix4fv(this.shader.program.mvMatrixUniform, false, this.world.mv);

    var normalMatrix = mat3.create();
    mat4.toInverseMat3(this.world.mv, normalMatrix);
    mat3.transpose(normalMatrix, normalMatrix);
    this.gl.uniformMatrix3fv(this.shader.program.nMatrixUniform, false, normalMatrix);
}

View.prototype.board_collision = function(x, y)
{
    // update cursor
    this.cursor.update(x, y, this.camera.p);

    // test for collision with all tiles
    var t = this.board.collision(this.camera.vm(), this.cursor.p, this.cursor.d)
    var s = this.world.mesh.index[t];
    for (var i = 0; i < this.world.mesh.num; i++)
    {
        if (i == s)
        {
            if (this.world.mesh.team[i] == this.world.mesh.WHITE)
                this.world.mesh.color[i] = this.world.mesh.WHITE_HOVER;
            else
                this.world.mesh.color[i] = this.world.mesh.BLACK_HOVER;
        }
        else
        {
            this.world.mesh.color[i] = this.world.mesh.team[i];
        }
    }
}


View.prototype.sphere_collision = function(x, y)
{
    // update cursor
    this.cursor.update(x, y, this.camera.p);

    // check for collisions in world space
    var min_d = Infinity;
    var min_i = -1;
    for (var i = 0; i < this.world.mesh.num; i++)
    {
        d = this.world.mesh.ray_sphere_collision(i, this.camera.vm(), this.cursor.p, this.cursor.d);
        if (d < min_d)
        {
            min_d = d;
            min_i = i;
        }
    }

    // update selected mesh
    this.world.mesh.selected = -1;
    for (var i = 0; i < this.world.mesh.num; i++)
    {
        if (i == min_i)
        {
            this.world.mesh.color[i] = 3;
            this.world.mesh.selected = i;
        }
        else
            this.world.mesh.color[i] = 1;
    }
}

View.prototype.face_collision = function(x, y)
{
    // update cursor
    this.cursor.update(x, y, this.camera.p);

    // check for collisions in world space
    var min_d = Infinity;
    var min_i = -1;
    for (var i = 0; i < this.world.mesh.num; i++)
    {
        d = this.world.mesh.ray_triangle_collision(i, this.camera.vm(), this.cursor.p, this.cursor.d);
        if (d < min_d)
        {
            min_d = d;
            min_i = i;
        }
    }

    // update selected mesh
    this.world.mesh.selected = -1;
    for (var i = 0; i < this.world.mesh.num; i++)
    {
        if (i == min_i)
        {
            this.world.mesh.color[i] = 3;
            this.world.mesh.selected = i;
        }
        else
            this.world.mesh.color[i] = 1;
    }
}

View.prototype.clear_selected = function()
{
    this.world.mesh.selected = -1;
    for (var i = 0; i < this.world.mesh.num; i++)
    {
        this.world.mesh.color[i] = 1;
    }
}


/* Model View class */
function World(gl, shader)
{
    // matrices
    this.stack = [];
    this.mv = mat4.create();

    // objects
    this.mesh = new Mesh(gl, 
        shader.program.vertexPositionAttribute,
        shader.program.vertexNormalAttribute,
        shader.program.vertexColorAttribute,
        shader.program);

    this.mesh.add(this.mesh.BOARD, [0, 0, 0], 0, this.mesh.WHITE, -1);

    this.mesh.add(this.mesh.ROOK, [0, 0, 0], 0, 0, 0);
    this.mesh.add(this.mesh.ROOK, [2*7, 0, 0], 0, 0, 56);
    this.mesh.add(this.mesh.KNIGHT, [0, 0, 0], 0, 0, 8);
    this.mesh.add(this.mesh.KNIGHT, [2*5, 0, 0], 0, 0, 48);
    this.mesh.add(this.mesh.BISHOP, [0, 0, 0], 0, 0, 16);
    this.mesh.add(this.mesh.BISHOP, [2*3, 0, 0], 0, 0, 40);
    this.mesh.add(this.mesh.QUEEN, [0, 0, 0], 0, 0, 24);
    this.mesh.add(this.mesh.KING, [0, 0, 0], 0, 0, 32);

    this.mesh.add(this.mesh.ROOK, [0, 14, 0], 0, 3, 7);
    this.mesh.add(this.mesh.ROOK, [2*7, 14, 0], 0, 3, 63);
    this.mesh.add(this.mesh.KNIGHT, [0, 14, 0], 1, 3, 55);
    this.mesh.add(this.mesh.KNIGHT, [2*5, 14, 0], 1, 3, 15);
    this.mesh.add(this.mesh.BISHOP, [0, 14, 0], 1, 3, 47);
    this.mesh.add(this.mesh.BISHOP, [2*3, 14, 0], 1, 3, 23);
    this.mesh.add(this.mesh.QUEEN, [0, 14, 0], 0, 3, 31);
    this.mesh.add(this.mesh.KING, [0, 14, 0], 0, 3, 39);

    for (var i = 0; i < 8; i++)
        this.mesh.add(this.mesh.PAWN, [2*i, 0, 0], 0, this.mesh.WHITE, (8*i)+1);

    for (var i = 0; i < 8; i++)
        this.mesh.add(this.mesh.PAWN, [2*i, 10, 0], 0, this.mesh.BLACK, (8*i)+6);
}

World.prototype.clear_mv = function()
{
    mat4.identity(this.mv);
}

World.prototype.rotate_mv = function(rm)
{
    mat4.multiply(this.mv, rm, this.mv);
}

World.prototype.translate_mv = function(tv)
{
    mat4.translate(this.mv, this.mv, tv);
}

World.prototype.set_mv = function(i)
{
    this.mesh.set_mv(i, this.mv)
}

World.prototype.push_mv = function()
{
    var copy = mat4.create();
    mat4.copy(copy, this.mv);
    this.stack.push(copy);
}

World.prototype.pop_mv = function()
{
    if (this.stack.length == 0) 
    {
        throw "Invalid popMatrix!";
    }
    this.mv = this.stack.pop();
}

/* Perspective class */
function Camera(gl)
{
    this.mv_matrix = mat4.create();

    // perspective matrix (45 degrees)
    this.p = mat4.create();
    mat4.perspective(this.p, .785398, gl.viewport_width/gl.viewport_height, 0.1, 100.0);

    // model view matrix
    this.mv = mat4.create();
    mat4.identity(this.mv);

    // rotation matrix
    this.rm = mat4.create();
    mat4.identity(this.rm);
    mat4.rotate(this.rm, this.rm, degToRad(45), [1, 0, 0]); 

    // translation vector
    this.tv = [0, 2, 30];
}

Camera.prototype.vm = function()
{
    var vm = mat4.create();
    mat4.identity(vm);
    mat4.multiply(vm, this.rm, vm);
    mat4.translate(vm, vm, this.tv);
    mat4.invert(vm, vm);
    return vm;
}

function Board()
{
    this.centers = [];
    for (var i = 1; i < 16; i += 2)
        for (var j = 1; j < 16; j += 2)
            this.centers.push([i-8,j-8,0,1]);
}

Board.prototype.collision = function(vm, p, d)
{
    var min_d = Infinity, min_i = -1;
    for (var i = 0; i < this.centers.length; i++)
    {
        // get world center of sphere
        var wc = vec4.create();
        vec4.transformMat4(wc, this.centers[i], vm); 
        var c = [wc[0], wc[1], wc[2]];  

        // radius is exactly 1.0
        var r = 1.0;

        // vector from p to c
        var vpc = vec3.create();
        vec3.subtract(vpc, c, p);
        var vpc_m = vec3.length(vpc);
        
        // distance from vpc to d
        var loc = vec3.dot(vpc, d);

        // calculate pc: projection of center onto ray (u onto v)
        var rdc = vec3.dot(d, c);
        var pc = vec3.create();
        vec3.scale(pc, d, rdc);

        // sphere behind origin p
        if (loc < 0)
        {
            if (vpc_m > r)
                console.log("No intersection");
            else if (vpc_m == r)
                console.log("Single intersection");
            else
                console.log("Double intersection");
        }
        // center of sphere projects on the ray
        else
        {
            var vpcc = vec3.create();
            vec3.subtract(vpcc, c, pc);
            if (vec3.length(vpcc) > r)
            {
                //return Infinity;
            }
            else
            {
                // get the distance from pc to the first intersection point
                var pcc = vec3.create();
                vec3.subtract(pcc, pc, c);
                var pcc_len = vec3.length(pcc);
                var dist = Math.sqrt(r*r - pcc_len*pcc_len)

                // get the distance from p to the first intersection point
                var pcp = vec3.create();
                vec3.subtract(pcp, pc, p);
                if (vpc_m > r)
                {
                    d = vec3.length(pcp) - dist;
                }
                else
                {
                    d = vec3.length(pcp) + dist;
                }
                if (d < min_d)
                {
                    min_d = d;
                    min_i = i;
                }
            } 
        }
    }
    return min_i;
}

/* Triangle mesh class */
function Mesh(gl, vpa, vna, vca, program)
{
    // colors
    this.WHITE = 0;
    this.WHITE_HOVER = 1;
    this.WHITE_SELECTED = 2;
    this.BLACK = 3;
    this.BLACK_HOVER = 4;
    this.BLACK_SELECTED = 5;
    this.NUM_COLORS = 6;

    // reference to the shader program (REMOVE ME)
    this.program = program;

    // properties unique to each mesh
    this.vert = [];
    this.color = [];
    this.team = [];
    this.normal = [];
    this.translation = [];
    this.flip = [];
    this.type = [];

    // tile positions
    this.index = [];
    for (var i = 0; i < 8*8; i++)
        this.index.push(-1);

    // static properties
    this.selected = -1;

    // init buffers for vertices of each piece type
    this.piece_vertices = [];
    this.piece_vertices.push(InitPawnVertices(gl));
    this.piece_vertices.push(InitRookVertices(gl));
    this.piece_vertices.push(InitKnightVertices(gl));
    this.piece_vertices.push(InitBishopVertices(gl));
    this.piece_vertices.push(InitQueenVertices(gl));
    this.piece_vertices.push(InitKingVertices(gl));
    this.piece_vertices.push(InitBoardVertices(gl));

    // init color buffers for each piece type
    this.piece_colors = [];
    for (var i = 0; i < this.NUM_COLORS; i++)
    {
        this.piece_colors.push([]);
        this.piece_colors[i].push(InitPawnColors(gl, i));
        this.piece_colors[i].push(InitRookColors(gl, i));
        this.piece_colors[i].push(InitKnightColors(gl, i));
        this.piece_colors[i].push(InitBishopColors(gl, i));
        this.piece_colors[i].push(InitQueenColors(gl, i));
        this.piece_colors[i].push(InitKingColors(gl, i));
        this.piece_colors[i].push(InitBoardColors(gl, i));
    }

    // init normal buffers for each piece type
    this.piece_normals = [];
    this.piece_normals.push(InitPawnNormals(gl));
    this.piece_normals.push(InitRookNormals(gl));
    this.piece_normals.push(InitKnightNormals(gl));
    this.piece_normals.push(InitBishopNormals(gl));
    this.piece_normals.push(InitQueenNormals(gl));
    this.piece_normals.push(InitKingNormals(gl));
    this.piece_normals.push(InitBoardNormals(gl));

    // piece types
    this.PAWN = 0;
    this.ROOK = 1;
    this.KNIGHT = 2;
    this.BISHOP = 3;
    this.QUEEN = 4;
    this.KING = 5;
    this.BOARD = 6;

    // get mesh triangles for collision detection
    //this.triangles = [];
    //InitTriangles(this.triangles);

    // vertex attributes
    this.vpa = vpa;
    this.vna = vna;
    this.vca = vca; 

    // drawing methods
    this.TRIANGLES = gl.TRIANGLES;
    this.LINE_LOOP = gl.LINE_LOOP;

    // number of meshs
    this.num = 0;
} 

Mesh.prototype.add = function(type, position, flip, color, tile)
{
    this.type.push(type);
    this.color.push(color);
    this.team.push(color);
    this.translation.push(position);
    this.flip.push(flip);
    this.index[tile] = this.num;
    this.num++;
}

Mesh.prototype.set_t = function(i, t)
{
    this.translation[i] = t;
}

Mesh.prototype.update_r = function(i, r)
{
    mat4.multiply(this.r_mats[i], r, this.r_mats[i]);
}

Mesh.prototype.set_r = function()
{

}

Mesh.prototype.set_mv = function(i, mv)
{
    if (this.flip[i])
    {
        mat4.translate(mv, mv, [0,14,0]);
        mat4.rotate(mv, mv, degToRad(180), [0,0,1]);
    }
    mat4.translate(mv, mv, this.translation[i]);
}

Mesh.prototype.ray_sphere_collision = function(i, vm, p, d)
{
    // make the model view matrix for this mesh
    this.set_mv(i, vm);

    // get world center of sphere
    var c = [0.0, 0.0, 0.0, 1.0];
    var wc = vec4.create();
    vec4.transformMat4(wc, c, vm); 
    c = [wc[0], wc[1], wc[2]];  

    // radius is about 1.0
    var r = 1.0;

    // vector from p to c
    var vpc = vec3.create();
    vec3.subtract(vpc, c, p);
    var vpc_m = vec3.length(vpc);
    
    // distance from vpc to d
    var loc = vec3.dot(vpc, d);

    // calculate pc: projection of center onto ray (u onto v)
    var rdc = vec3.dot(d, c);
    var pc = vec3.create();
    vec3.scale(pc, d, rdc);

    // sphere behind origin p
    if (loc < 0)
    {
        if (vpc_m > r)
            console.log("No intersection");
        else if (vpc_m == r)
            console.log("Single intersection");
        else
            console.log("Double intersection");
    }
    // center of sphere projects on the ray
    else
    {
        var vpcc = vec3.create();
        vec3.subtract(vpcc, c, pc);
        if (vec3.length(vpcc) > r)
        {
            return Infinity;
        }
        else
        {
            // get the distance from pc to the first intersection point
            var pcc = vec3.create();
            vec3.subtract(pcc, pc, c);
            var pcc_len = vec3.length(pcc);
            var dist = Math.sqrt(r*r - pcc_len*pcc_len)

            // get the distance from p to the first intersection point
            var pcp = vec3.create();
            vec3.subtract(pcp, pc, p);
            if (vpc_m > r)
                return vec3.length(pcp) - dist;
            else
                return vec3.length(pcp) + dist;
        } 
    }
}

Mesh.prototype.ray_triangle_collision = function(i, vm, p, d)
{
    // make the model view matrix for this mesh
    this.set_mv(i, vm);

    // vertices
    var wv = vec4.create();
    var v0 = vec3.create();
    var v1 = vec3.create();
    var v2 = vec3.create();

    var min_t = Infinity;
    var min_j = -1;

    for (var j = 0; j < this.triangles.length; j++)
    {
        var v0 = [this.triangles[j][0][0], this.triangles[j][0][1], this.triangles[j][0][2], 1];
        vec4.transformMat4(wv, v0, vm); 
        v0 = [wv[0], wv[1], wv[2]];  

        var v1 = [this.triangles[j][1][0], this.triangles[j][1][1], this.triangles[j][1][2], 1];
        vec4.transformMat4(wv, v1, vm); 
        v1 = [wv[0], wv[1], wv[2]];  

        var v2 = [this.triangles[j][2][0], this.triangles[j][2][1], this.triangles[j][2][2], 1];
        vec4.transformMat4(wv, v2, vm); 
        v2 = [wv[0], wv[1], wv[2]];  

        var e1 = vec3.create();
        var e2 = vec3.create();

        vec3.subtract(e1, v1, v0);
        vec3.subtract(e2, v2, v0);

        var h = vec3.create();
        vec3.cross(h, d, e2);
        var a = vec3.dot(e1, h);

        if (a > -0.00001 && a < 0.00001)
            continue;

        var f = 1.0/a;
        var s = vec3.create();
        vec3.subtract(s, p, v0);
        var u = f * vec3.dot(s, h);

        if (u < 0.0 || u > 1.0)
            continue;

        var q = vec3.create();
        vec3.cross(q, s, e1);
        var v = f * vec3.dot(d, q);

        if (v < 0.0 || u+v > 1.0)
            continue;

        var t = f * vec3.dot(e2, q);

        if ( t > 0.00001)
        {
            if (t < min_t)
            {
                min_t = t;
                min_j = j;
            }
        }
        else
            continue;
    }
    return min_t;
}

Mesh.prototype.draw = function(i)
{
    var t = this.type[i];
    var c = this.color[i];
    this.draw_verts(this.piece_vertices[t], 
                    this.piece_normals[t], 
                    this.piece_colors[c][t], 
                    this.TRIANGLES); 
    //this.draw_verts(this.vert[i], this.normal[i], this.color[i], this.TRIANGLES); 
    //this.draw_verts(this.vert[i], this.LINE_LOOP, this.color[i]); 
}

Mesh.prototype.draw_verts = function(vertices, normals, colors, method)
{
    // vertex buffers
    gl.bindBuffer(gl.ARRAY_BUFFER, vertices);
    gl.vertexAttribPointer(this.vpa, vertices.itemSize, gl.FLOAT, false, 0, 0);

    // normal buffers
    gl.bindBuffer(gl.ARRAY_BUFFER, normals);
    gl.vertexAttribPointer(this.vna, normals.itemSize, gl.FLOAT, false, 0, 0);

    // color buffers
    gl.bindBuffer(gl.ARRAY_BUFFER, colors);
    gl.vertexAttribPointer(this.vca, colors.itemSize, gl.FLOAT, false, 0, 0);

    // lighting
    var lighting = document.getElementById("lighting").checked;
    gl.uniform1i(this.program.useLightingUniform, lighting);
    if (lighting) 
    {
        gl.uniform3f(
            this.program.ambientColorUniform,
            parseFloat(document.getElementById("ambientR").value),
            parseFloat(document.getElementById("ambientG").value),
            parseFloat(document.getElementById("ambientB").value)
        );

        var lightingDirection = [
            parseFloat(document.getElementById("lightDirectionX").value),
            parseFloat(document.getElementById("lightDirectionY").value),
            parseFloat(document.getElementById("lightDirectionZ").value)
        ];
        var adjustedLD = vec3.create();
        vec3.normalize(adjustedLD, lightingDirection);
        vec3.scale(adjustedLD, adjustedLD, -1);
        gl.uniform3fv(this.program.lightingDirectionUniform, adjustedLD);

        gl.uniform3f(
            this.program.directionalColorUniform,
            parseFloat(document.getElementById("directionalR").value),
            parseFloat(document.getElementById("directionalG").value),
            parseFloat(document.getElementById("directionalB").value)
        );
    }

    // draw stuff
    gl.drawArrays(method, 0, vertices.numItems);
}

function degToRad(degrees) 
{
    return degrees * Math.PI / 180;
}
