const axios = require('axios');

const URL_LIST = require('./config');

/**
 * URLs to fetch:
 * https://pastebin.com/raw/xnU3bRvH
 * https://pastebin.com/raw/StjwkCib
 * https://pastebin.com/raw/RUcap17D
 * https://pastebin.com/raw/fKt6beV2
 * https://pastebin.com/raw/ajRSf4FF
 *
 * The function should return Array only.
 */
function fetchURLList() {
  return [
    {
      name: 'product name',
      url: '/test/123',
      price: 10,
      thumbnail: 'https://thumb_url/123.jpg'
    }
  ];
}

console.log(fetchURLList());

module.exports = {
  fetchURLList
};