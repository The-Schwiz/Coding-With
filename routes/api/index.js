const { Router } = require('express');
const profileApiRouter = require('./profile');
const userApiRouter = require('./user');

const apiRouter = Router();

apiRouter.use('/users', userApiRouter);
apiRouter.use('/profiles', profileApiRouter);

module.exports = apiRouter;