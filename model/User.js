const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

    firstName: String,
    lastName: String,
    age: Number

});

var Users = mongoose.model('Users', userSchema);

//var user1 = new Users({ firstName: 'gaurav', lastName: 'gupta', age: 22 });

module.exports = Users;