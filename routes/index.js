const { Router } = require('express');
const apiRouter = require('./api');
const homeRouter = require('./home');
const profileRouter = require('./profile');
const signupRouter = require('./signup');
const accountInfoRouter = require('./accountinfo');
const updateProfileRouter = require('./updateprofile');
const loginRouter = require('./login');
const logoutRouter = require('./logout');
const { withAuthHtml } = require('../utils/auth');

const mainRouter = Router();

mainRouter.use('/api', apiRouter);
mainRouter.use('/', homeRouter);
mainRouter.use('/profiles', withAuthHtml, profileRouter);
mainRouter.use('/sign-up', signupRouter);
mainRouter.use('/account', accountInfoRouter);
// mainRouter.use('/update-profile', updateProfileRouter);
mainRouter.use('/signup', signupRouter);
mainRouter.use('/login', loginRouter);
mainRouter.use('/logout', logoutRouter);


mainRouter.get('*', (req, res) => {
    res.render('404-not-found');
});

module.exports = mainRouter;