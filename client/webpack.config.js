const path = require('path');
const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SRC_DIR = path.join(__dirname, '/src');
const DIST_DIR = path.join(__dirname, '/');

module.exports = {
	entry: `${SRC_DIR}/index.js`,
	output: {
		filename: 'bundle.js',
		path: `${DIST_DIR}`
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-react', '@babel/preset-env'],
					plugins: ['@babel/plugin-proposal-class-properties']
				},
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							modules: true,
							localIdentName: '[name]__[local]__[hash:base64:5]'
						}
					}
				]
			}
		]
	},
	resolve: { extensions: ['.js', '.jsx'] },
	plugins: [new Dotenv(), new MiniCssExtractPlugin({ filename: 'style.css' })],
	mode: 'development'
};
