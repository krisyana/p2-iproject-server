const aniApiController = require('../controllers/aniApiController');
const eventController = require('../controllers/eventController');
const tmdbController = require('../controllers/tmdbController');

const router = require('express').Router();

router.get('/', (req, res, next) => {
    res.send('Welcome to WatchaTime DB for full documentation go here: ');
});
router.get('/movies', tmdbController.getAll);
router.get('/movies/trending', tmdbController.getTrending);
router.get('/animes', aniApiController.getAll);
router.get('/events', eventController.getAll);
module.exports = router;