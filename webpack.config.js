var path = require("path");

var WebPackConfig = {
	entry: './app/main.js',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js'
	},
	devServer: {
    contentBase: "./public",
  },
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
        	presets: ['react', 'es2015']
        }  
			}
		]
	},
	devtool: 'source-map'
};

module.exports = WebPackConfig;