var fs = require('fs');
var base = require('./base.js');
var template = fs.readFileSync(__dirname + '/templates/insertForm.mu', { encoding: 'utf8' });
var ShoppingItem = require('../models/shoppingItem.js');

module.exports = base.extend({
  el: '.create',
  initialize: function (collection) {
    this.template = template;
    this.collection = collection;
    this.updateView({});
  },
  events: {
    'click .add': 'addItem'
  },
  updateView: function (model) {
    this.viewModel = model;
    this.render();
  },
  addItem: function () {
    var name = this.$('.name').val();
    var amount = parseInt(this.$('.amount').val(), 10);
    var model = this.collection.findWhere({ name: name });
    if (model) {
      model.addToOrder(amount);
    } else {
      model = new ShoppingItem({ name: name, amount: amount }, { validate: true });

      if (!model.validationError) {
        this.collection.add(model);
      }
    }
    this.updateView({
      name: name,
      amount: amount,
      error: model.validationError
    });
  }
});
