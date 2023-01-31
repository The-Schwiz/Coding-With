const { Router } = require('express');
const apiRouter = require('./api');
const homeRouter = require('./home');
const profileRouter = require('./profile');
const signupRouter = require('./signup');
const accountInfoRouter = require('./accountinfo');
const updateProfileRouter = require('./updateprofile');


const mainRouter = Router();


mainRouter.use('/api', apiRouter);
mainRouter.use('/', homeRouter);
mainRouter.use('/profile', profileRouter);
mainRouter.use('/sign-up', signupRouter);
// mainRouter.use('/account', accountInfoRouter);
// mainRouter.use('/update-profile', updateProfileRouter);
mainRouter.use('/signup', signupRouter);




module.exports = mainRouter;
