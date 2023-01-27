const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Profile, User, Links } = require('../../models');
const {withAuthApi} = require('../../utils/auth');

// GET all profiles route
router.get('/', (req, res) => {
  Profile.findAll({
    attributes: [
      'id',
      'name',
      'bio',
      'location',
      'experience',
      'tech',
      'others'],
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
  })
    .then(dbProfileData => res.json(dbProfileData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET single profile route
router.get('/:id', withAuthApi, (req, res) => {
  Profile.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
        'id',
        'name',
        'bio',
        'location',
        'experience',
        'tech',
        'others'],
    include: [
      {
        model: Links,
        attributes: ['id', 'linkedin', 'github', 'ig', 'twitter', 'email', 'website'],
        include: {
          model: User,
          attributes: ['email']
        }
      },
      {
        model: User,
        attributes: ['email']
      }
    ]
  })
    .then(dbProfileData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No profile found.' });
        return;
      }
      res.json(dbProfileData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST profile route
router.post('/', withAuthApi, (req, res) => {
  Profile.create({
    name: req.body.name,
    bio: req.body.bio,
    location: req.body.location,
    experience: req.body.experience,
    tech: req.body.tech,
    user_id: req.session.user_id
  })
    .then(dbProfileData => res.json(dbProfileData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// PUT profile route
router.put('/:id', withAuthApi, (req, res) => {
  Profile.update({
    name: req.body.name,
    bio: req.body.bio,
    location: req.body.location,
    experience: req.body.experience,
    tech: req.body.tech,
    user_id: req.session.user_id
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbProfileData => {
      if (!dbProfileData) {
        res.status(404).json({ message: 'No profile found.' });
        return;
      }
      res.json(dbProfileData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE profile route
router.delete('/:id', withAuthApi, (req, res) => {
  console.log('id', req.params.id);
  Profile.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbProfileData => {
      if (!dbProfileData) {
        res.status(404).json({ message: 'No profile found.' });
        return;
      }
      res.json(dbProfileData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;