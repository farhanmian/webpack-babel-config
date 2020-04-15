const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/js/script.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
	new HtmlWebpackPlugin({
		filename: 'index.html',
		template: './src/index.html'
	})

	],
	module: {
		rules: [

		{
			test: /\.scss$/,
			use: [
				'style-loader', //3) inject styles into DOM
			 	'css-loader',   //2) turn css into comman js
			 	'sass-loader'   //1) turn scss into css
			 	]
		}

		]
	}
}