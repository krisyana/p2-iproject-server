const tmdb = require('../apis/tmdb');

class tmdbController {
    static async getAll(req, res, next) {
        try {
            const { page } = req.query;
            let url = '/movie/popular';
            if (page) {
                url += `?page=${page}`;
            }
            const data = await tmdb.get(url);
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
    static async getAllTv(req, res, next) {
        try {
            const { page } = req.query;
            let url = '/tv/popular';
            if (page) {
                url += `?page=${page}`;
            }
            const data = await tmdb.get('/tv/popular');
            res.status(200).json(data.data);
        } catch (err) {
            next(err);
        }
    }
    static async getTrendingTv(req, res, next) {
        try {
            const data = await tmdb.get('/trending/tv/week');
            res.status(200).json(data.data);
        } catch (err) {
            next(err);
        }
    }
}

module.exports = tmdbController;