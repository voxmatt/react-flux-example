let CartHelpers = {
  
  getDummyCatalog() {
    let dummyCatalog = [];
    for (let i=1; i<9; i++){
      dummyCatalog.push({
        id: `Widget ${i}`,
        title: `Widget #${i}`,
        summary: 'This is an awesome widget!',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, commodi.',
        cost: i,
        img: '/assets/product.png'
      });
    }
    return dummyCatalog;
  },

  removeItem(cartItems, index) {
    cartItems[index].inCart = false;
    cartItems.splice(index, 1);
  },

  increaseItem(cartItems, index) {
    cartItems[index].qty++;
  },

  decreaseItem(cartItems, index) {
    if (cartItems[index].qty > 1) {
      cartItems[index].qty--;
    } else {
      CartHelpers.removeItem(cartItems, index);
    }
  },

  addItem(cartItems, item) {
    if (!item.inCart) {
      item.qty = 1;
      item.inCart = true;
      cartItems.push(item);
    } else {
      let itemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);
      CartHelpers.increaseItem(cartItems, itemIndex);
    }
  },

  cartTotals(cartItems) {
    var qty =0, total = 0;
    cartItems.forEach((cartItem) => {
      qty += cartItem.qty;
      total += cartItem.qty * cartItem.cost;
    });
    return {'qty': qty, 'total': total};
  }
}

export default CartHelpers;