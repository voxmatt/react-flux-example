var React = require('react');
var CartActions = require('../../actions/CartActions');

var CatalogAddToCart = React.createClass({
  handler: function(){
    CartActions.addItem(this.props.item)
  },
  render:function(){
    return <button className="btn btn-default" onClick={this.handler}>Add To Cart</button>
  }
});

module.exports = CatalogAddToCart;
