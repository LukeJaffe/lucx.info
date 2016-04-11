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
