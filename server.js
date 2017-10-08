const express = require('express')
const app = express()
var bodyParser = require('body-parser')
var studentApi = require('./api/student.api');
var MongoClient = require('mongodb').MongoClient

var url = 'mongodb://localhost:27017/StudentManagementDB';


app.use(bodyParser.urlencoded({
    extended: false
}))

// parse application/json
app.use(bodyParser.json())


app.use('/', function(req, res, next) {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Content-Type');
    next();
});
MongoClient.connect(url, function (err, db) {

    studentApi(app, db);

})


app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})