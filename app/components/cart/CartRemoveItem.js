var React = require('react');
var CartActions = require('../../actions/CartActions');

var CartRemoveItem = React.createClass({
  handler: function(){
    CartActions.removeItem(this.props.index)
  },
  render:function(){
    return <button onClick={this.handler}>x</button>
  }
});

module.exports = CartRemoveItem;
