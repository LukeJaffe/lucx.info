/* Game Class */
function Game()
{
    /* Get a reference to the board, and the drawing context */
    this.canvas  = document.getElementById('board');
    if ( this.canvas && this.canvas.getContext ) 
    {
        this.context = this.canvas.getContext('2d');
    } 
    else 
    {
        /* Unsupported browser? */
        alert("Couldn't get a reference to the HTML 5 canvas."
          + "\nYour browser doesn't appear to support this page.");
    }

    /* Variables */
    this.hexes = [], this.roads = [], this.towns = [];
    this.default_state = 0;
    this.robber_hex = 0;
    this.build_road = false;
    this.build_town = false;
    this.build_city = false;
    this.build_card = false;
    this.place_robber = false;
    this.color = "black";
}

/* Main setup function */
Game.prototype.setup = function(seed)
{
    /* Variables */
    x0 = 310;
    y0 = 285;
    r = 48;

    a = r*0.5;
    b = r*Math.sqrt(3)/2;

    num_hexes = 19;

    resources = ['wood', 'wood', 'wood', 'wood',
                'wheat', 'wheat', 'wheat', 'wheat',
                'pasture', 'pasture', 'pasture', 'pasture',
                'ore', 'ore', 'ore',
                'brick', 'brick', 'brick',
                'desert'];

    rolls = [2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 8, 9, 9, 10, 10, 11, 11, 12];

    origins = 
    [ 
        [-2*b, -3*r], [0, -3*r], [2*b, -3*r],                    //First row
        [-3*b, -1.5*r], [-b, -1.5*r], [b, -1.5*r], [3*b, -1.5*r],//Second Row
        [-4*b, 0], [-2*b, 0], [0, 0], [2*b, 0], [4*b, 0],        //Third row
        [-3*b, 1.5*r], [-b, 1.5*r], [b, 1.5*r], [3*b, 1.5*r],    //Fourth row
        [-2*b, 3*r], [0, 3*r], [2*b, 3*r]                        //Last row
    ];

    water_origins = 
    [
        [-3*b, -4.5*r], [-b, -4.5*r], [b, -4.5*r], [3*b, -4.5*r],
        [-4*b, -3*r], [4*b, -3*r],                    
        [-5*b, -1.5*r], [5*b, -1.5*r],
        [-6*b, 0], [6*b, 0],        
        [-5*b, 1.5*r], [5*b, 1.5*r],    
        [-4*b, 3*r], [4*b, 3*r],       
        [-3*b, 4.5*r], [-b, 4.5*r], [b, 4.5*r], [3*b, 4.5*r]
    ];

    /* Shuffle indeces */
    resource_indices = [];
    roll_indices = [];
    for (var i = 0; i < num_hexes; i++)
    {
        resource_indices.push(i);
        if (i == num_hexes-1) break; 
        roll_indices.push(i);
    }

    shuffle(resource_indices, seed);
    shuffle(roll_indices, seed+1);

    roll_idx = 0;
    for (var i = 0; i < num_hexes; i++)
    {
        /* Get random indices */
        idx1 = resource_indices[i];
        idx2 = roll_indices[roll_idx];

        /* Create all needed hexes */
        if (resources[idx1] == 'desert')
        {
            this.hexes.push(new Hex(x0+origins[i][0], y0+origins[i][1], r, 
                new HexType('desert', 0)));
            this.robber_hex = i;
        }
        else    
        {
            this.hexes.push(new Hex(x0+origins[i][0], y0+origins[i][1], r, 
                new HexType(resources[idx1], rolls[idx2])));
            roll_idx += 1;
        }
    } 

    /* Add water hexes */
    for (var i = 0; i < water_origins.length; i++)
    {
        this.hexes.push(new Hex(x0+water_origins[i][0], y0+water_origins[i][1], r, 
            new HexType('water', 0)));
    }

    /* Get all road vertices */
    road_verts = [];
    for (var i = 0; i < this.hexes.length; i++)
        road_verts = road_verts.concat(this.hexes[i].roads); 
    road_verts = road_verts.unique_roads();

    /* Create road objects */
    for (var i = 0; i < road_verts.length; i++)
        this.roads.push(new Road(road_verts[i], r));

    /* Determine road adjacency */
    for (var i = 0; i < this.roads.length; i++)
        for (var j = 0; j < this.roads.length; j++)
            if (this.roads[i].adjacent(this.roads[j]) && i !== j)
                this.roads[i].add_adjacent(j);

    /* Get all vertices (for settlements/cities) */
    town_verts = [];
    for (var i = 0; i < this.hexes.length; i++)
        town_verts = town_verts.concat(this.hexes[i].verts);  
    town_verts = town_verts.unique_verts();

    /* Create town objects */
    for (var i = 0; i < town_verts.length; i++)
        this.towns.push(new Town(town_verts[i], r));

    /* Determine town->road adjacency */
    for (var i = 0; i < this.towns.length; i++)
        for (var j = 0; j < this.roads.length; j++)
            if (this.towns[i].adj_road(this.roads[j]))
                this.towns[i].add_adj_road(j);

    t = [0,0,0,0,0,0,0,0];
    for (var i = 0; i < this.towns.length; i++)
    {
        idx = this.towns[i].adj_roads.length;
        t[idx] += 1;
    }
    //console.log(t);

    /* Draw all hexes */
    for (var i = 0; i < this.hexes.length; i++)
        this.hexes[i].draw(this.context);

    /* Save the default canvas appearance */
    this.default_state = this.hexes[this.robber_hex].click(this.canvas, this.context);
}

/* Ajax */
Game.prototype.ajax = function()
{
    /* Get game name from session */
    $.post("http://lucx.info/catan/get_user.php", 
    function(response)
    {
        $("#user_name").html("Username: "+response);
    });

    /* Get game name from session */
    $.post("http://lucx.info/catan/get_game.php", 
    function(response)
    {
        $("#game_name").html("Game: "+response);
    });

    /* Get players in game and their colors */
    $.post("http://lucx.info/catan/get_players.php", 
    function(response)
    {
        /* Get player table */
        var table = document.getElementById("player_table");

        /* Parse response */
        var result = $.parseJSON(response);

        /* Draw html elements */
        for (var j = result.length-1; j >= 0; j--)
        {
            for (var i = 0; i < result.length-1; i++)
            {
                if (result[i][3] == j)
                {
                    var row = table.insertRow(0);
                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);
                    cell1.innerHTML = "<button id='"+result[i][1]+"_button' style='background-color:#9FBCBF;'>"+result[i][1]+"</button>";
                    var c = result[i][2];
                    cell2.innerHTML = "<"+c+">_____</"+c+">";
                }
            }
        }
    });

    /* Get this player's color and save to game object */
    var game = this;
    $.post("http://lucx.info/catan/get_color.php", 
    function(response)
    {
        game.color = response;
    });
}

/* Game Events */
Game.prototype.events = function()
{
    canvas_mousemove(this);
    canvas_click(this);
    button_click(this);

    function canvas_mousemove(game)
    {
        $(game.canvas).mousemove( function(e) 
        {
            /* Get mouse position */
            var rect = game.canvas.getBoundingClientRect();
            var posx = e.clientX - rect.left;
            var posy = e.clientY - rect.top;

            /* Save current state */
            state_image = new Image();
            state_image.src = game.default_state;
            game.context.drawImage(state_image, 0, 0);

            /* Check posx and posy against hexes using concentric circles */
            if (game.place_robber)
                for (var i = 0; i < game.hexes.length; i++)
                {
                    h = game.hexes[i];
                    if (h.collision(posx, posy) && h.t.resource !== 'water')
                        game.hexes[i].select(game.context);
                }

            /* Check posx and posy against roads using concentric circles */
            if (game.build_road)
                for (var i = 0; i < game.roads.length; i++)
                {
                    if (game.roads[i].collision(posx, posy))
                        game.roads[i].select(game.context);
                }

            /* Check posx and posy against towns using concentric circles */
            if (game.build_town || game.build_city)
                for (var i = 0; i < game.towns.length; i++)
                {
                    if (game.towns[i].collision(posx, posy))
                        game.towns[i].select(game.context);
                }
        });
    }

    function canvas_click(game)
    {
        $(game.canvas).click( function(e) 
        {
            /* Get mouse position */
            var rect = game.canvas.getBoundingClientRect();
            var posx = e.clientX - rect.left;
            var posy = e.clientY - rect.top;

            /* Save current state */
            state_image = new Image();
            state_image.src = game.default_state;
            game.context.drawImage(state_image, 0, 0);
            
            /* Check posx and posy against hexes using concentric circles */
            if (game.place_robber)
            {
                for (var i = 0; i < game.hexes.length; i++)
                {
                    h = game.hexes[i];
                    if (h.collision(posx, posy) && h.t.resource !== 'water' && game.robber_hex !== i)
                    {
                        game.hexes[game.robber_hex].draw_roll(game.context);
                        game.hexes[game.robber_hex].robber = false;
                        h.click(game.canvas, game.context);
                        if (game.hexes[game.robber_hex].t.resource == 'desert')
                            game.hexes[game.robber_hex].draw_desert(game.context);
                        game.default_state = game.canvas.toDataURL();
                        game.robber_hex = i;
                    }
                }
                game.place_robber = false;
            }

            /* Check posx and posy against roads using concentric circles */
            if (game.build_road)
            {
                for (var i = 0; i < game.roads.length; i++)
                {
                    if (game.roads[i].collision(posx, posy))
                    {
                        console.log(game.color);
                        game.roads[i].click(game.context, game.color);
                    }
                }
                game.default_state = game.canvas.toDataURL();
                game.build_road = false;
            }

            /* Check posx and posy against towns using concentric circles */
            if (game.build_town || game.build_city)
            {
                for (var i = 0; i < game.towns.length; i++)
                {
                    if (game.towns[i].collision(posx, posy))
                        game.towns[i].click(game.context, 
                            game.build_town, game.roads, game.color);
                }
                game.default_state = game.canvas.toDataURL();
                game.build_town = game.build_city = false;
            }
        });
    }

    function button_click(game)
    {
        $("#road_button").click( function()
        {
            game.build_road = true;
        });

        $("#town_button").click( function()
        {
            game.build_town = true;
        });

        $("#city_button").click( function()
        {
            //game.build_city = true;
            game.place_robber = true;
        });

        $("#card_button").click( function()
        {
            if ($("#board_popup").prop("hidden") == true)
            {
                $("#board_shade").prop("hidden", false);
                $("#board_popup").prop("hidden", false);
            }
            else
            {
                $("#board_shade").prop("hidden", true);
                $("#board_popup").prop("hidden", true);
            }
        });
    }
}
