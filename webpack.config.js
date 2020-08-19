const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './script.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'script.bundle.js'
    },
    // devServer: {
    //     contentBase: path.resolve(__dirname, 'public')
    // },
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'style-loader', // Creates `style` nodes from JS strings
                    'css-loader', // Translates CSS into CommonJS
                    'resolve-url-loader',
                    'sass-loader', // Compiles Sass to CSS
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
    ],
};

