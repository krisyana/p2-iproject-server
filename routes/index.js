const router = require('express').Router();
const tmdbRoutes = require('./tmdbRoutes');
const tmdbTvRoutes = require('./tmdbTvRoutes');
const aniApiRoutes = require('./aniApiRoutes');
const usersRoutes = require('./userRoutes');
const eventsRoutes = require('./eventsRoutes');
const authentication = require('../middlewares/authentication');

router.get('/', (req, res) => {
    res.send('Welcome to WatchaTime DB for full documentation go here: ');
});
router.use('/users', usersRoutes);
router.use('/movies', tmdbRoutes);
router.use('/animes', aniApiRoutes);
router.use('/tvs', tmdbTvRoutes);
router.use(authentication);
router.use('/events', eventsRoutes);

module.exports = router;