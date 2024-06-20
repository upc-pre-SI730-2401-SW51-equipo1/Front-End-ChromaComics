const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const createError = require('http-errors');

// Crear un error 404
let notFoundError = createError(404, 'This page does not exist');

// Crear un error 500
let serverError = createError(500, 'Internal Server Error');
app.use(cors());

app.use(express.static(path.join(__dirname, 'dist/')));
// Send all requests to index.html
// Send all requests to index.html
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

// default Heroku port
app.listen(process.env.PORT || 5000);