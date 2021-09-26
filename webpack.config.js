const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageMinimzerPlugin = require('image-minimizer-webpack-plugin');
// const {extendDefaulPlugins} = require('imagemin-svgo');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        watchFiles: './src/',
    },
    plugins: [
    new HtmlWebpackPlugin({
        title: 'Piebird Bakery & Cafe',
        template: 'src/index.html',
    }),
    new ImageMinimzerPlugin({
        minimizerOptions: {
            plugins: [
                ["gifsicle", {interlaced: true}],
                ["jpegtran", {progressive: true}],
                ["optipng", {optimizationLevel: 5}],
                // [
                //     "svgo",
                //     {
                //         plugins: extendDefaultPlugins([
                //             {
                //             name: "removeViewBox",
                //             active: false,
                //             },
                //             {
                //             name: "addAttributesToSVGElement",
                //             params: {
                //                 attributes: [{ xmlns: "http://www.w3.org/2000/svg" }],
                //             },
                //             },
                //         ]),
                //     },
                // ]
            ],
        },
    })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
            use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
};