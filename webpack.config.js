const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
	entry: './src/js/script.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/bundle.js'
	},
	devServer: {
		contentBase: './dist'
	},
	plugins: [
	new HtmlWebpackPlugin({
		filename: 'index.html',
		template: './src/index.html'
	}),
	new MiniCssExtractPlugin({
		filename: 'css/main.css'
	}),
	new webpack.ProvidePlugin({
		$: 'jquery',
		jQuery: 'jquery'
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
				test: /\.(png|jpg|svg|gif)$/,
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