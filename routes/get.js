const express = require('express');
const Users = require('../model/User');
const router = express.Router();


router.get('/home', function(req, res) {

	Users.find((err,data)=>{

		if(err){
			console.log("not found");
		}else{
			res.json(data);
		}
	});



});

module.exports = router;