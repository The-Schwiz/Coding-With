const { Profile, Links } = require('../models');

const getHomePage = async (req, res) => {
    try {       
        const dbProfiles = await Profile.findAll({
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
                required: true,
                attributes: ['id', 'linkedin', 'github', 'ig', 'twitter', 'email', 'website'],
              },
              // {
              //   model: User,
              //   attributes: ['email']
              // }
            ]
            // include: {all: true},
        });

        const profiles = dbProfiles.map((profile) => profile.get({ plain: true }));
        const profilesWithImageNumber = profiles.map((profile) => ({...profile, imageNumber: profile.id % 3 + 1 }));

        return res.render('home', {
            profiles: profilesWithImageNumber,
        });
    } catch (error) {
        res.send(error.message);
    }
};


module.exports = { getHomePage };
