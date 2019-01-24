const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const devMode = process.env.NODE_ENV !== 'build';
const SRC_DIR = __dirname + '/src';
const DIST_DIR = __dirname + '/dist';

module.exports = {
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            })
        ]
    },
    entry:  [
        SRC_DIR + "/app.js"
    ],
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                 test: /\.(html)$/,
                 exclude: /node_modules/,
                 use: {
                     loader: 'html-loader',
                     options: {minimize: false}
                 }
             },
        ]
    },
    output: {
        path: DIST_DIR,
        publicPath: '/',
        filename: "tcs.bundle.min.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/index.html',
            inject: 'head',
        }),
        new CopyWebpackPlugin([{
            from: __dirname + '/index.html'
        }])
    ],
    devServer: {
        contentBase: SRC_DIR,
        watchContentBase: true,
        port: 9000,
        open: true
    }
};

