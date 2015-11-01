var AppDispatcher = require('../dispatchers/AppDispatcher');
var CartConstants = require('../constants/CartConstants');
var assign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;
var CartHelpers = require('./CartHelpers');

var CHANGE_EVENT = 'change';

var _catalog = CartHelpers.getDummyCatalog();
var _cartItems = [];


var AppStore = assign(EventEmitter.prototype, {
  emitChange: function(){
    this.emit(CHANGE_EVENT)
  },

  addChangeListener: function(callback){
    this.on(CHANGE_EVENT, callback)
  },

  removeChangeListener: function(callback){
    this.removeListener(CHANGE_EVENT, callback)
  },

  getCart: function(){
    return _cartItems
  },

  getCatalog: function(){
    return _catalog
  },

  getCartTotals: function(){
    return CartHelpers.cartTotals(_cartItems)
  },

  dispatcherIndex: AppDispatcher.register(function(payload){
    var action = payload.action; // this is our action from handleViewAction
    switch(action.actionType){
      case CartConstants.ADD_ITEM:
        CartHelpers.addItem(_cartItems, payload.action.item);
        break;

      case CartConstants.REMOVE_ITEM:
        CartHelpers.removeItem(_cartItems, payload.action.index);
        break;

      case CartConstants.INCREASE_ITEM:
        CartHelpers.increaseItem(_cartItems, payload.action.index);
        break;

      case CartConstants.DECREASE_ITEM:
        CartHelpers.decreaseItem(_cartItems, payload.action.index);
        break;
    }

    AppStore.emitChange();

    return true;
  })

})

module.exports = AppStore;
