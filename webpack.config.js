
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: {
		index: './src/index.js'
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'build')
	},
	devServer: {
		port: 8080,
		hot: true,
		open: true,
		contentBase: './src',
		historyApiFallback: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: [{
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
						plugins: [],
					}
				}]
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/index.html',
		}),
		new CopyPlugin({
			patterns: [{ from: './src/index.css', to: './index.css' }]
		})
	]
}