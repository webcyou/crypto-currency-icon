'use strict';

var path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = [{
    context: path.join(__dirname, 'scss/src'),
    entry: {
        style: './crypto-currency-icon.scss'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].css'
    },
    module: {
        loaders: [
            {
                test: /\.s[ac]ss$/,
                use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: true
                                }
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    sourceMap: true,
                                    plugins: function() {
                                        return autoprefixer({
                                            browsers: [
                                                'last 3 version',
                                                'ie >= 10'
                                            ]
                                        })
                                    }
                                }
                            },
                            {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: true
                                }
                            }
                        ]
                    }
                )
            }
        ]
    },
    devtool: 'source-map',
    plugins: [
        new ExtractTextPlugin('[name].css')
    ]
}];
