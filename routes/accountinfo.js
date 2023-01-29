const { Router } = require('express');
const accountInfoController = require('../controllers/accountinfo');

const router = Router();

router.get('/accountinfo', accountInfoController.getAccountInfoPage);

module.exports = router;