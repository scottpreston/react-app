const webpack = require('webpack');

module.exports = {
    entry: './js/app.js',
    output: {
        filename: './js/dist/bundle.js'
    },
    devtool: 'cheap-module-eval-source-map',
    plugins: [
      new webpack.ProvidePlugin({   
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery'
    })
    ],
    module: {
        loaders: [{
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader'
            }, {
                test: /\.css$/,
                loader: 'css-loader',
                query: {
                    modules: true,
                    localIdentName: '[name]__[local]___[hash:base64:5]'
                },
            },
            {
                test: /\.(woff2?|svg)$/,
                loader: 'url-loader?limit=10000&name=/js/dist/[name].[ext]'
            },
            {
                test: /\.(ttf|eot)$/,
                loader: 'file-loader?name=/js/dist/[name].[ext]'
            }
        ]
    }
}