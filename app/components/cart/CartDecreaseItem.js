var React = require('react');
var CartActions = require('../../actions/CartActions');

var CartDecreaseItem = React.createClass({
  handler: function(){
    CartActions.decreaseItem(this.props.index)
  },
  render:function(){
    return <button onClick={this.handler}>-</button>
  }
});

module.exports = CartDecreaseItem;
