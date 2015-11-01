var React = require('react');
var CartActions = require('../../actions/CartActions');

var CartIncreaseItem = React.createClass({
  handler: function(){
    CartActions.increaseItem(this.props.index)
  },
  render:function(){
    return <button onClick={this.handler}>+</button>
  }
});

module.exports = CartIncreaseItem;
