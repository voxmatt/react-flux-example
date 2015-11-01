var WebPackConfig = {
	entry: './app/main.js',
	output: {
		filename: 'public/bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
			}
		]
	}
};

module.exports = WebPackConfig;