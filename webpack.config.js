const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
    cache: true,
    devtool: 'source-map',
    entry: {
        polyfills: './src/polyfills',
        vendor: './src/vendor',
        main: './src/main'
    },

    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: 'http://localhost:3000/', // This is used to generate URLs to e.g. images, files, etc
        filename: '[name].bundle.js',
        sourceMapFilename: '[file].map'
    },

    plugins: [
        new ExtractTextPlugin("styles.css"),
        new webpack.optimize.CommonsChunkPlugin({
            name: "polyfills",
            minChunks: Infinity
        }),
        // This enables tree shaking of the vendor modules
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            chunks: ['main'],
            minChunks: module => /node_modules/.test(module.resource)
        }),

        new HtmlWebpackPlugin({
            title: 'My Angular Template App',
            template: 'src/index.html',
            chunks: [
                "polyfills",
                "vendor",
                "main"
            ]
        }),
    ],

    module: {
        loaders: [

        ],
        rules: [{
                test: /\.ts$/,
                use: 'awesome-typescript-loader'
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader?sourceMap=true",
                })
            }
        ]
    },
    resolve: {
        extensions: ['.css', '.ts', '.js', '.json']
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 3000,
        historyApiFallback: true,
        watchOptions: { aggregateTimeout: 300, poll: 1000 }
    },
    node: {
        global: true,
        process: true,
        Buffer: false,
        crypto: 'empty',
        module: false,
        clearImmediate: false,
        setImmediate: false,
        clearTimeout: true,
        setTimeout: true
    }
};
module.exports = config;
