const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/js/script.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/bundle.js'
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
			},
			{
				test: /\.html$/,
				use: 'html-loader'
			},
			{
				test: /\.png$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[hash].[ext]',
						outputPath: 'img'
					}
				}
			}

		]
	}
}