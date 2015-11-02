var React = require('react');
var CatalogPage = require('./catalog/CatalogPage');
var CartPage = require('./cart/CartPage');
var Router = require('react-router-component');
var ProductPage = require('./product/ProductPage');
var TemplateMain = require('./templates/TemplateMain.js');
var Locations = Router.Locations;
var Location  = Router.Location;

var App = React.createClass({
  render:function(){
    return (
      <TemplateMain>
        <Locations path={this.props.path}>
          <Location path="/" handler={CatalogPage} />
          <Location path="/cart" handler={CartPage} />
          <Location path="/item/:item" handler={ProductPage} />
        </Locations>
      </TemplateMain>
    );
  }
});

module.exports = App;
