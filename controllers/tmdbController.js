const tmdb = require('../apis/tmdb');

class tmdbController {
    static async getAll(req, res, next) {
        try {
            const data = await tmdb.get('/movie/');
            res.status(200).json(data.data);
        } catch (err) {
            next(err);
        }
    }
    static async getTrending(req, res, next) {
        try {
            const data = await tmdb.get('/trending/movie/week');
            res.status(200).json(data.data);
        } catch (err) {
            next(err);
        }
    }
}

module.exports = tmdbController;