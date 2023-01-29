const path = require('path');
const sequelize = require('../config/connection');
const seedUsers = require('./user-seeds');
const seedProfiles = require('./profile-seeds');
const seedLinks = require('./links-seeds');

sequelize.sync({ force: false }).then(async () => {
  // await sequelize.query(`source ${path.resolve(__dirname, '../db/schema.sql')}`);
  await sequelize.query('DELETE FROM links');
  await sequelize.query('DELETE FROM profile');
  await sequelize.query('DELETE FROM user');
  await seedUsers();
  await seedProfiles();
  await seedLinks();
});