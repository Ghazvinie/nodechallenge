
const assert = require('assert');

const { fetchURLList } = require('../');

describe('Fetch URL list', function() {
  it('it should fetch an array of objects', function() {
    const expected = [
      {
        name: 'product name',
        url: '/test/123',
        price: 10,
        thumbnail: 'https://thumb_url/123.jpg'
      }
    ];

    assert.deepEqual(fetchURLList(), expected);
  });
});