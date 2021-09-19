const aniApi = require('../apis/aniApi');

class aniApiController {
    static async getAll(req, res, next) {
        try {
            const data = await aniApi.get('/v1/anime');
            res.status(200).json(data.data);
        } catch (err) {
            next(err);
        }
    }
}

module.exports = aniApiController;