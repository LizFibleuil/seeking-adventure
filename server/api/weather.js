var express = require('express');
var Weather = require('../models/weather');

var weatherRouter = express.Router();

weatherRouter.get('/:city',(req,res) => {
    var city = req.params.city;

    Weather.getByCity(city, (err,weather) => {
        if(err){
            return res.json(err);
        }
        return res.json(weather);
    });
});

module.exports = weatherRouter;