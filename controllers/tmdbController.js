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
            const { page } = req.query;
            let url = '/trending/movie/week';
            if (page) {
                url += `?page=${page}`;
            }
            const data = await tmdb.get(url);
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
            const data = await tmdb.get(url);
            res.status(200).json(data.data);
        } catch (err) {
            next(err);
        }
    }
    static async getTrendingTv(req, res, next) {
        try {
            const { page } = req.query;
            let url = '/trending/tv/week';
            if (page) {
                url += `?page=${page}`;
            }
            const data = await tmdb.get(url);
            res.status(200).json(data.data);
        } catch (err) {
            next(err);
        }
    }
    static async getTopTv(req, res, next) {
        try {
            const { page } = req.query;
            let url = '/tv/top_rated';
            if (page) {
                url += `?page=${page}`;
            }
            const data = await tmdb.get(url);
            res.status(200).json(data.data);
        } catch (err) {
            next(err);
        }
    }
    static async getTop(req, res, next) {
        try {
            const { page } = req.query;
            let url = '/movies/top_rated';
            if (page) {
                url += `?page=${page}`;
            }
            const data = await tmdb.get(url);
            res.status(200).json(data.data);
        } catch (err) {
            next(err);
        }
    }
    static async getOnTheAir(req, res, next) {
        try {
            const { page } = req.query;
            let url = '/tv/on_the_air';
            if (page) {
                url += `?page=${page}`;
            }
            const data = await tmdb.get(url);
            res.status(200).json(data.data);
        } catch (err) {
            next(err);
        }
    }
    static async getNowPlaying(req, res, next) {
        try {
            const { page } = req.query;
            let url = '/movie/now_playing';
            if (page) {
                url += `?page=${page}`;
            }
            const data = await tmdb.get(url);
            res.status(200).json(data.data);
        } catch (err) {
            next(err);
        }
    }
    static async getOne(req, res, next) {
        try {
            const { id } = req.params;
            let url = `/movie/${id}`;
            const data = await tmdb.get(url);
            res.status(200).json(data.data);
        } catch (err) {
            next(err);
        }
    }
    static async getOneTv(req, res, next) {
        try {
            const { id } = req.params;
            let url = `/tv/${id}`;
            const data = await tmdb.get(url);
            res.status(200).json(data.data);
        } catch (err) {
            next(err);
        }
    }
}

module.exports = tmdbController;