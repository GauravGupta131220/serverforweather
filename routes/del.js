const express = require('express');
const Users = require('../model/User');
const router = express.Router();


router.delete('/:id', function(req, res) {
    Users.remove({_id:req.params.id},function(err,data){

    	if(err){
    			res.json(err);
    	}else{
    		res.json(data);
    	}
    })
});


module.exports = router;