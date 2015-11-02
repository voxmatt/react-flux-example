var App = require('../components/app');
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var url = require('url')


module.exports = function(app) {

	app.get('/', function(req, res, next){
		try {
			var path = url.parse(req.url).pathname;
    	var reactHtml = ReactDOMServer.renderToString(<App path={path} />);
    	res.render('index.ejs', {reactOutput: reactHtml});
		} catch(err) {
			return next(err);
		}
		// React.renderToString takes your component
    // and generates the markup
    // Output html rendered by react
		// console.log(myAppHtml);
    // res.render('index.ejs', {reactOutput: reactHtml});
	});

};
