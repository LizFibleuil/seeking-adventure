const request = require('request-promise');

const API_KEY = 'e3c3f500bb51bd25cd9c0ede3b492b4f';

class Weather {
    static getByCity(city,callback){
        request({
            uri: `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=imperial`,
            json: true,
        })
        .then((res) => {
            callback(res);
        })
        .catch((err) => {
            console.log(err);
            callback({ error: 'Could not reach OpenWeatherMap API.' });
        });
    }
}

module.exports = Weather;