var React = require('react');
var HeaderMain = require('../header/HeaderMain.js');

var TemplateMain = React.createClass({
  render:function(){
    return (
      <div className="container">
        <HeaderMain />
        {this.props.children}
      </div>
    );
  }
});

module.exports = TemplateMain;
