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
        filename: 'crypto-currency-icon.css'
    },
    module: {
        loaders: [
            {
                test: /\.s[ac]ss$/,
                use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            {
                                loader: 'css-loader'
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
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
                                loader: 'sass-loader'
                            }
                        ]
                    }
                )
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('crypto-currency-icon.css')
    ]
}];
