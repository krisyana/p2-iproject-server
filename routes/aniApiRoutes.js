const aniApiController = require('../controllers/aniApiController');

const router = require('express').Router();

router.get('/', aniApiController.getAll);
router.get('/:id', aniApiController.getOne);

module.exports = router;