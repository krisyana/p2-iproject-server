const axios = require('axios');

const aniApi = axios.create({
    baseURL: 'https://api.aniapi.com',
    timeout: 5000,
    headers: { Authorization: process.env.ANIAPI_KEY },
});

module.exports = aniApi;