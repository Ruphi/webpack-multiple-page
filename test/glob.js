const glob = require('glob');
const _ = require('_lodash@4.17.11@lodash');

const fileArr = glob.sync('../src/pages/**/*.html');
console.log(fileArr);
fileArr.forEach(function (item) {
    let res = item.split('/');
    console.log(res);
})
console.log(_.concat([1], [2]));