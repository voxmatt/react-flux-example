var React = require('react');
var CartStore = require('../../stores/CartStore.js');
var CartRemoveItem = require('./CartRemoveItem.js');
var Increase = require('./CartDecreaseItem');
var Decrease = require('./CartIncreaseItem');
var StoreWatchMixin = require('../../mixins/StoreWatchMixin');
var Link = require('react-router-component').Link;

function cartItems(){
  return {items: CartStore.getCart()}
}

var CartPage = React.createClass({
  mixins:[StoreWatchMixin(cartItems)],
  render:function(){
    var total = 0;
    var items = this.state.items.map(function(item, i){
      var subtotal = item.cost * item.qty;
      total += subtotal;
      return (
          <tr key={i}>
            <td><CartRemoveItem index={i} /></td>
            <td>{item.title}</td>
            <td>{item.qty}</td>
            <td>
              <Increase index={i} />
              <Decrease index={i} />
            </td>
            <td>${subtotal}</td>
          </tr>
      );
    })
    return (
      <div>
      <table className="table table-hover">
          <thead>
              <tr>
                <th></th>
                <th>Item</th>
                <th>Qty</th>
                <th></th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {items}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="4" className="text-right">Total</td>
                <td>${total}</td>
              </tr>
            </tfoot>
          </table>
          <Link href="/">Continue Shopping</Link>
        </div>
    )
  }
});

module.exports = CartPage;