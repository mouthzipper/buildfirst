var fs = require('fs');
var base = require('./base.js');
var template = fs.readFileSync(__dirname + '/templates/listView.mu', { encoding: 'utf8' });

module.exports = base.extend({
  el: '.list',
  viewModel: {
    shopping_list: [
      { name: 'Banana', amount: 3 },
      { name: 'Strawberry', amount: 8 },
      { name: 'Almond', amount: 34 },
      { name: 'Chocolate Bar', amount: 1 }
    ]
  },
  initialize: function () {
    this.template = template;
    this.render();
  }
});
