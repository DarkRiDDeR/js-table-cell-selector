const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const path = require("path");
const webpack = require('webpack');

const SRC_DIR = path.join(__dirname, "/src");
const DIST_DIR = path.join(__dirname, "/dist");
const EXAMPLE_DIR = path.join(__dirname, "/example");

module.exports = (env, argv) => ({
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
        path.join(SRC_DIR, "/app.js")
    ],
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: [
                    "babel-loader",
                    "eslint-loader",
                ],
            },
            {
                test: /\.(html)$/,
                exclude: /node_modules/,
                use: {
                    loader: "html-loader",
                    options: {minimize: false}
                }
            },
        ]
    },
    output: {
        filename: "tcs.bundle.min.js",
        libraryTarget: "umd",
        path: DIST_DIR,
        publicPath: argv.mode !== "production" ? "/" : "../dist/",
        umdNamedDefine: true
    },
    devtool: argv.mode !== "production" ? "eval-cheap-module-source-map" : "source-map",
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "/index.html"),
            filename: path.join((argv.mode !== "production" ? DIST_DIR : EXAMPLE_DIR), "/index.html"),
            inject: "head",
        })
    ],
    devServer: {
        contentBase: SRC_DIR,
        watchContentBase: true,
        port: 9000,
        open: true
    }
});

