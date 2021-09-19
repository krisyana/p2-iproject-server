const tmdbController = require('../controllers/tmdbController');

const router = require('express').Router();

router.get('/', tmdbController.getAll);
router.get('/trending', tmdbController.getTrending);

module.exports = router;