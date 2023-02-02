const { User } = require('../models');

const loginUser = async (req, res) => {
    const dbUser = await User.findOne({
        where: {
          email: req.body.email
        }
    });
    
    if (!dbUser) {
      return res.status(404).json({ message: 'No user found.' });
    }

    const validPassword = dbUser.checkPassword(req.body.password);

    if (!validPassword) {
      return res.status(400).json({ message: 'Invalid credentials.' });
    }

    const user = dbUser.get({ plain: true });
    
    req.session.save(() => {
        req.session.user_id = user.id;
        req.session.email = user.email;
        req.session.loggedIn = true;
    
        res.redirect('/'); // to refresh the page after logging in
    });
};


module.exports = { loginUser };