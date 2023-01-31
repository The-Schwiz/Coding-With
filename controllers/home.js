const getHomePage = (req, res) => {
    return res.render('home', {
        logged_in: req.session?.user_id
    });
};


module.exports = { getHomePage };
