var Book = Backbone.Model.extend({
  initialize: function() {
    this.on('change', function() {
      console.log('Model changed');
      console.log('Changed attributes: ' + JSON.stringify(this.changed));
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
  },
  validate: function(attrs){
    if(attrs.year < 2000){
      return 'year must be after 2000';
    }
    if(!attrs.name){
      return 'a name must be provided';
    }
  }
});


var thisBook = new Book({name: 'anotherBook', author: 'Quang Vo'});
console.log(thisBook.attributes);
thisBook.set('name', 'differentBook');
thisBook.set('year', 2001);
console.log('check year change: ' + thisBook.get('year'));
console.log(thisBook.isValid());
