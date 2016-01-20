//requires modules

var express = require('express');
var app = express();

var bodyParser = require('body-parser');

//sets variables to be used in routes

var api = require('./routes/api');
var index = require('./routes/index');

//sets port to external db source (i.e. Heroku) or our localhost:3000

app.set('port', (process.env.PORT || 3000));

//requires use of body-parser on returned data

app.use(bodyParser.json());                                                 //What, exactly, are these doing?
app.use(bodyParser.urlencoded({ extended: false }));

//creates routes to api and index

app.use('/api', api);
app.use('/', index);

//sets up server on port

app.listen(app.get('port'), function() {
    //var port = (process.env.PORT || 3000)
    console.log('Node app is running on port', app.get('port'));
});
