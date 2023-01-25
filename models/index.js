const User = require('./User');
const Profile = require('./Profile');
const Links = require('./Links');

Profile.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Links.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Links.belongsTo(Profile, {
  foreignKey: 'profile_id',
  onDelete: 'SET NULL'
});

module.exports = { User, Profile, Links };