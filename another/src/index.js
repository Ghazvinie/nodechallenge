const axios = require('axios');

const URL_LIST = require('./config');

async function fetchURLList() {

    async function geData(url) {
        const promise = await axios.get(url);
        return promise.data;
    }

    async function parseData(){
        const promisesArray = URL_LIST.map(url => geData(url));

        const productsArray = await Promise.all(promisesArray).then(values => values.filter(element => typeof element !== 'string').flat());
        const filteredProducts = productsArray.map(product => {
            product.price = product.priceData.value;
            product.url = product.url;
            delete product.stock;
            delete product.priceData;
            delete product.slug;
            delete product.isSale;
            delete product.discountMessage;
            delete product.isOneSize;
            return product;
        })
    
        return filteredProducts;

    }

return await parseData();

}


module.exports = {
    fetchURLList
};