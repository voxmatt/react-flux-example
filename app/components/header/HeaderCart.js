var React = require('react');
var Link = require('react-router-component').Link;
var CartStore = require('../../stores/CartStore.js');
var StoreWatchMixin = require('../../mixins/StoreWatchMixin');

function cartTotals(){
  return CartStore.getCartTotals();
}

var HeaderCart = React.createClass({
  mixins: [StoreWatchMixin(cartTotals)],
  render:function(){
    return (
      <div>
        <Link href="/cart" className="btn btn-success">
          Cart Items: {this.state.qty} / ${this.state.total}
        </Link>
      </div>
    );
  }
});

module.exports = HeaderCart;
