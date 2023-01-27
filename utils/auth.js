const withAuthApi = (req, res, next) => {
    if (!req.session.user_id) {
        res.status(401).json({msg: 'User must be authorized'})
    } else {
        next();
    }
};

const withAuthHtml = (req, res, next) => {
    if (!req.session.user_id) {
        res.redirect('/');
    } else {
        next();
    }
};

module.exports = {withAuthApi, withAuthHtml};