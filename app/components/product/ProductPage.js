var React = require('react');
var CartStore = require('../../stores/CartStore');
var CatalogAddToCart = require('../catalog/CatalogAddToCart');
var StoreWatchMixin = require('../../mixins/StoreWatchMixin');
var Link = require('react-router-component').Link;

function getCatalogItem(component){
  var thisItem;
  CartStore.getCatalog().forEach(function(item){
    if(item.id.toString() === component.props.item){
      thisItem = item
    }
  });
  return {item: thisItem}
}

var ProductPage = React.createClass({
  mixins:[StoreWatchMixin(getCatalogItem)],
  render:function(){
    return (
        <div>
          <h2>{this.state.item.title}</h2>
          <img src={this.state.item.img} alt="" />
          <p>{this.state.item.description}</p>
          <p>${this.state.item.cost} <span className="text-success">{this.state.item.inCart && '(' + this.state.item.qty + ' in cart)'}</span></p>
          <div className="btn-group btn-group-sm">
          <CatalogAddToCart item={this.state.item} />
          <Link href='/' className="btn btn-default">Continue Shopping</Link>
          </div>
        </div>
    );
  }
});

module.exports = ProductPage;
