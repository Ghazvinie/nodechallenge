module.exports = async function parseData(promisesArray) {
    const productsArray = await Promise.all(promisesArray).then(values => values.filter(element => typeof element !== 'string').flat());

    const filteredProducts = productsArray.map(({ name, url, thumbnail, priceData: { value: price } }) => ({
        name,
        url,
        thumbnail,
        price
    }));
    return filteredProducts;
}