var http = require('http');
var url = require('url');
var fs = require('fs');
var express = require('express');
var mongoose = require('mongoose');
var colors = require('./colors');
var mongoose_codes = require('./mongoose_codes');
var server;

COLOR = colors.SCHEME2;

function prep_css(base, file)
{
    src = __dirname+"/"+base+"/"+file;
    dst = __dirname+"/"+base+"/"+"pp_"+file;
    fs.readFile(src, 'utf8', function (err,data) 
    {
        if (err) 
        {
            return console.log(err);
        }

        for (var color in COLOR) 
        {
            if (COLOR.hasOwnProperty(color)) 
            {
                var regex = new RegExp(color, 'g');
                data = data.replace(regex, COLOR[color]);
            }
        }

        fs.writeFile(dst, data, 'utf8', function (err) 
        {
            if (err) return console.log(err);
        });
    });
}

function load_page(path, res)
{
    fs.readFile(__dirname + path, function(err, data){
        if (err){ 
            return send404(res);
        }
        res.writeHead(200, {'Content-Type': path == 'json.js' ? 'text/javascript' : 'text/html'});
        res.write(data, 'utf8');
        res.end();
    });
}


/* Start connection to mongodb */
mongoose.connect('mongodb://localhost/lucx_info');

/* Define schemas */
var UserSchema = mongoose.Schema(
{
    firstname: String,
    lastname: String,
    email: String,
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});

function login_error(socket, code)
{
    switch (code)
    {
        case mongoose_codes.USER.AUTHENTICATE.CODE.FAILURE:
            socket.emit('login_result', {'message': 'Login failure.'});
            break;
        case mongoose_codes.USER.AUTHENTICATE.CODE.NOT_FOUND:
            socket.emit('login_result', {'message': 'This username is not yet registered.'});
            break;
        case mongoose_codes.USER.AUTHENTICATE.CODE.FOUND:
            socket.emit('login_result', {'message': 'Successful login!'});
            break;
        default:
            socket.emit('login_result', {'message': 'IMPOSSIBLE ERROR'});
    }
}

UserSchema.methods.login = function(socket)
{
    User.find({ username: this.username, password: this.password }, function(err, user) 
    {
        if (err) 
            login_error(socket, mongoose_codes.USER.AUTHENTICATE.CODE.FAILURE);
        else
        {
            /* MUST use if/else instead of switch case because of empty js object */
            if (user == mongoose_codes.USER.AUTHENTICATE.RETURN.NOT_FOUND)
            {
                process.stdout.write("User not found in db.\n");
                login_error(socket, mongoose_codes.USER.AUTHENTICATE.CODE.NOT_FOUND);
            }
            else
            {
                process.stdout.write("User authenticated!\n");
                login_error(socket, mongoose_codes.USER.AUTHENTICATE.CODE.FOUND);
            }
        }
    });  
};

UserSchema.methods.register = function(socket)
{
    this.save(function(err)
    {
        if (err) 
        {
            if (err.code == mongoose_codes.USER.REGISTER.ERROR.DUP_KEY)
                process.stdout.write("User.save(): DUPLICATE KEY ERROR\n");
            else if (err.name == mongoose_codes.USER.REGISTER.ERROR.VALIDATION)
                process.stdout.write("User.register(): VALIDATION ERROR\n");
            else
            {
                process.stdout.write("User.register(): UNKNOWN ERROR: "+err+"\n");
            }
        }
        else
            process.stdout.write("User saved successfully!\n");
    });
};

var User = mongoose.model('User', UserSchema);

/* Process style sheets */
prep_css("home", "home.css");

server = http.createServer(function(req, res)
{
    /* your normal server code */
    var path = url.parse(req.url).pathname;
    switch (path){
        case '/':
            load_page("/home/index.html", res)
            break;
        default: load_page(path, res)
}
}),

send404 = function(res)
{
    load_page("/error/404.html", res);
};

server.listen(80);

// use socket.io
var io = require('socket.io').listen(server);

//turn off debug
io.set('log level', 1);

// define interactions with client
io.sockets.on('connection', function(socket)
{
    /* receive client data */
    socket.on('client_data', function(data){
        process.stdout.write(data.letter);
    });

    /* Login message */
    socket.on('login_data', function(data)
    {
        process.stdout.write(data.username+" : "+data.password+"\n");

        var user = new User(
        {
            username: data.username,
            password: data.password
        });

        user.login(socket);
    });

    /* Register message */
    socket.on('register_data', function(data)
    {
        process.stdout.write(data.username+" : "+data.password+"\n");

        var user = new User(
        {
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            username: data.username,
            password: data.password
        });

        user.register(socket);
    });

});
