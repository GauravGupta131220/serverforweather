const express = require('express');
const Users = require('../model/User');
const router = express.Router();


router.delete('/', function(req, res) {
    res.send('delete request handled succesfully!');
});


module.exports = router;