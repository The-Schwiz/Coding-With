const router = require('express').Router();
const { Links } = require('../../models');
const { withAuthApi } = require('../../utils/auth');

// GET links route
router.get('/', withAuthApi, (req, res) => {
  Links.findAll()
    .then(dbLinksData => res.json(dbLinksData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST links route
router.post('/', withAuthApi, (req, res) => {
  if (req.session) {
    Links.create({
      linkedin: req.body.linkedin,
      github: req.body.github,
      ig: req.body.ig,
      twitter: req.body.twitter,
      email: req.body.email,
      website: req.body.website,
      profile_id: req.body.profile_id,
    })
      .then(dbLinksData => res.json(dbLinksData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  }
});

// DELETE comment route
router.delete('/:id', withAuthApi, (req, res) => {
  Links.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbLinksData => {
      if (!dbLinksData) {
        res.status(404).json({ message: 'No links found.' });
        return;
      }
      res.json(dbLinksData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;