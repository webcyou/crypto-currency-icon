var path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

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
                test: /\.scss$/,
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
