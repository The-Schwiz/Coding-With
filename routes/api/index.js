const { Router } = require('express');
const profileApiRouter = require('./profile');


const apiRouter = Router();


apiRouter.use('/profiles', profileApiRouter);
// apiRouter.use('/users', usersApiRouter);



module.exports = apiRouter;