const express = require('express');
const Weather = require('../model/User');
const router = express.Router();



router.post('/', function(req, res) {

    let weatherData = new Weather();
    //res.send('post request handled succesfully!');
    weatherData.city = req.body.city;
    weatherData.date = req.body.date;
    weatherData.maxtemp = req.body.maxtemp;
    weatherData.mintemp = req.body.mintemp;
    weatherData.save((err, Data) => {

        if (err) {
            console.log("not found");
            return res.send('error');
        } else {
        	console.log(Data);
            res.json(Data);
        }
    })
});

module.exports = router;