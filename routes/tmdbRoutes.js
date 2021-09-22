const tmdbController = require('../controllers/tmdbController');

const router = require('express').Router();

router.get('/', tmdbController.getAll);
router.get('/trending', tmdbController.getTrending);
router.get('/toprated', tmdbController.getTop);
router.get('/:id', tmdbController.getOne);
router.get('/onair', tmdbController.getNowPlaying);

module.exports = router;