const { resolve } = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/js/main.js",
    output: {
        path: resolve(__dirname, "build/"),
        filename: "main.bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.css$/,
                use: {
                    loader: "file-loader"
                }
            },
        ]
    }, 
    stats: { 
        colors: true 
    }, 
    devtool: 'source-map',
    plugins: [
        new HTMLWebpackPlugin({
            template: "./src/index.html"
        }),
        new CopyWebpackPlugin([
            {
                from: './src/css',
                to: './css'
            }
        ])
    ]
}; 