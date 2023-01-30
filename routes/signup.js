const { Router } = require('express');
const signUpController = require('../controllers/signup');

const router = Router();

router.get('/', signUpController.getSignupPage);

module.exports = router;