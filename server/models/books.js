/*
 File name: COMP229-W2022-MidTerm-301176284
 Author: Suvarn Badkas
 Student ID: 301176284  
 Web app nmae: https://comp229w2022-midterm-301176284.herokuapp.com/
 */

let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
