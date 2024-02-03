// IMPORT PACKAGES
const express = require('express');
const logger = require('morgan');

// import projects file
const projects = require('./data/projects.json');
// import articles file
const articles = require('./data/articles.json');

// CREATE EXPRESS APP
const app = express();

// MIDDLEWARE
// - `express.static()` to serve static files from the `public` folder
app.use(express.static('public'));

// - `express.json()` to parse incoming requests with JSON payloads
app.use(express.json());

// - `morgan` logger to log all incoming requests
app.use(logger('dev'));

// ROUTES
// home page route
app.get('/', (request, response) => {
  response.sendFile(__dirname + '/views/home.html');
});

// blog route
app.get('/blog', (request, response) => {
  response.sendFile(__dirname + '/views/blog.html');
});

// projects route
app.get('/api/projects', (request, response) => {
  response.json(projects);
});

// articles route
app.get('/api/articles', (request, response) => {
  response.json(articles);
});

// error route
app.get('*', (request, response) => {
  response.sendFile(__dirname + '/views/not-found.html');
});

// START THE SERVER
app.listen('5005', () => console.log('Port running'));
