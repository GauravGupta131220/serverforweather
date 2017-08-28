const express = require('express');
const Users = require('../model/User');
const router = express.Router();



router.post('/admin', function(req, res) {

    let userData = new Users();
    //res.send('post request handled succesfully!');
    userData.firstName = req.body.firstName;
    userData.lastName = req.body.lastName;
    userData.age = req.body.age;
    userData.save((err, Data) => {
        if (err) {
            //console.log("not found");
            res.send('error');
        } else {
        	//console.log(Data);
            res.send(Data);
        }
    })
});

module.exports = router;