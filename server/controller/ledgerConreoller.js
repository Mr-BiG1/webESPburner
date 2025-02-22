
// Home
const home = (req, res) => {
    res.render('home', { page: "Home" });
};

// About Page
const about = (req, res) => {
    res.render('home/about', { page: "About" });
};

// Export all
module.exports = {
    home,
    about,
};
