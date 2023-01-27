const sequelize = require('../config/connection');
const seedUsers = require('./user-seeds');
const seedProfiles = require('./profile-seeds');
const seedLinks = require('./links-seeds');

sequelize.sync({ force: false }).then(async () => {
  await seedUsers();
  await seedProfiles();
  await seedLinks();
});