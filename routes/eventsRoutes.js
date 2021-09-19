const eventController = require('../controllers/eventController');

const router = require('express').Router();

router.get('/', eventController.getAll);
router.post('/', eventController.create);
router.put('/:id', eventController.update);
router.patch('/:id', eventController.updateStatus);
router.delete('/:id', eventController.delete);

module.exports = router;