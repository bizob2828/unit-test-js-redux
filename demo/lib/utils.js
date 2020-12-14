'use strict';
const utils = module.exports;

let peepsToCall = [];

let users = {
  bizob2828: 'Bob Evans',
  arei: 'Glen Goodwin'
};

utils.getUser = function(username) {
  return users[username];
}

utils.callMeLater = function(name) {
  peepsToCall.push(name);
}

utils.getName = function(user) {
  let name = utils.getUser(user);

  if(name === 'Bob Evans') {
    utils.callMeLater('Carly Rae');
    return 'Down on the Farm';
  }

  return name;
}
