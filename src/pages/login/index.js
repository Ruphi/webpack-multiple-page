import _ from 'lodash';

const div = document.createElement('div');
div.innerHTML = _.join(['login', 'page'], ' ');
document.body.appendChild(div);