
const assert = require('assert');

const { fetchURLList } = require('../');

describe('Fetch URL list', function () {
  it('it should fetch an array of objects', async function () {
    const expected = [
      {
        name: 'V-neck wool sweater',
        url: '/products/Adam-Lippes-V-neck-wool-sweater-1095470',
        price: 121,
        thumbnail:
          '//assetsprx.matchesfashion.com/img/product/1095470_1_thumbnail.jpg'
      },
      {
        name: 'Straight-leg chino trousers ',
        url: '/products/Adam-Lippes-Straight-leg-chino-trousers--1095483',
        price: 117,
        thumbnail:
          '//assetsprx.matchesfashion.com/img/product/1095483_1_thumbnail.jpg'
      },
      {
        name: 'Crew-neck wool sweater ',
        url: '/products/Adam-Lippes-Crew-neck-wool-sweater--1095472',
        price: 285,
        thumbnail:
          '//assetsprx.matchesfashion.com/img/product/1095472_1_thumbnail.jpg'
      },
      {
        name: 'Crew-neck wool sweater',
        url: '/products/Adam-Lippes-Crew-neck-wool-sweater-1095467',
        price: 202,
        thumbnail:
          '//assetsprx.matchesfashion.com/img/product/1095467_1_thumbnail.jpg'
      },
      {
        name: 'V-neck wool sweater',
        url: undefined,
        price: undefined,
        thumbnail:
          '//assetsprx.matchesfashion.com/img/product/1095470_1_thumbnail.jpg'
      }
    ];
    const actual = await fetchURLList();

    assert.deepEqual(actual, expected);
  });
});