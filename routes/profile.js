const { Router } = require('express');
const profileController = require('../controllers/profile');

const router = Router();

router.get('/', profileController.getProfilePage);

module.exports = router;