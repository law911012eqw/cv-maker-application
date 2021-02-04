const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        app: './src/index.js'
    },
    devtool: 'inline-source-map',
    output: {
        filename: '[name].main.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.s[ac]ss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader', 'sass'],
			},
			{
				test: /\.(html)$/i,
				use: ['html-loader'],
            },
        ]
    }
}