const path = require('path');
const utils = require('../config/utils');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const _ = require('_lodash@4.17.11@lodash');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: utils.getEntry(),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'pages/[name]/[name].[chunkhash].js'
    },
    plugins: _.concat(
        [
            new CleanWebpackPlugin()
        ],
        utils.setHtmlWebpackPlugin(),
        [

        ]
    )
};