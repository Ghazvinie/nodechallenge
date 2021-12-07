const URL_LIST = require('./config');
const getData = require('./utils/getData');
const parseData = require('./utils/parseData');

function fetchURLList() {
    const promisesArray = URL_LIST.map(url => getData(url));
    return parseData(promisesArray);
}

module.exports = {
    fetchURLList
};