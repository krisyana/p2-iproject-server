const axios = require('axios');

const aniApi = axios.create({
    baseURL: 'https://api.aniapi.com',
    headers: { Authorization: process.env.ANIAPI_KEY },
});

module.exports = aniApi;