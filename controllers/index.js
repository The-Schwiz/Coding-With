const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home');
const profileRoutes = require('./profile');
const updateProfileRoutes = require('./updateprofile');
const accountInfoRoutes = require('./accountinfo');
const signupRoutes = require('./signup');

router.use('/', homeRoutes);
router.use('/profile', profileRoutes);
router.use('/updateprofile', updateProfileRoutes);
router.use('/accountinfo', accountInfoRoutes);
router.use('/signup', signupRoutes);
router.use('/api', apiRoutes);
router.use ('/login', loginRoutes);

module.exports = router;