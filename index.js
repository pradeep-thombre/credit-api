const express = require('express');
const app = express();
const port = process.env.PORT||8000;

const cookieParser = require('cookie-parser');
app.use(express.urlencoded());

const bodyParser = require('body-parser');
require('dotenv').config();

// body parser configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require('./config/mongoose');
const MongoDbStore = require('connect-mongo');

const passport = require('passport');
const passportJWT=require('./config/passport-jwt-strategy');

// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('./assets'));
app.use(cookieParser());

// use express router
app.use('/', require('./routes'));

app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
});


