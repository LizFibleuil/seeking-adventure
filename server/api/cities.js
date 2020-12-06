var express = require('express');
var Cities = require('../models/cities');

var citiesRouter = express.Router();

citiesRouter.get('/:continent/:typeOfExperience',(req,res) => {
    var continent = req.params.continent;
    var typeOfExperience = req.params.typeOfExperience;
    Cities.getAll(continent,typeOfExperience,(err,cities) => {
        if(err){
            return res.json(err);
        }
        return res.json(cities);
    });
});

citiesRouter.get('/:cityName',(req,res) => {
    var cityName = req.params.cityName;
    Cities.getPlaces(cityName,(err,places) => {
        if(err){
            return res.json(err);
        }
        return res.json(places);
    });
});

citiesRouter.post('/',(req,res) => {
    var cityName = req.body.city;
    Cities.insert(cityName, (err, dbResult) => {
        if(err){
            return res.json(err);
        }
        return res.json(dbResult);
    });
});

module.exports = citiesRouter;