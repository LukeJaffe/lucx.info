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

            // get the position of your king in this config
            var king_pos = config.king_pos(this.team); 

            // check all possible moves of every enemy piece to see if any put you in check
            // for this config
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
        // check for mouse collisions with the board
        this.t2 = this.view.board_collision(new_x, new_y);
        if (this.t2 >= 0)
        {

            // select the tile
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
