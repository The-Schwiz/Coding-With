const { Router } = require('express');
const updateProfileController = require('../controllers/updateprofile');

const router = Router();

router.get('/updateprofile', updateProfileController.getUpdateProfilePage);

module.exports = router;