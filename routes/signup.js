const { Router } = require('express');
const signUpController = require('../controllers/signup');

const router = Router();

router.get('/signup', signUpController.getSignUpPage);

module.exports = router;