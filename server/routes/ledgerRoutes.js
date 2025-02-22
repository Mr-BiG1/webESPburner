const express = require('express');
const routes = express.Router();
const {home, about} = require('../controller/ledgerConreoller');
//home 
routes.get('/',home);

// about
routes.get('/about',about)

// get all transaction


//add new transaction(GET & POST)


//->to get latest balance 
// ->calculate new balance 
// -> add  transaction  

// select transaction by id 

// // update transaction(GET & POST)


// // delete by ID


 module.exports = routes;