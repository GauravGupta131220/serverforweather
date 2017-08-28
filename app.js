const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
//const connect = mongoose.connect('mongodb://localhost/user');
var db='mongodb://localhost/myData'





//const delete=require('./routes/delete')
const get = require('./routes/get')
const post = require('./routes/post')
const put = require('./routes/put')
const del = require('./routes/del')
const app = express()




app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'));
app.use(cookieParser());


app.use('/index', get);
app.use('/admin', post);
app.use('/logout', del);
app.use('/user', put);


app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;

});

app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


app.listen(3000);
module.exports = app;