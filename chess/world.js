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
