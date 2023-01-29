const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home');
const profileRoutes = require('./profile');
const updateprofileRoutes = require('./updateprofile');
const accountinfoRoutes = require('./accountinfo');
const signupRoutes = require('./signup');

router.use('/', homeRoutes);
router.use('/profile', profileRoutes);
router.use('/updateprofile', updateprofileRoutes);
router.use('/accountinfo', accountinfoRoutes);
router.use('/signup', signupRoutes);
router.use('/api', apiRoutes);

module.exports = router;