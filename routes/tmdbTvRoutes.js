const router = require('express').Router();
const tmdbController = require('../controllers/tmdbController');

router.get('/', tmdbController.getAllTv);
router.get('/trending', tmdbController.getTrendingTv);
router.get('/toprated', tmdbController.getTopTv);
router.get('/onair', tmdbController.getOnTheAir);
router.get('/:id', tmdbController.getOneTv);

module.exports = router;