const { Profile, Links, User } = require('../models');

const getProfilePage = async (req, res) => {
    // get the id from the req 
    const profileId = req.params.id;
    // query the profile from the db
    const dbProfile = await Profile.findOne({
        where: {
          id: profileId,
        },
        attributes: [
            'id',
            "picture",
            'name',
            'bio',
            'location',
            'experience',
            'tech',
            'other'],
        include: [
          {
            model: Links,
            attributes: ['id', 'linkedin', 'github', 'ig', 'twitter', 'email', 'website'],
          },
          {
            model: User,
            attributes: ['email']
          }
        ]
    });

    // check the profile exists
    if (!dbProfile) {
        return res.status(404).send("Profile Not Found");
    }
    // sanatize the profile db object
    const profile = dbProfile.get({ plain: true });
    // pass it to the handlebars view
    return res.render('profile', { profile });
};

const createProfile = async (req, res) => {
}


module.exports = { getProfilePage };