const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
	}),
	new MiniCssExtractPlugin({
		filename: 'css/main.css'
	})

	],
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader, //3) Extract CSS into files
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
						name: '[name].[ext]',
						outputPath: 'img'
					}
				}
			}

		]
	}
}