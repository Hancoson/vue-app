var path             = require('path');
var webpack          = require('webpack');
var node_modules_dir = path.join(__dirname, 'node_modules');

var ProvidePlugin    = require(node_modules_dir+"/webpack/lib/ProvidePlugin");

var config = {
  entry : {
    main: [
      './app/main.js',
      'webpack-dev-server/client?http://localhost:8081', // WebpackDevServer host and port
      'webpack/hot/only-dev-server' // "only" prevents reload on syntax errors
    ]
  },
  output: {
    path    : path.resolve(__dirname, './app'),
    filename: 'bundle.js',
		sourceMapFilename: '[file].map'
  },
	devtool: '#source-map',

  resolve: {
    extensions: ['', '.js','.vue','.json','.css'],
    alias: {
      'vue$': node_modules_dir + "/vue/dist/vue.js"
    }
  },
  module : {
    noParse: [],
    loaders: [
			{
				test: /\.vue$/,
				exclude: /node_modules/,
				loader: 'vue-loader'
			},
      {
        test   : /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel?' + JSON.stringify({presets: ['es2015']})]
      },
      {
        test  : /\.css$/,
        loader: 'style!css'
      },
      {
        test  : /\.scss$/,
        loader: 'style!css!sass?sourceMap'
      },
      {
        test  : /\.(png|jpg|gif)$/,
        loader: 'url-loader?limit=8192'
      }
    ]
	},
  plugins: [
		new ProvidePlugin({
			vue: "vue$",
			Vue: "vue$"
		})
  ]
};

module.exports = config;