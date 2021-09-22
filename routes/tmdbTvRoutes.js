const router = require('express').Router();
const tmdbController = require('../controllers/tmdbController');

router.get('/', tmdbController.getAllTv);
router.get('/trending', tmdbController.getTrendingTv);

module.exports = router;