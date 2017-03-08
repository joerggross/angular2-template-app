const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
        publicPath: 'http://localhost/', // This is used to generate URLs to e.g. images, files, etc
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].map'
    },
    module: {
        loaders: [
          {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader'
            },
            { test: /\.json$/, loader: 'json-loader' },
            { test: /\.html/, loader: 'raw-loader' },
            { test: /\.css$/,  loader: 'style-loader!css-loader' }
        ]
    },

    plugins: [
        // This enables tree shaking of the vendor modules
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            chunks: ['main'],
            minChunks: module => /node_modules/.test(module.resource)
        }),
        new HtmlWebpackPlugin()
    ],

    resolve: {
        extensions: ['.css', '.ts', '.js', '.json']
    },

    devServer: {
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
