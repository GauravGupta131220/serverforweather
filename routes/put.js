var express = require('express');
var router = express.Router();
const Users = require('../model/User');



router.put('/user/:id', function(req, res) {

	Users.update({_id:req.params.id},
	{$set:
		{firstName: req.body.firstName,
		lastName: req.body.lastName,
		age: req.body.age}},
		{upsert: true},
		function(err,newUsers){
			if(err){
				console.log("error occured");
			} else{
				console.log(newUsers);
				res.json(newUsers);
			}

	}
	);
    //res.send('put request handled successfully');
});



module.exports = router;	