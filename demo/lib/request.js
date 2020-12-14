'use strict';
const fetch = require('node-fetch');
const logger = require('./logger');

module.exports = async function makeRequest(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    return await response.json();
  } catch(err) {
    logger.error('Failed to fetch %s, %j', id, err);
    debugger;
    throw err;
  }

}
