require("dotenv").config();
var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var User = require("../models/user");
var request = require('request');

router.get('/search', function(req,res,next){
    let zip = 98105;
    let petFindUrl = "http://api.petfinder.com/pet.find?format=json&key="+process.env.PET_API_KEY+"&location="+zip+"&count=5";
    request(petFindUrl, function(error,response, body){
        if(!error && response.statusCode == 200){
            var dataObj = JSON.parse(body);
            var toSend = dataObj.petfinder.pets;
            res.json({allPets: toSend});
        }
        else{
            console.log(error, response);
        }
    });
});

module.exports = router;