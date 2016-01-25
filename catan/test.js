function Test()
{

    $("#test_a").click( function()
    {
        /* Clear the session */
        /*
        $.ajax(
        {
            type: 'POST',
            url: "http://lucx.info/catan/clear_session.php", 
            async: false
        }).done
        (
            function(response)
            {
                console.log(response);
            }
        );
        */

        /* Truncate the lobby table */
        $.post("http://lucx.info/catan/clear_lobby.php");

        /* Drop Game1 */
        $.post("http://lucx.info/catan/clear_game.php",
        {game: "Game1"});

        /* Drop Game1_messages */
        $.post("http://lucx.info/catan/clear_game.php",
        {game: "Game1_messages"});

        /* Set the user */
        $.ajax(
        {
            type: 'POST',
            url: "http://lucx.info/catan/set_user.php", 
            data: {username: "a"},
            async: false
        }).done
        (
            function(response)
            {
                console.log(response);
            }
        );

        /* Set the game */
        $.ajax(
        {
            type: 'POST',
            url: "http://lucx.info/catan/set_game.php", 
            data: {game: "Game1"},
            async: false
        }).done
        (
            function(response)
            {
                console.log(response);
            }
        );

        /* Create the game */
        $.ajax(
        {
            type: 'POST',
            url: "http://lucx.info/catan/create_game.php", 
            data: {game: "Game1", players: 4},
            async: false
        }).done
        (
            function(response)
            {
                console.log(response);
            }
        );

        /* Join the game */
        $.ajax(
        {
            type: 'POST',
            url: "http://lucx.info/catan/join_game.php", 
            data: {game: "Game1"},
            async: false
        }).done
        (
            function(response)
            {
                console.log(response);
            }
        );

        /* Set the color */
        $.ajax(
        {
            type: 'POST',
            url: "http://lucx.info/catan/select_color.php", 
            data: {color: "red"},
            async: false
        }).done
        (
            function(response)
            {
                console.log(response);
            }
        );
        
        location.reload();
    });
    
    $("#test_b").click( function()
    {
        player_setup("b", "blue");
    });

    $("#test_c").click( function()
    {
        player_setup("c", "orange");
    });

    $("#test_d").click( function()
    {
        player_setup("d", "white");
    });

    function player_setup(name, color)
    {
        /* Clear the session */
        /*
        $.ajax(
        {
            type: 'POST',
            url: "http://lucx.info/catan/clear_session.php", 
            async: false
        }).done
        (
            function(response)
            {
                console.log(response);
            }
        );
        */

        /* Set the user */
        $.ajax(
        {
            type: 'POST',
            url: "http://lucx.info/catan/set_user.php", 
            data: {username: name},
            async: false
        }).done
        (
            function(response)
            {
                console.log(response);
            }
        );

        /* Set the game */
        $.ajax(
        {
            type: 'POST',
            url: "http://lucx.info/catan/set_game.php", 
            data: {game: "Game1"},
            async: false
        }).done
        (
            function(response)
            {
                console.log(response);
            }
        );

        /* Join the game */
        $.ajax(
        {
            type: 'POST',
            url: "http://lucx.info/catan/join_game.php", 
            data: {game: "Game1"},
            async: false
        }).done
        (
            function(response)
            {
                console.log(response);
            }
        );

        /* Set the color */
        $.ajax(
        {
            type: 'POST',
            url: "http://lucx.info/catan/select_color.php", 
            data: {color: color},
            async: false
        }).done
        (
            function(response)
            {
                console.log(response);
            }
        );

        location.reload();
    }
}
