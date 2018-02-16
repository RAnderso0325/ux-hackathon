require("dotenv").config();
var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var User = require("../models/user");
var Pet = require('../models/pet');
var request = require('request');

router.post('/search', function(req,res,next){
    console.log(req.body);
    let animal = req.body.animal;
    let b = req.body.breed;
    let br = b.split(' ');
    let breed = br.join('%20');
    let age = req.body.age;
    let size = req.body.size;
    let sex = req.body.sex;
    let zip = req.body.location;
    let petFindUrl = "http://api.petfinder.com/pet.find?location="+zip+"&age="+age+"&size="+size+"&sex="+sex+"&breed="+breed+"&format=json&key="+process.env.PET_API_KEY;
    console.log(petFindUrl);
    request(petFindUrl, function(error,response, body){
        if(!error && response.statusCode == 200){
            let dataObj = JSON.parse(body);
            let toSend = dataObj.petfinder.pets;
            res.json({allPets: toSend});
        }
        else{
            console.log(error, response);
        }
    });
});

router.post('/add', function(req,res,next){
    //let pet = JSON.parse(req.body.pet);
    console.log(req.body.pet);
    // Pet.create({name: name, description: description},function(err,pet){
        //if(err){
            //console.log(err)
        //}
        //res.send('success');
    // })
})

module.exports = router;