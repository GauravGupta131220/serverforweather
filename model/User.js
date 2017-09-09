const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const weatherDataSchema = new Schema({

    city: String,
    date: String,
    maxtemp: String,
    mintemp: String

});

var Weather = mongoose.model('weatherCollections', weatherDataSchema);

//var user1 = new Users({ firstName: 'gaurav', lastName: 'gupta', age: 22 });

module.exports = Weather;