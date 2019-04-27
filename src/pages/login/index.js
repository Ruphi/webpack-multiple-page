import _ from 'lodash';
import './login.less';

const div = document.createElement('div');
div.innerHTML = _.join(['login', 'page'], ' ');
div.classList.add('login');
document.body.appendChild(div);