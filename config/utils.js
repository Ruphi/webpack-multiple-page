const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    getEntry: function () {
        const entries = {};
        const fileArr = glob.sync('./src/pages/**/*.js');
        fileArr.forEach(function (pat) {
            let pathArr = pat.split('/');
            entries[pathArr[3]] = pat;
        });
        return entries;
    },
    setHtmlWebpackPlugin: function () {
        const HtmlWebpackPluginArr = [];
        const fileArr = glob.sync('./src/pages/**/*.html');
        for (let i = 0; i < fileArr.length; i++) {
            let name = fileArr[i].split('/')[3];
            HtmlWebpackPluginArr.push(new HtmlWebpackPlugin({
                filename: 'pages/'+name+'/'+name+'.html',
                template: fileArr[i],
                chunks: [name],
                hash: true
            }));
        }
        return HtmlWebpackPluginArr;
    }
};