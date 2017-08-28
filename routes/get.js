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


//     res.send('get request handled succesfully!');
//     data.firstName=req.body.firstName;
//     data.lastName=req.body.lastName;
//     data.age=req.body.age;
//     data.save((err,userData)=>{
//     	if(err){
//     		console.log("not found");
//     	}else{
//     		res.send(userData);
//     	}
//     })
// });

});

module.exports = router;