var express = require('express');
var router = express.Router();
const Users = require('../model/User');

router.put('/user', function(req, res) {

    res.send('put request handled successfully');

});



module.exports = router;	