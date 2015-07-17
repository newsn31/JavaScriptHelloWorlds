//A simple API hosted under http://localhost:8080/books
var express = require('express');
var app = express();
varbookId = 100;

functionfindBook(id){
  for(vari=0; i<books.length; i++){
    if(books[i].id === id){
      return books[i];
    }
  }
  return null;
}

functionremoveBook(id){
  varbookIndex = 0;
  for(vari=0; i<books.length; i++){
    if(books[i].id === id){
      bookIndex = i;
    }
  }
  books.splice(bookIndex, 1);
}

app.configure(function(){
  //Parse the JSON object given in the body request
  app.use(express.bodyParser());
});
