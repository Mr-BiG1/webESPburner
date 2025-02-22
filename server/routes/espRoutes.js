const express = require('express');
const routes = express.Router();
const {home, about,espIndex} = require('../controller/espConreoller');
//home 
routes.get('/',home);

// about
routes.get('/about',about)

// esp tool index 
routes.get('/esp/index',espIndex);
//add new (GET & POST)

// select  by id 

// // update (GET & POST)


// // delete by ID


 module.exports = routes;