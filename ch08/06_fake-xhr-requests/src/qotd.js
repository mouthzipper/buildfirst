var quote = require('./qotdService.js');

quote(function done (err, quote) {
  console.log(quote);
  document.querySelector('body').innerHTML = quote;
});
