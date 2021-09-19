const router = require('express').Router();
const tmdbRoutes = require('./tmdbRoutes');
const tmdbTvRoutes = require('./tmdbRoutes');
const aniApiRoutes = require('./aniApiRoutes');
const usersRoutes = require('./userRoutes');
const eventsRoutes = require('./eventsRoutes');

router.get('/', (req, res, next) => {
    res.send('Welcome to WatchaTime DB for full documentation go here: ');
});

router.use('/movies', tmdbRoutes);
router.use('/animes', aniApiRoutes);
router.use('/tvShows', tmdbTvRoutes);
router.use('/users', usersRoutes);
router.use('/events', eventsRoutes);

module.exports = router;