
//require functions used to load Node.js components
var express = require('express');
var path = require('path');
var Bourne = require('bourne');

var app = express();
var posts = new Bourne('simpleBlogPosts.json');
var comments = new Bourne('simpleBlogComments.json');

app.configure(function(){
  //parses JSON request bodies that are sent to server.
  app.use(express.json());
  //path.join() creates a variable to store the path to the directory
  app.use(express.static(path.join(__dirname, 'public')));
});


//res.render method used to render a server-side template.
app.get('/*', function(req, res){
  res.render('index.ejs');
});

app.listen(3001);
