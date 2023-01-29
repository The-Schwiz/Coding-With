const { Router } = require('express');
const homeController = require('../controllers/home');

const router = Router();

router.get('/', homeController.getHomePage);

module.exports = router;