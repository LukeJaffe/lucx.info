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
