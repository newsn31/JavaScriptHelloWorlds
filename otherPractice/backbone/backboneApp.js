var Book = Backbone.Model.extend({
  initialize: function(){
    console.log('Creating a new book');
  },
  defaults: {
    name: 'Book Title',
    author: 'No One'
  },

  printDetails: function(){
    console.log(this.get('name') + ' was written by ' + this.get('author'));
  }
});

var myBook = new Book();
console.log(myBook.get('name'));


var thisBook = new Book({name: 'Beginning Backbone',
  author: 'Quang Vo'
});


console.log(thisBook.get('name') + ' by ' + thisBook.get('author'));
console.log(thisBook.attributes);



thisBook.set('name', 'new book title');
thisBook.set('year', 2013);
console.log(thisBook.attributes);

thisBook.unset('year');
console.log(thisBook.attributes);

var hasYear = thisBook.has('year');
console.log(hasYear);

var clonedBook = thisBook.clone();
console.log(clonedBook.attributes);

thisBook.printDetails();

thisBook.clear();
console.log(thisBook.attributes);
