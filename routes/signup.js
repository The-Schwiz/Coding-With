const { Router } = require('express');
const signUpController = require('../controllers/signup');

const router = Router();

router.get('/sign-up', signUpController.getSignUpPage);

module.exports = router;