/* eslint-disable no-undef */
var CopyWebpackPlugin = require('copy-webpack-plugin');

const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [

        new CopyWebpackPlugin({
            patterns: [
                { from: 'img', to: 'img' },
                { from: 'css', to: 'css' },
                { from: 'data', to: 'data' },
            ],
        }),
    ]
};