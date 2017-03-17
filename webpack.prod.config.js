var path = require('path');
var webpack = require('webpack');
var WebpackStripLoader = require('strip-loader');
var node_modules_dir = path.join(__dirname, 'node_modules');
var CommonsChunkPlugin = require("./node_modules/webpack/lib/optimize/CommonsChunkPlugin"); //将多个打包后的资源中的公共部分打包成单独的文件
var ProvidePlugin = require("./node_modules/webpack/lib/ProvidePlugin"); //
var ExtractTextPlugin = require("extract-text-webpack-plugin");//独立出css样式
var HtmlWebpackPlugin = require('html-webpack-plugin');//自动生成 HTML 文件

var env = {
	'_js': 'js/',
	'_css': 'css/',
	'_img': 'images/'
}

var config = {
	entry: {
		app: path.resolve(__dirname, './app/app.js'),
		//vendors: ['jquery', 'react']
	},

	output: {
		path: path.resolve(__dirname, './dist'),
		filename: env._js + 'bundle.js'
	},
	resolve: {
		extensions: ['', '.js', '.vue', '.json', '.css'],
		alias: {
			'vue': node_modules_dir + "/vue/dist/vue.js"
		}
	},
	module: {
		loaders: [
			{
				test: /\.vue$/,
				exclude: /node_modules/,
				loader: 'vue-loader'
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: ['babel?' + JSON.stringify({ presets: ['es2015'] })]
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract(['css', 'sass'])
			}, {
				test: /\.(png|jpg|gif)$/,
				loader: 'url-loader?limit=8192'
			},
			{
				test: [/\.js$/, /\.es6$/],
				exclude: /node_modules/,
				loader: WebpackStripLoader.loader('console.log')
			}
		]
	},
	plugins: [
		//这个使用uglifyJs压缩你的js代码
		new webpack.optimize.UglifyJsPlugin({
			minimize: true,
			compress: {
				warnings: false,
			},
		}),
		//把入口文件里面的数组打包成verdors.js
		//new webpack.optimize.CommonsChunkPlugin('vendors', env._js + 'vendors.js'),

		new ExtractTextPlugin(env._css + 'style.css'),
		new webpack.optimize.DedupePlugin(),  //查找相等或近似的模块，避免在最终生成的文件中出现重复的模块。

		new webpack.optimize.OccurenceOrderPlugin(),  //按引用频度来排序 ID，以便达到减少文件大小的效果
		new webpack.optimize.AggressiveMergingPlugin(),
		new webpack.NoErrorsPlugin(),

		new HtmlWebpackPlugin({
			filename: 'index.html',
			inject: 'body',
			template: './index.html', // Load a custom template
			hash: true,
			cache: true

		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
		new ProvidePlugin({
			vue: "vue",
			Vue: "vue"
		})
	]
};

module.exports = config;