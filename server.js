var http = require('http');
var url = require('url');
var fs = require('fs');
var express = require('express');
var session = require('client-sessions');
var mongoose = require('mongoose');
var colors = require('./colors');
var mongoose_codes = require('./mongoose_codes');
var server;

COLOR = colors.SCHEME1;

var app = express();

app.use(session({
  cookieName: 'session',
  secret: 'random_string_goes_here',
  duration: 30 * 60 * 1000,
  activeDuration: 5 * 60 * 1000,
}));

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
        case mongoose_codes.USER.LOGIN.CODE.FAILURE:
            socket.emit('login_result', {'message': 'Login failure.'});
            break;
        case mongoose_codes.USER.LOGIN.CODE.NOT_FOUND:
            socket.emit('login_result', {'message': 'Invalid username password combination.'});
            break;
        case mongoose_codes.USER.LOGIN.CODE.FOUND:
            socket.emit('login_result', {'message': 'Successful login!'});
            /* Start session */
            break;
        default:
            socket.emit('login_result', {'message': 'User.login(): IMPOSSIBLE ERROR'});
    }
}

function register_error(socket, code)
{
    switch (code)
    {
        case mongoose_codes.USER.REGISTER.CODE.FAILURE:
            socket.emit('register_result', {'message': 'Register failure.'});
            break;
        case mongoose_codes.USER.REGISTER.CODE.DUP_KEY:
            socket.emit('register_result', {'message': 'This username has already been taken!'});
            break;
        case mongoose_codes.USER.REGISTER.CODE.VALIDATION:
            socket.emit('register_result', {'message': 'Username and password fields must not be empty!'});
            break;
        case mongoose_codes.USER.REGISTER.CODE.SUCCESS:
            socket.emit('register_result', {'message': 'Successful registration!'});
            break;
        default:
            socket.emit('register_result', {'message': 'User.register(): IMPOSSIBLE ERROR'});
    }
}

UserSchema.methods.login = function(socket)
{
    User.find({ username: this.username, password: this.password }, function(err, user) 
    {
        if (err) 
            login_error(socket, mongoose_codes.USER.LOGIN.CODE.FAILURE);
        else
        {
            /* MUST use if/else instead of switch case because of empty js object */
            if (user == mongoose_codes.USER.LOGIN.RETURN.NOT_FOUND)
            {
                process.stdout.write("User not found in db.\n");
                login_error(socket, mongoose_codes.USER.LOGIN.CODE.NOT_FOUND);
            }
            else
            {
                process.stdout.write("User authenticated!\n");
                login_error(socket, mongoose_codes.USER.LOGIN.CODE.FOUND);
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
            {
                process.stdout.write("User.save(): DUPLICATE KEY ERROR\n");
                register_error(socket, mongoose_codes.USER.REGISTER.CODE.DUP_KEY); 
            }
            else if (err.name == mongoose_codes.USER.REGISTER.ERROR.VALIDATION)
            {
                process.stdout.write("User.register(): VALIDATION ERROR\n");
                register_error(socket, mongoose_codes.USER.REGISTER.CODE.VALIDATION); 
            }
            else
            {
                process.stdout.write("User.register(): UNKNOWN ERROR: "+err+"\n");
                register_error(socket, mongoose_codes.USER.REGISTER.CODE.FAILURE); 
            }
        }
        else
        {
            process.stdout.write("User saved successfully!\n");
                register_error(socket, mongoose_codes.USER.REGISTER.CODE.SUCCESS); 
        }
    });
};

var User = mongoose.model('User', UserSchema);

/* Process style sheets */
prep_css("home", "home.css");

app.get('/utils/jquery-1.11.3.min.js', function (req, res) 
{
    res.sendFile( __dirname + "/utils/" + "jquery-1.11.3.min.js" );
})

app.get('/home/pp_home.css', function (req, res) 
{
    res.sendFile( __dirname + "/home/" + "pp_home.css" );
})

app.get('/', function (req, res) 
{
    res.sendFile( __dirname + "/home/" + "index.html" );
})

app.get('/index.html', function (req, res) 
{
    res.sendFile( __dirname + "/home/" + "index.html" );
})

app.get('/home/index.html', function (req, res) 
{
    res.sendFile( __dirname + "/home/" + "index.html" );
})

app.get('/home/games.html', function (req, res) 
{
    res.sendFile( __dirname + "/home/" + "games.html" );
})

app.get('/home/register.html', function (req, res) 
{
    res.sendFile( __dirname + "/home/" + "register.html" );
})

app.get('/home/login.html', function (req, res) 
{
    res.sendFile( __dirname + "/home/" + "login.html" );
})

var server = app.listen(80, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})


// use socket.io
var io = require('socket.io').listen(server);

// define interactions with client
io.sockets.on('connection', function(socket)
{
    /* Login message */
    socket.on('login_data', function(data)
    {
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
