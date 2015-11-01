var React = require('react');
var CartStore = require('../../stores/CartStore.js');
var AddToCart = require('./CatalogAddToCart.js');
var StoreWatchMixin = require('../../mixins/StoreWatchMixin');
var CatalogItem = require('../catalog/Catalogitem');

function getCatalog(){
  return {items: CartStore.getCatalog()}
}

var CatalogPage = React.createClass({
  mixins:[StoreWatchMixin(getCatalog)],
  render:function(){
    var items = this.state.items.map(function(item){
      return <CatalogItem key={item.id} item={item} />
    })
    return (
      <div className="row">
        {items}
      </div>
    )
  }
});

module.exports = CatalogPage;
