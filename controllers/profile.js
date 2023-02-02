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

const editProfilePage = async (req, res) => {
  // only logged in user for their profile can edit it
  const user_id = req.session.user_id;

  const profileFromDb = await Profile.findOne({ where: { user_id: user_id }, attributes: ['id']});

  const profileForLoggedInUser = profileFromDb.get({ plain: true });

  if (profileForLoggedInUser.id != req.params.id) {
    res.render('not-your-profile');
  }

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
  return res.render('editProfile', { profile });
}


const updateProfile = async (req, res) => {
  const profileId = req.params.id;

  let result = await Profile.update({
    picture: req.body.picture,
    name: req.body.name,
    bio: req.body.bio,
    location: req.body.location,
    experience: req.body.experience,
    tech: req.body.tech,
    },
    {
      where: {
        id: req.params.id
      }
    }
  );
  let affectedRowsCount = result[0];
  if (affectedRowsCount === 0) {
    return res.status(404).send("Profile Not Found");
  }

  // update links
  result = await Links.update({
    linkedin: req.body.linkedin,
    github: req.body.github,
    ig: req.body.ig,
    twitter: req.body.twitter,
    email: req.body.email,
    website: req.body.website,
    },
    {
      where: {
        profile_id: req.params.id
      }
    }
  );
  affectedRowsCount = result[0];
  if (affectedRowsCount === 0) {
    return res.status(404).send("Links Not Found");
  }

  return res.redirect(`/profiles/${profileId}`);
}

module.exports = { getProfilePage, editProfilePage, updateProfile };
