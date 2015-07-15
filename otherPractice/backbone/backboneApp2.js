var Book = Backbone.Model.extend({
  initialize: function() {
    this.on('change', function() {
      console.log('Model changed');
    });
    this.on('change:name', function(){
      console.log('The name attribute has changed');
    });
  },
  defaults: {
    name: 'Book title',
    author: 'No one'
  },
  printDetails: function() {
    console.log(this.get('name') + ' was written by ' + this.get('author'));
  }
});


var thisBook = new Book({name: 'anotherBook', author: 'Quang Vo'});
console.log(thisBook.attributes);
thisBook.set('name', 'differentBook');
