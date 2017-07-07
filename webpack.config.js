var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

let extractLESS = new ExtractTextPlugin('style.css');
let prod = (
    new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false}),
    new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        mangle: {
            screw_ie8: true,
            keep_fnames: true
        },
        compress: {
            screw_ie8: true
        },
        comments: false}));

let dev = ( new webpack.optimize.UglifyJsPlugin());

module.exports = function (env) {
    var build = env === 'prod' ? prod : dev;
    var options = {
        entry: "./front/app.js",
        output: {
            path: path.resolve('./public/build'),
            publicPath: "build/",
            filename: "bundle.js"
        },
        module: {
            loaders: [
                {
                    loader: "babel-loader",
                    exclude: [/node_modules/],
                    test: /\.jsx?$/,
                    query: {
                        presets: ['es2015', 'react']
                    }
                },
                {
                    test: /\.eot|\.ttf|\.svg|\.woff2?/,
                    loader: 'file?name=[name].[ext]'
                },
                {
                    test: /\.less$/i,
                    use: extractLESS.extract(['css-loader', 'less-loader'])
                },
                {
                    test: /\.jpg$/,
                    loader: "url-loader?limit=10000&mimetype=image/jpg"
                },
                {
                    test: /\.png$/,
                    loader: "url-loader?limit=10000&mimetype=image/png"
                },
            ]
        },
        plugins: [
            extractLESS,
            build
        ]

    };

    return options;
};