const { Router } = require('express');
const updateProfileController = require('../controllers/updateprofile');

const router = Router();

router.get('/update-profile', updateProfileController.getUpdateProfilePage);

module.exports = router;