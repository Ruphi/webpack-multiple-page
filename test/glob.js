const path = require('path');
const glob = require('glob');
const _ = require('_lodash@4.17.11@lodash');

const fileArr = glob.sync('../src/pages/**/*.(css|less|scss)');
console.log(fileArr);
fileArr.forEach(function (item) {
    let res = item.split('/');
});