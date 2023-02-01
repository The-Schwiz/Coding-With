const { Router } = require('express');
const profileController = require('../controllers/profile');

const router = Router();

router.get('/:id', profileController.getProfilePage);
router.get('/:id/edit', profileController.editProfilePage);
router.post('/:id/update', profileController.updateProfile);

module.exports = router;