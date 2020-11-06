const _ = require('lodash');
const user = {
    name: "vasya",
    permissions: {
        read: true,
        write: false
    },
    data: {
        surname: 'hui'
    }
};

let nickname = 'unnown';

console.log('name', user.name);
console.log('read', user.permissions.read);

const guaranteeName = _.get(user, 'data.surname', 'annonim');

console.log(guaranteeName);