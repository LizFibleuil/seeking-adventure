const db =  require('../database');

class Cities {
    static getAll(continent,typeOfExperience,callback){
        db.query(`SELECT DISTINCT city_name FROM cities WHERE continent=($1) AND type_of_experience=($2)`,[continent,typeOfExperience],(err,res) => {
            if(err.error){
                return callback(err);
            }
            callback(res);
        });
    }
    static getPlaces(cityName,callback){
        db.query(`SELECT places, places_description FROM cities WHERE city_name=($1)`,[cityName],(err,res) => {
            if(err.error){
                return callback(err);
            }
            callback(res);
        });
    }
    
    static insert(city,callback){
        db.query('INSERT INTO cities (city_name) VALUES ($1)',[city], (err,res) => {
            if(err.error){
                return callback(err);
            }
            callback(res);
        });
    }
}

module.exports = Cities;