const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

// Settings
app.set('port', process.env.PORT || 5000);
app.set('views', path.join(__dirname,'views'));

// Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}));
app.use(cors())
// Global variables


// Rotes
app.use(require('./routes/index.routes'));

// Static files

module.exports = app;