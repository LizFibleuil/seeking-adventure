var express = require('express');
var Cities = require('../models/cities');

var citiesRouter = express.Router();

citiesRouter.get('/',(req,res) => {
    Cities.getAll((err,cities) => {
        if(err){
            return res.json(err);
        }
        return res.json(cities);
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