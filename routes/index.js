const { Router } = require('express');
const apiRouter = require('./api');
const homeRouter = require('./home');
const profileRouter = require('./profile');
const signupRouter = require('./signup');


const mainRouter = Router();


mainRouter.use('/api', apiRouter);
mainRouter.use('/', homeRouter);
mainRouter.use('/profile', profileRouter);
mainRouter.use('/signup', signupRouter);



module.exports = mainRouter;
