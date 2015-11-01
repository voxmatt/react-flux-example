var CartConstants = require('../constants/CartConstants');
var AppDispatcher = require('../dispatchers/AppDispatcher');

var CartActions = {
  addItem: function(item){
    AppDispatcher.handleViewAction({
      actionType: CartConstants.ADD_ITEM,
      item: item
    })
  },
  removeItem: function(index){
    AppDispatcher.handleViewAction({
      actionType: CartConstants.REMOVE_ITEM,
      index: index
    })
  },
  increaseItem: function(index){
    AppDispatcher.handleViewAction({
      actionType: CartConstants.INCREASE_ITEM,
      index: index
    })
  },
  decreaseItem: function(index){
    AppDispatcher.handleViewAction({
      actionType: CartConstants.DECREASE_ITEM,
      index: index
    })
  }
}

module.exports = CartActions;
