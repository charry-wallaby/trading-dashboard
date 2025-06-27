const path = require('path');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devServer: {
        static: './dist',
        hot: true,
        open: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        }),
        new CopyWebpackPlugin({
            patterns: [{
                    from: `./src/images/`,
                    to: `images`,
                }
            ],
        }),
    ],
    module: {
        rules: [{
            test: /\.css$/i,
            include: path.resolve(__dirname, 'src'),
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
        },
        {
            test: /\.(png|jpg|gif|webp)$/,
            loader: "file-loader",
            options: {
                name: "[path][name].[ext]",
                useRelativePath: true,
                context: `./src`,
                outputPath: '',
            },
        }, ],
    },
};
