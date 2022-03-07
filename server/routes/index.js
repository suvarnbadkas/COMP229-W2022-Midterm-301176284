/*
 File name: COMP229-W2022-MidTerm-301176284
 Author: Suvarn Badkas
 Student ID: 301176284  
 Web app nmae: https://comp229w2022-midterm-301176284.herokuapp.com/
 */
// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
   });
});

module.exports = router;
