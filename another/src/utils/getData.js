const axios = require('axios');

module.exports = async function getData(url) {
    const response = await axios.get(url);
    return response.data;
};