const aniApiController = require('../controllers/aniApiController');

const router = require('express').Router();

router.get('/animes', aniApiController.getAll);

module.exports = router;