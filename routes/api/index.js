const { Router } = require('express');
const profileApiRouter = require('./profile');
const userApiRouter = require('./user');
const linksApiRouter = require('./links');

const apiRouter = Router();

apiRouter.use('/users', userApiRouter);
apiRouter.use('/profiles', profileApiRouter);
apiRouter.use('/links', linksApiRouter);

module.exports = apiRouter;