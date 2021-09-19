const aniApi = require('../apis/aniApi');

class aniApiController {
    static async getAll(req, res, next) {
        try {
            const result = await aniApi.get('/v1/anime');
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