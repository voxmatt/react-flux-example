var CartHelpers = {};

CartHelpers.getDummyCatalog = function(){
  var dummyCatalog = [];
  for(var i=1; i<9; i++){
    dummyCatalog.push({
      'id': 'Widget' + i,
      'title':'Widget #' + i,
      'summary': 'This is an awesome widget!',
      'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, commodi.',
      'cost': i,
      'img': '/assets/product.png'
    });
  }
  return dummyCatalog;
};

CartHelpers.removeItem = function removeItem(cartItems, index){
  cartItems[index].inCart = false;
  cartItems.splice(index, 1);
};

CartHelpers.increaseItem = function increaseItem(cartItems, index){
  cartItems[index].qty++;
}

CartHelpers.decreaseItem = function decreaseItem(cartItems, index){
  if (cartItems[index].qty > 1) {
    cartItems[index].qty--;
  } else {
    CartHelpers.removeItem(cartItems, index);
  }
}

CartHelpers.addItem = function addItem(cartItems, item){
  if (!item.inCart) {
    item['qty'] = 1;
    item['inCart'] = true;
    cartItems.push(item);
  } else {
    cartItems.forEach(function(cartItem, i){
      if (cartItem.id === item.id) {
        CartHelpers.increaseItem(cartItems, i);
      }
    });
  }
}

CartHelpers.cartTotals = function cartTotals(cartItems){
  var qty =0, total = 0;
  cartItems.forEach(function(cartItem){
    qty += cartItem.qty;
    total += cartItem.qty * cartItem.cost;
  });
  return {'qty': qty, 'total': total};
}

module.exports = CartHelpers;