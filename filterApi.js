const Product = require('./Product');

const yellowHat = new Product("Yellow Hat", "hat", 3.99, false);
const redShirt = new Product("Red Shirt", "shirt", 14.99, true);
const greenTrousers = new Product("Green Trousers", "trouser", 18.50, true);
const redHat = new Product("Red Hat", "hat", 5.99, false)

const productsArray = [yellowHat, redShirt, greenTrousers, redHat];

function filterProductsByName(products, productName) {
    return products.filter(product => product.name === productName);
}


function filterProductsByAttribute(products, attribute, value) {
    return products.filter(product => product[attribute] === value);
}

function filterProductsByAttributeWithOperator(products, attribute1, value1, operator, attribute2, value2) {
    return products.filter(product => {
        if (operator === "OR"){
            return product[attribute1] === value1 || product[attribute2] === value2 && product;
        } else if (operator === "AND"){
            return product[attribute1] === value1 && product[attribute2] === value2 && product;
        }
    });
}

console.log(filterProductsByAttributeWithOperator(productsArray, "category", "hat", "OR", "onSale", true));