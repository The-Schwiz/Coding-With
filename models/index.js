const User = require('./User');
const Profile = require('./Profile');
const Links = require('./Links');

Profile.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
User.hasOne(Profile);

Links.belongsTo(Profile, {
  foreignKey: 'profile_id',
  onDelete: 'CASCADE'
});
Profile.hasOne(Links);

module.exports = { User, Profile, Links };