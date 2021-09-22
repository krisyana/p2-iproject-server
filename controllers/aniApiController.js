const aniApi = require('../apis/aniApi');

class aniApiController {
    static async getAll(req, res, next) {
        try {
            const { page } = req.query;
            let url = '/v1/anime?per_page=20';
            if (page) {
                url += `&page=${page}`;
            }
            const result = await aniApi.get(url);
            res.status(200).json(result.data);
        } catch (err) {
            next(err);
        }
    }
    static async getOne(req, res, next) {
        try {
            const { id } = req.params;
            const result = await aniApi.get(`/v1/anime/${id}`);
            res.status(200).json(result.data);
        } catch (err) {
            next(err);
        }
    }
}

module.exports = aniApiController;