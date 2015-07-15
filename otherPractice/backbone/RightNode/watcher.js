const fs = require('fs');
fs.watch('target.txt', function() {
  console.log("File 'target.txt just changed 1!'");
});
console.log("Now watching target.txt for changes...");
