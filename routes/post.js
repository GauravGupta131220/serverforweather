const express = require('express');
const Users = require('../model/User');
const router = express.Router();



router.post('/', function(req, res) {

    let userData = new Users();
    //res.send('post request handled succesfully!');
    userData.firstName = req.body.firstName;
    userData.lastName = req.body.lastName;
    userData.age = req.body.age;
    userData.save((err, Data) => {

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