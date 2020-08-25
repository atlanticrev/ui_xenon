const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: "./script.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "script.bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: path.resolve(__dirname, "dist")
                        },
                    },
                    "css-loader", // Translates CSS into CommonJS
                    "resolve-url-loader",
                    "sass-loader", // Compiles Sass to CSS
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: "file-loader",
                    },
                ],
            }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "style.bundle.css",
        }),
    ],
};

