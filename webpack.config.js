var path = require('path');
var webpack = require('webpack');
var ProvidePlugin = require("./node_modules/webpack/lib/ProvidePlugin");
var node_modules_dir = path.join(__dirname, 'node_modules');

var config = {
    entry: {
        main: [
            './app/scripts/main.js',
            'webpack-dev-server/client?http://localhost:8081', // WebpackDevServer host and port
            'webpack/hot/only-dev-server' // "only" prevents reload on syntax errors
        ]
    },
    output: {
        path: path.resolve(__dirname, './app'),
        filename: 'bundle.js'
    },

    resolve: {
        //extensions: ['', '.js','.css'],
        alias: {
            //jquery: node_modules_dir + "/jquery/dist/jquery.js"
        }
    },
    module: {
        noParse: [],
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel?' + JSON.stringify({ presets: ['es2015'] })]
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass?sourceMap'
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },
    // plugins: [
    //     new ProvidePlugin({
    //         $: "jquery",
    //         jQuery: "jquery",
    //         "window.jQuery": "jquery"
    //     })
    // ]
};

module.exports = config;