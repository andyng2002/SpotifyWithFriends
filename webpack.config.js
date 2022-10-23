const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: './src/app/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true
    },
    module: {
        rules:[{
            test: /\.jsx?/,
            loader: 'babel-loader',
        },
        { test: /\.css$/, use: 'css-loader' },
        { test: /\.ts$/, use: 'ts-loader' },
        { test: /\.png$/, use: 'file-loader' },
        ]
        
    },
    plugins: [new HtmlWebpackPlugin({
        template: './index.html'
    })],
};