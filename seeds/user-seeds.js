const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
  {
    email: 'john@email.com',
    password: 'password'
  },
  {
    email: 'carl@email.com',
    password: 'password'
  },
  {
    email: 'sabrina@email.com',
    password: 'password'
  },
  {
    email: 'tyler@email.com',
    password: 'password'
  },
  {
    email: 'alex@email.com',
    password: 'password'
  },
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;