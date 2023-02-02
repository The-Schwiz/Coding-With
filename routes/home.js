const { Router } = require('express');
const homeController = require('../controllers/home');
const loginController = require('../controllers/login');
const logoutController = require('../controllers/logout');

const router = Router();

router.get('/', homeController.getHomePage);
router.post('/', loginController.loginUser);
router.get('/', logoutController.logoutUser);

module.exports = router;