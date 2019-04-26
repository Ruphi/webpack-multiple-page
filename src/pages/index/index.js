import _ from 'lodash';

const div = document.createElement('div');

const compiled = _.template('hello <%= user %>!');
div.innerHTML = compiled({ 'user': 'fred' });

document.body.appendChild(div);