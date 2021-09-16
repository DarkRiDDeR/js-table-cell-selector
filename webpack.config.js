const HtmlWebpackPlugin = require("html-webpack-plugin");
// const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");
// const webpack = require('webpack');

const SRC_DIR = path.join(__dirname, "/src");
const DIST_DIR = path.join(__dirname, "/dist");

module.exports = (env, argv) => ({
    optimization: {
        minimizer: [
            new TerserPlugin({
                cache: true,
                include: /\.min\.js$/,
                parallel: true,
                sourceMap: true
            })
        ]
    },
    entry: {
        "tcs.bundle": path.join(SRC_DIR, "app.js"),
        "tcs.bundle.min": path.join(SRC_DIR, "app.js")
    },
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
        filename: "[name].js",
        libraryTarget: "umd",
        path: DIST_DIR,
        publicPath: argv.mode !== "production" ? "/" : "../dist/",
        umdNamedDefine: true
    },
    devtool: argv.mode !== "production" ? "eval-cheap-module-source-map" : "source-map",
    plugins: [
        argv.mode !== "production" ? new HtmlWebpackPlugin({
            chunks: [ "tcs.bundle" ],
            template: path.join(__dirname, "index.html"),
            filename: path.join(DIST_DIR, "index.html"),
            inject: "head",
        }) : false
    ].filter(Boolean),
    devServer: {
        contentBase: SRC_DIR,
        watchContentBase: true,
        port: 9000,
        open: true
    }
});

