
// Home
const home = (req, res) => {
    res.render('home', { page: "Home" });
};

// About Page
const about = (req, res) => {
    res.render('home/about', { page: "About" });
};

// esp index 
const espIndex = (req,res) =>{
    res.render('esp/index',{page:"Esp"})
}

// Export all
module.exports = {
    home,
    about,
    espIndex
};
