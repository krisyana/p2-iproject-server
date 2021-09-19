const UserController = require('../controllers/userController');

const router = require('express').Router();

router.post('/register', UserController.signup);
router.post('/login', UserController.login);
router.post('/googleRegister', UserController.googleAuth);

router.route('/:id').put(UserController.update).delete(UserController.delete);
module.exports = router;