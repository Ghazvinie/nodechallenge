module.exports = async function parseData(promisesArray) {
    try {
        const productsArray = await Promise.all(promisesArray)
        const productsTidy = productsArray.filter(element => typeof element !== 'string').flat();
        return productsTidy.map(({ name, url, thumbnail, priceData: { value: price } }) => ({
            name,
            url,
            thumbnail,
            price
        }));
    } catch (error) {
        console.log(error);
    }
}