/* Utility functions */
//TODO: encapsulate and move to another file
function degToRad(degrees) 
{
    return degrees * Math.PI / 180;
}

/* Game class */
function Game()
{
    this.team = Piece.TEAMS.WHITE;
    this.view = new View(this.team);

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.enable(gl.DEPTH_TEST);

    // game stuff
    this.ps = false;
    this.t1 = -1;
    this.t2 = -1;

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
    this.t_start = [7, 4, 30];
    this.t_zoom = [0, 0, 4];
    this.t_inc = vec3.create();
}

Game.prototype.clear = function()
{
    gl.viewport(0, 0, gl.viewport_width, gl.viewport_height);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
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
    this.view.draw();
}

Game.prototype.handle_mouse_down = function(event) 
{
    this.last_mouse_x = event.clientX;
    this.last_mouse_y = event.clientY;

    this.mouse_down = true;

    // check to see if any meshs are selected
    var ps = Piece.selected;
    var bs = this.view.world.board.selected;

    if (this.ps)
    {
        if (bs == -1)
        {
            this.ps = false;
            this.view.clear_selected();
        }
        else
        {
            this.ps = false;
            this.view.world.board.selected = -1;
            this.view.clear_selected();

            // see if player moved into check
            // TODO: finish

            // check for castling
            if (this.view.world.config.teams[this.t2] == Piece.STATUS.FRIEND)
            {
                // TODO: finish
            }
            else
            {
                dt = this.view.world.board.get_vector(this.t1, this.t2);
                this.view.world.config.transform(this.t1, this.t2, dt);
                console.log("taken move: " + this.t1 + " -> "+ this.t2);
            }
        }
        return;
    }

    if (ps !== -1)
    {
        // set the piece to selected color
        if (this.view.world.config.pieces[ps].team == Piece.TEAMS.WHITE)
            this.view.world.config.pieces[ps].color = Piece.COLORS.WHITE_SELECTED;
        else
            this.view.world.config.pieces[ps].color = Piece.COLORS.BLACK_SELECTED;
        this.ps = true;

        var t1 = this.view.world.config.index.indexOf(ps);

        // calculate all possible moves for the piece excluding check scenarios
        this.moves = this.view.world.config.pieces[ps].moves(this.view.world.config, t1);

        // for all possible moves, check each move to see if it puts you in check
        for (var i = 0; i < this.moves.length; i++)
        {
            // copy the current config into a new one
            var config = this.view.world.config.clone(); 

            // transform the config for the current move option
            config.transform(t1, this.moves[i], null);

            var king_pos = config.king_pos(this.team); 
            for (var j = 0; j < config.pieces.length; j++)
            {
                if (config.pieces[j].team != this.team)
                {
                    var moves = config.pieces[j].moves(config, config.index.indexOf(j));
                    if (moves.indexOf(king_pos) !== -1)
                        this.moves[i] = -1;
                }
            }       
        }

        // show possible moves on the board
        for (var i = 0; i < this.moves.length; i++)
            this.view.world.board.options[this.moves[i]] = 1;
    }
}

Game.prototype.handle_mouse_up = function(event) 
{
    this.mouse_down = false;
}

Game.prototype.handle_mouse_move = function(event) 
{
    var new_x = event.clientX;
    var new_y = event.clientY;

    if (this.mouse_down)
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

    if (this.ps)
    {
        // Check for mouse collisions with the board
        this.t2 = this.view.board_collision(new_x, new_y);
        if (this.t2 >= 0)
        {
            // Check if the piece can move here 
            //var legal = this.view.world.config.pieces[Piece.selected].legal(this.t2);

            // if yes, select the tile
            //if (legal >= 0)
            //    this.view.world.board.selected = this.t2;
            //else
            //    this.view.world.board.selected = -1;
            if (this.moves.indexOf(this.t2) >= 0)
                this.view.world.board.selected = this.t2
            else
                this.view.world.board.selected = -1;
        }
    }
    else
    {
        // Check for mouse collisions with the pieces
        this.t1 = this.view.piece_collision(new_x, new_y);
    }

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
        //this.view.clear_selected();
    }
}

/* View class */
function View(team)
{
    // world
    this.world = new World(team);

    // camera
    this.camera = new Camera(gl);

    // cursor
    this.cursor = new Cursor();

    // viewing mode
    this.mode = 0; // zoomed out
}

View.prototype = 
{
    set : function()
    {
        gl.uniformMatrix4fv(shader.program.pMatrixUniform, false, this.camera.p);
        gl.uniformMatrix4fv(shader.program.mvMatrixUniform, false, this.world.mv);

        var normalMatrix = mat3.create();
        mat4.toInverseMat3(this.world.mv, normalMatrix);
        mat3.transpose(normalMatrix, normalMatrix);
        gl.uniformMatrix3fv(shader.program.nMatrixUniform, false, normalMatrix);
    },

    draw : function(vm)
    {
        // clear the viewport
        gl.viewport(0, 0, gl.viewport_width, gl.viewport_height);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        // set model view to identity
        this.world.clear_mv();

        // apply the view matrix to the model matrix
        mat4.multiply(this.world.mv, this.world.mv, this.camera.vm());

        // draw the board
        this.world.push_mv();
        this.world.board.set_mv(this.world.mv);
        this.set();
        this.world.board.draw(shader);
        this.world.pop_mv();

        // draw world objects
        for (var i = 0; i < this.world.config.pieces.length; i++)
        {
            // push the current mv matrix on the stack
            this.world.push_mv();
            // set the mv matrix for mesh i
            this.world.config.pieces[i].move(this.world.mv);
            // set the shader matrices
            this.set();
            // draw the mesh
            this.world.config.pieces[i].draw(this.world.config.pieces[i].color);
            // pop the top mv matrix off the stack
            this.world.pop_mv();
        }
    },

    board_collision : function(x, y)
    {
        // update cursor
        this.cursor.update(x, y, this.camera.p);

        // test for collision with all tiles
        var t = this.world.board.collision(this.camera.vm(), this.cursor.p, this.cursor.d)
        return t;
    },

    piece_collision : function(x, y)
    {
        // update cursor
        this.cursor.update(x, y, this.camera.p);

        // test for collision with all tiles
        var t = this.world.board.collision(this.camera.vm(), this.cursor.p, this.cursor.d)
        var s = this.world.config.index[t];
        Piece.selected = -1;
        for (var i = 0; i < this.world.config.pieces.length; i++)
        {
            if (i == s)
            {
                if (this.world.config.pieces[i].team == Piece.COLORS.WHITE)
                    this.world.config.pieces[i].color = Piece.COLORS.WHITE_HOVER;
                else
                    this.world.config.pieces[i].color = Piece.COLORS.BLACK_HOVER;
                Piece.selected = i;
            }
            else
            {
                this.world.config.pieces[i].color = this.world.config.pieces[i].team*3;
            }
        }
        return t;
    },


    sphere_collision : function(x, y)
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
    },

    clear_selected : function()
    {
        Piece.selected = -1;
        for (var i = 0; i < this.world.config.pieces.length; i++)
        {
            this.world.config.pieces[i].color = this.world.config.pieces[i].team*3;
        }

        for (var i = 0; i < this.world.board.NUM_TILES; i++)
        {
            this.world.board.options[i] = 0;
        }
    },
}

function Config(team)
{
    // chess piece variables
    // set the team
    this.team = team;

    this.num = 0;
    this.pieces = [];
    this.index = [];
    this.teams = [];
    for (var i = 0; i < 8*8; i++)
    {
        this.index.push(-1);
        this.teams.push(Piece.STATUS.EMPTY);
    }
}

Config.prototype = 
{
    add : function(type, position, flip, team, tile)
    {
        switch (type)
        {
            case Piece.TYPES.PAWN:
                this.pieces.push(new Pawn(position, flip, team));
                break;
            case Piece.TYPES.ROOK:
                this.pieces.push(new Rook(position, flip, team));
                break;
            case Piece.TYPES.KNIGHT:
                this.pieces.push(new Knight(position, flip, team));
                break;
            case Piece.TYPES.BISHOP:
                this.pieces.push(new Bishop(position, flip, team));
                break;
            case Piece.TYPES.QUEEN:
                this.pieces.push(new Queen(position, flip, team));
                break;
            case Piece.TYPES.KING:
                this.pieces.push(new King(position, flip, team));
                break;
            default:
                break;
        }
        this.index[tile] = this.num;
        this.teams[tile] = team;
        this.num++;
    },

    kill : function(i)
    {
        //console.log("killed: "+ i);
        this.pieces[i].alive = 0;
    },

    transform : function(t1, t2, dt)
    {
        // get the selected piece
        ps = this.index[t1];

        // kill the enemy piece (if there is one)
        if (this.teams[t2] != this.teams[t1] && this.teams[t2] != Piece.STATUS.EMPTY)
            this.kill(this.index[t2])

        // move the piece!
        if (dt !== null)
        {
            t = this.pieces[ps].position;
            this.pieces[ps].position = [t[0]+dt[0], t[1]+dt[1], t[2]];
        }

        // update the teams
        this.teams[t2] = this.pieces[ps].team;
        // TODO: Friend if castled!
        this.teams[t1] = Piece.STATUS.EMPTY;

        // update the index of the piece
        this.index[t2] = this.index[t1];
        this.index[t1] = -1;

        // update the start variable (even if already 0)
        this.pieces[ps].start = 0;
    },

    init : function()
    {
        // add all pieces
        this.add(Piece.TYPES.ROOK,    [1, 1, 0],   0, Piece.TEAMS.WHITE, 0);
        this.add(Piece.TYPES.KNIGHT,  [3, 1, 0],   0, Piece.TEAMS.WHITE, 8);
        this.add(Piece.TYPES.BISHOP,  [5, 1, 0],   0, Piece.TEAMS.WHITE, 16);
        this.add(Piece.TYPES.QUEEN,   [7, 1, 0],   0, Piece.TEAMS.WHITE, 24);
        this.add(Piece.TYPES.KING,    [9, 1, 0],   0, Piece.TEAMS.WHITE, 32);
        this.add(Piece.TYPES.BISHOP,  [11, 1, 0],  0, Piece.TEAMS.WHITE, 40);
        this.add(Piece.TYPES.KNIGHT,  [13, 1, 0],  0, Piece.TEAMS.WHITE, 48);
        this.add(Piece.TYPES.ROOK,    [15, 1, 0],  0, Piece.TEAMS.WHITE, 56);

        this.add(Piece.TYPES.ROOK,    [1, 15, 0],  0, Piece.TEAMS.BLACK, 7);
        this.add(Piece.TYPES.KNIGHT,  [3, 15, 0],  1, Piece.TEAMS.BLACK, 15);
        this.add(Piece.TYPES.BISHOP,  [5, 15, 0],  1, Piece.TEAMS.BLACK, 23);
        this.add(Piece.TYPES.QUEEN,   [7, 15, 0],  0, Piece.TEAMS.BLACK, 31);
        this.add(Piece.TYPES.KING,    [9, 15, 0],  0, Piece.TEAMS.BLACK, 39);
        this.add(Piece.TYPES.BISHOP,  [11, 15, 0], 1, Piece.TEAMS.BLACK, 47);
        this.add(Piece.TYPES.KNIGHT,  [13, 15, 0], 1, Piece.TEAMS.BLACK, 55);
        this.add(Piece.TYPES.ROOK,    [15, 15, 0], 0, Piece.TEAMS.BLACK, 63);

        for (var i = 0; i < 8; i++)
            this.add(Piece.TYPES.PAWN, [2*i+1, 3, 0], 0, Piece.TEAMS.WHITE, (8*i)+1);

        for (var i = 0; i < 8; i++)
            this.add(Piece.TYPES.PAWN, [2*i+1, 13, 0], 0, Piece.TEAMS.BLACK, (8*i)+6);
    },

    clone : function() 
    {
        var newc = new Config();
        newc.num = this.num;
        newc.index = this.index.slice(0);
        newc.teams = this.teams.slice(0);    
        newc.pieces = []
        for (var i = 0; i < this.pieces.length; i++)
            newc.pieces.push(this.pieces[i].clone());
        return newc;
    },

    king_pos : function(team)
    {
        for (var i = 0; i < this.pieces.length; i++)
            if (this.pieces[i].team == team)
                if (this.pieces[i].type == Piece.TYPES.KING)
                    return this.index.indexOf(i);
    }
}

function World(team)
{
    // matrices
    this.stack = [];
    this.mv = mat4.create();

    // chess board
    this.board = new Board();

    // primary configuration
    this.config = new Config(team);
    this.config.init();

    // give piece object pointers to needed variables
    Piece.index = this.config.index;
    Piece.teams = this.config.teams;
    Piece.team = this.config.team;
}

World.prototype = 
{
    clear_mv : function()
    {
        mat4.identity(this.mv);
    },

    push_mv : function()
    {
        var copy = mat4.create();
        mat4.copy(copy, this.mv);
        this.stack.push(copy);
    },

    pop_mv : function()
    {
        if (this.stack.length == 0) 
        {
            throw "Invalid popMatrix!";
        }
        this.mv = this.stack.pop();
    },
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
    this.tv = [7, 4, 30];
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
            this.centers.push([i,j,0,1]);

    this.vertices = [];
    InitBoardVertices(this.vertices);

    this.normals = [];
    InitBoardNormals(this.normals);

    this.colors = [];
    InitBoardColors(this.colors);

    this.shaded = [];
    InitBoardShaded(this.shaded);

    this.picked = [];
    InitBoardSelected(this.picked);

    this.NUM_TILES = 64;
    this.selected = -1;
    this.options = [];
    for (var i = 0; i < this.NUM_TILES; i++)
        this.options.push(0);
}

Board.prototype.set_mv = function(mv)
{
    mat4.translate(mv, mv, [0,0,0]);
}

Board.prototype.get_vector = function(i, j)
{
    u = this.centers[i];
    v = this.centers[j];
    return uv = [v[0] - u[0], v[1] - u[1]];
}

Board.prototype.draw = function()
{
    for (var i = 0; i < this.NUM_TILES; i++)
    {
        if (this.selected == i)
            shader.draw(this.vertices[i], this.normals[i], this.picked[i], gl.TRIANGLES); 
        else if (this.options[i])
            shader.draw(this.vertices[i], this.normals[i], this.shaded[i], gl.TRIANGLES); 
        else
            shader.draw(this.vertices[i], this.normals[i], this.colors[i], gl.TRIANGLES); 
    }
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

/* Chess piece class */
function Piece(position, flip, team)
{
    this.position = position;
    this.flip = flip;
    this.alive = 1;

    // set team and color accordingly
    this.team = team;
    if (this.team == Piece.TEAMS.WHITE)
        this.color = Piece.COLORS.WHITE;
    else
        this.color = Piece.COLORS.BLACK;
}

/* Piece constants */
Piece.TYPES = 
{
    PAWN : 0,
    ROOK : 1,
    KNIGHT : 2,
    BISHOP : 3,
    QUEEN : 4,
    KING : 5
}

Piece.COLORS = 
{
    WHITE : 0,
    WHITE_HOVER : 1,
    WHITE_SELECTED : 2,
    BLACK : 3,
    BLACK_HOVER : 4,
    BLACK_SELECTED : 5,
    NUM : 6
}

Piece.TEAMS = 
{
    WHITE : 0,
    BLACK : 1
}

Piece.STATUS = 
{
    WHITE : 0,
    BLACK : 1,
    EMPTY : 2
}

Piece.WHITE_KING = 32;
Piece.BLACK_KING = 39;

/* Piece methods */
Piece.prototype = 
{
    clone : function()
    {
        console.log("Piece.prototype.clone: virtual function");
        return null;
    },

    // Empty methods: must be implemented in child
    vertices : function() { return null; },
    normals : function() { return null; },
    colors : function(i) { return null; },

    // Translate and rotate the model view
    move : function(mv)
    {
        mat4.translate(mv, mv, this.position);
        if (this.flip)
            mat4.rotate(mv, mv, degToRad(180), [0,0,1]);
    },

    // Draw function
    // TODO: make gl and shader global?
    draw : function(color)
    {
        if (this.alive)
            shader.draw(this.vertices(), this.normals(), this.colors(color), gl.TRIANGLES);
    },

    l : function(i)
    {
        // left edge
        if (i < 8)
            return -1;
        else
            return i-8;
    },

    ul : function(i)
    {
        var u = this.u(i);
        var ul = this.l(u);
        if (ul < 0 || u < 0)
            return -1;
        else
            return ul;
    },

    u : function(i)
    {
        // top edge
        if ((i-7)%8 == 0 || i < 0)
            return -1;
        else
            return i+1;
    },

    ur : function(i)
    {
        var u = this.u(i);
        var ur = this.r(u);
        if (ur < 0 || u < 0)
            return -1;
        else
            return ur;
    },

    r : function(i)
    {
        // right edge
        if (i >= 56 || i < 0)
            return -1;
        else
            return i+8;
    },

    dr : function(i)
    {
        var d = this.d(i);
        var dr = this.r(d);
        if (dr < 0 || d < 0)
            return -1;
        else
            return dr;
    },

    d : function(i)
    {
        // bottom edge
        if (i%8 == 0 || i < 0)
            return -1;
        else
            return i-1;
    },

    dl : function(i)
    {
        var d = this.d(i);
        var dl = this.l(d);
        if (dl < 0 || d < 0)
            return -1;
        else
            return dl;
    },

    wf : function(i)
    {
        return this.u(i);
    },

    wfl : function(i)
    {
        return this.ul(i);
    },

    wfr : function(i)
    {
        return this.ur(i);
    },

    bf : function(i)
    {
        return this.d(i);
    },

    bfl : function(i)
    {
        return this.dl(i);
    },

    bfr : function(i)
    {
        return this.dr(i);
    },

    horizontal : function(t1, moves, config)
    {
        // check up left
        var u = t1;
        while (u >= 0)
        {
            // get the next tile up
            u = this.u(u);

            // tile has friend
            if (config.teams[u] == this.team)
            {
                u = -1;
            }
            // tile has enemy
            else if (config.teams[u] != this.team && config.teams[u] != Piece.STATUS.EMPTY)
            {
                moves.push(u);
                u = -1;
            }
            // tile is empty
            else
            {
                moves.push(u);
            }
        }

        // check up right
        var r = t1;
        while (r >= 0)
        {
            // get the next tile up
            r = this.r(r);

            // tile has friend
            if (config.teams[r] == this.team)
            {
                r = -1;
            }
            // tile has enemy
            else if (config.teams[r] != this.team && config.teams[r] != Piece.STATUS.EMPTY)
            {
                moves.push(r);
                r = -1;
            }
            // tile is empty
            else
            {
                moves.push(r);
            }
        }

        // check down left
        var l = t1;
        while (l >= 0)
        {
            // get the next tile up
            l = this.l(l);

            // tile has friend
            if (config.teams[l] == this.team)
            {
                l = -1;
            }
            // tile has enemy
            else if (config.teams[l] != this.team && config.teams[l] != Piece.STATUS.EMPTY)
            {
                moves.push(l);
                l = -1;
            }
            // tile is empty
            else
            {
                moves.push(l);
            }
        }

        // check down right
        var d = t1;
        while (d >= 0)
        {
            // get the next tile up
            d = this.d(d);

            // tile has friend
            if (config.teams[d] == this.team)
            {
                d = -1;
            }
            // tile has enemy
            else if (config.teams[d] != this.team && config.teams[d] != Piece.STATUS.EMPTY)
            {
                moves.push(d);
                d = -1;
            }
            // tile is empty
            else
            {
                moves.push(d);
            }
        }
    },
    
    diagonal : function(t1, moves, config)
    {
        // check up left
        var ul = t1;
        while (ul >= 0)
        {
            // get the next tile up
            ul = this.ul(ul);

            // tile has friend
            if (config.teams[ul] == this.team)
            {
                ul = -1;
            }
            // tile has enemy
            else if (config.teams[ul] != this.team && config.teams[ul] != Piece.STATUS.EMPTY)
            {
                moves.push(ul);
                ul = -1;
            }
            // tile is empty
            else
            {
                moves.push(ul);
            }
        }

        // check up right
        var ur = t1;
        while (ur >= 0)
        {
            // get the next tile up
            ur = this.ur(ur);

            // tile has friend
            if (config.teams[ur] == this.team)
            {
                ur = -1;
            }
            // tile has enemy
            else if (config.teams[ur] != this.team && config.teams[ur] != Piece.STATUS.EMPTY)
            {
                moves.push(ur);
                ur = -1;
            }
            // tile is empty
            else
            {
                moves.push(ur);
            }
        }

        // check down left
        var dl = t1;
        while (dl >= 0)
        {
            // get the next tile up
            dl = this.dl(dl);

            // tile has friend
            if (config.teams[dl] == this.team)
            {
                dl = -1;
            }
            // tile has enemy
            else if (config.teams[dl] != this.team && config.teams[dl] != Piece.STATUS.EMPTY)
            {
                moves.push(dl);
                dl = -1;
            }
            // tile is empty
            else
            {
                moves.push(dl);
            }
        }

        // check down right
        var dr = t1;
        while (dr >= 0)
        {
            // get the next tile up
            dr = this.dr(dr);

            // tile has friend
            if (config.teams[dr] == this.team)
            {
                dr = -1;
            }
            // tile has enemy
            else if (config.teams[dr] != this.team && config.teams[dr] != Piece.STATUS.EMPTY)
            {
                moves.push(dr);
                dr = -1;
            }
            // tile is empty
            else
            {
                moves.push(dr);
            }
        }
    }
};

/* Piece global attibutes */
Piece.selected = -1;

/* Pawn class */
function Pawn(position, flip, team)
{
    Piece.call(this, position, flip, team)
    this.type = Piece.TYPES.PAWN;
    this.start = 1;
}

/* Pawn constants */
/* NOTE: Must be done like this because 
 * these functions use global gl variable 
 * which must be initialized before it can be used */
Pawn.INIT_CONSTANTS = function ()
{
    Pawn.VERTICES = InitPawnVertices(); 
    Pawn.NORMALS = InitPawnNormals();
    Pawn.COLORS = [];
    for (var i = 0; i < Piece.COLORS.NUM; i++)
    {
        Pawn.COLORS.push(InitPawnColors(i));
    }
}

/* Pawn methods */
Pawn.prototype = Object.create(Piece.prototype,
{
    clone : { value : function()
    {
        var newp = new Pawn(this.position, this.flip, this.team);
        newp.alive = this.alive;
        return newp;
    }},

    vertices : { value : function() { return Pawn.VERTICES; } },
    normals : { value : function() { return Pawn.NORMALS; } },
    colors : { value : function(i) { return Pawn.COLORS[i]; } },

    moves: { value : function(config, t1)
    {
        var moves = [];

        if (this.team == Piece.TEAMS.WHITE)
        {
            // forward moves
            var f = this.wf(t1);
            if (config.teams[f] == Piece.STATUS.EMPTY)
            {
                moves.push(f);
                var ff = this.wf(f);
                if (this.start && config.teams[ff] == Piece.STATUS.EMPTY)
                    moves.push(ff);
            }

            // diagonal moves
            var fl = this.wfl(t1);
            if (config.teams[fl] == Piece.STATUS.BLACK)
                moves.push(fl);
            var fr = this.wfr(t1);
            if (config.teams[fr] == Piece.STATUS.BLACK)
                moves.push(fr);
        }
        else
        {
            // forward moves
            var f = this.bf(t1);
            if (config.teams[f] == Piece.STATUS.EMPTY)
            {
                moves.push(f);
                var ff = this.bf(f);
                if (this.start && config.teams[ff] == Piece.STATUS.EMPTY)
                    moves.push(ff);
            }

            // diagonal moves
            var fl = this.bfl(t1);
            if (config.teams[fl] == Piece.STATUS.WHITE)
                moves.push(fl);
            var fr = this.bfr(t1);
            if (config.teams[fr] == Piece.STATUS.WHITE)
                moves.push(fr);
        }

        var i;
        while ((i = moves.indexOf(-1)) !== -1)
            moves.splice(i, 1);

        return moves;
    }}
});


/* Rook class */
function Rook(position, flip, team)
{
    Piece.call(this, position, flip, team)
    this.type = Piece.TYPES.ROOK;
    this.start = 1;
}

/* Rook constants */
Rook.INIT_CONSTANTS = function ()
{
    Rook.VERTICES = InitRookVertices(); 
    Rook.NORMALS = InitRookNormals();
    Rook.COLORS = [];
    for (var i = 0; i < Piece.COLORS.NUM; i++)
    {
        Rook.COLORS.push(InitRookColors(i));
    }
}

/* Rook methods */
// You can only castle with rook (not king)
Rook.prototype = Object.create(Piece.prototype,
{
    clone : { value : function()
    {
        var newp = new Rook(this.position, this.flip, this.team);
        newp.alive = this.alive;
        return newp;
    }},

    vertices : { value : function() { return Rook.VERTICES; } },
    normals : { value : function() { return Rook.NORMALS; } },
    colors : { value : function(i) { return Rook.COLORS[i]; } },

    moves: { value : function(config, t1)
    {
        moves = [];

        // check all horizontal moves
        this.horizontal(t1, moves, config);
  
        var i;
        while ((i = moves.indexOf(-1)) !== -1)
            moves.splice(i, 1);

        return moves;
    }}
});


/* Knight class */
function Knight(position, flip, team)
{
    Piece.call(this, position, flip, team)
    this.type = Piece.TYPES.KNIGHT;
}

/* Knight constants */
Knight.INIT_CONSTANTS = function ()
{
    Knight.VERTICES = InitKnightVertices(); 
    Knight.NORMALS = InitKnightNormals();
    Knight.COLORS = [];
    for (var i = 0; i < Piece.COLORS.NUM; i++)
    {
        Knight.COLORS.push(InitKnightColors(i));
    }
}

/* Knight methods */
Knight.prototype = Object.create(Piece.prototype,
{
    clone : { value : function()
    {
        var newp = new Knight(this.position, this.flip, this.team);
        newp.alive = this.alive;
        return newp;
    }},

    vertices : { value : function() { return Knight.VERTICES; } },
    normals : { value : function() { return Knight.NORMALS; } },
    colors : { value : function(i) { return Knight.COLORS[i]; } },

    moves: { value : function(config, t1)
    {
        var moves = [];

        moves.push(this.l(this.l(this.u(t1))));
        moves.push(this.u(this.u(this.l(t1))));

        moves.push(this.r(this.r(this.u(t1))));
        moves.push(this.u(this.u(this.r(t1))));
        
        moves.push(this.l(this.l(this.d(t1))));
        moves.push(this.d(this.d(this.l(t1))));
        
        moves.push(this.r(this.r(this.d(t1))));
        moves.push(this.d(this.d(this.r(t1))));

        var i;
        for (i = 0; i < moves.length; i++)
            if (config.teams[moves[i]] == this.team) 
                moves[i] = -1;

        while ((i = moves.indexOf(-1)) !== -1)
            moves.splice(i, 1);

        return moves;
    }}
});


/* Bishop class */
function Bishop(position, flip, team)
{
    Piece.call(this, position, flip, team)
    this.type = Piece.TYPES.BISHOP;
}

/* Bishop constants */
Bishop.INIT_CONSTANTS = function ()
{
    Bishop.VERTICES = InitBishopVertices(); 
    Bishop.NORMALS = InitBishopNormals();
    Bishop.COLORS = [];
    for (var i = 0; i < Piece.COLORS.NUM; i++)
    {
        Bishop.COLORS.push(InitBishopColors(i));
    }
}

/* Bishop methods */
Bishop.prototype = Object.create(Piece.prototype,
{
    clone : { value : function()
    {
        var newp = new Bishop(this.position, this.flip, this.team);
        newp.alive = this.alive;
        return newp;
    }},

    vertices : { value : function() { return Bishop.VERTICES; } },
    normals : { value : function() { return Bishop.NORMALS; } },
    colors : { value : function(i) { return Bishop.COLORS[i]; } },

    moves: { value : function(config, t1)
    {
        moves = [];

        // check all diagonal moves
        this.diagonal(t1, moves, config);

        var i;
        while ((i = moves.indexOf(-1)) !== -1)
            moves.splice(i, 1);

        return moves;
    }}
});

/* Queen class */
function Queen(position, flip, team)
{
    Piece.call(this, position, flip, team)
    this.type = Piece.TYPES.QUEEN;
}

/* Queen constants */
Queen.INIT_CONSTANTS = function ()
{
    Queen.VERTICES = InitQueenVertices(); 
    Queen.NORMALS = InitQueenNormals();
    Queen.COLORS = [];
    for (var i = 0; i < Piece.COLORS.NUM; i++)
    {
        Queen.COLORS.push(InitQueenColors(i));
    }
}

/* Queen methods */
Queen.prototype = Object.create(Piece.prototype,
{
    clone : { value : function()
    {
        var newp = new Queen(this.position, this.flip, this.team);
        newp.alive = this.alive;
        return newp;
    }},

    vertices : { value : function() { return Queen.VERTICES; } },
    normals : { value : function() { return Queen.NORMALS; } },
    colors : { value : function(i) { return Queen.COLORS[i]; } },

    moves: { value : function(config, t1)
    {
        // get board position of selected piece
        moves = [];
        
        // check all horizontal and diagonal positions
        this.horizontal(t1, moves, config);
        this.diagonal(t1, moves, config);

        var i;
        while ((i = moves.indexOf(-1)) !== -1)
            moves.splice(i, 1);

        return moves;
    }}
});

/* King class */
function King(position, flip, team)
{
    Piece.call(this, position, flip, team)
    this.type = Piece.TYPES.KING;
    this.start = 1;
}

/* King constants */
King.INIT_CONSTANTS = function ()
{
    King.VERTICES = InitKingVertices(); 
    King.NORMALS = InitKingNormals();
    King.COLORS = [];
    for (var i = 0; i < Piece.COLORS.NUM; i++)
    {
        King.COLORS.push(InitKingColors(i));
    }
}

/* King methods */
King.prototype = Object.create(Piece.prototype,
{
    clone : { value : function()
    {
        var newp = new King(this.position, this.flip, this.team);
        newp.alive = this.alive;
        return newp;
    }},

    vertices : { value : function() { return King.VERTICES; } },
    normals : { value : function() { return King.NORMALS; } },
    colors : { value : function(i) { return King.COLORS[i]; } },

    moves: { value : function(config, t1)
    {
        var moves = [];

        // can move one in any direction
        moves.push(this.u(t1));
        moves.push(this.ur(t1));
        moves.push(this.r(t1));
        moves.push(this.dr(t1));
        moves.push(this.d(t1));
        moves.push(this.dl(t1));
        moves.push(this.l(t1));
        moves.push(this.ul(t1));

        var i;
        for (i = 0; i < moves.length; i++)
        {
            var m = config.teams[moves[i]];
            if (m == this.team || m == -1) 
                moves[i] = -1;
        }

        while ((i = moves.indexOf(-1)) !== -1)
            moves.splice(i, 1);

        return moves;
    }}
});
