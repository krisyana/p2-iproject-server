const axios = require('axios');

const tmdb = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    timeout: 5000,
    headers: { Authorization: process.env.TMDB_KEY },
});

module.exports = tmdb;