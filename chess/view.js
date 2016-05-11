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
        mat4.translate(this.world.mv, this.world.mv, [-8,-8,0]);

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
