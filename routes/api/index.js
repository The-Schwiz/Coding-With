const { Router } = require('express');
const profileApiRouter = require('./profile');

const apiRouter = Router();

apiRouter.use('/profiles', profileApiRouter);

module.exports = apiRouter;