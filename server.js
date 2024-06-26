const express = require('express');
const serveStatic = require("serve-static")
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
app.use(serveStatic(path.join(__dirname, 'dist')));
const port = process.env.PORT || 5173;
// default Heroku port
app.listen(port);