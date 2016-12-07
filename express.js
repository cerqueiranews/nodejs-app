var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var validator = require('express-validator');

module.exports = function(){
    var app = express();
    app.set('view engine', 'ejs');

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(validator());

    load('routes')
    .then('model')
    .then('config')
    .into(app);

    return app;
}
