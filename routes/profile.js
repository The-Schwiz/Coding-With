const { Router } = require('express');
const profileController = require('../controllers/profile');

const router = Router();

router.get('/:id', profileController.getProfilePage);

module.exports = router;