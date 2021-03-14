//Necessary Imports
const express = require('express');
const app = express();
const mongoose = require('mongoose');

//DB Comfig
const db = require('./config/keys').MongoURI;

//Connect to Mongo DB
mongoose.connect(db, {useNewUrlParser: true})
	.then( () => console.log('Mongo DB connected...'))
	.catch(err => console.log(err));

//Using express ejs layouts
const expressLayouts = require('express-ejs-layouts');

//EJS Middleware
app.use(expressLayouts);
app.set('view engine', 'ejs');


//Import Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/user'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server running on port ${PORT} `))

