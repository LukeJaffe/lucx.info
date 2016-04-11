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
