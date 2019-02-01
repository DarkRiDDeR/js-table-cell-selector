const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const SRC_DIR = __dirname + "/src";
const DIST_DIR = __dirname + "/dist";
const EXAMPLE_DIR = __dirname + "/example";

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
        SRC_DIR + "/app.js"
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
        path: DIST_DIR,
        publicPath: argv.mode !== "production" ? "/" : "../dist/",
        filename: "tcs.bundle.min.js"
    },
    devtool: argv.mode !== "production" ? "eval-cheap-module-source-map" : "source-map",
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/index.html",
            filename: (argv.mode !== "production" ? DIST_DIR : EXAMPLE_DIR) + "/index.html",
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

