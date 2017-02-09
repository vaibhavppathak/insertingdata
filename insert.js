var mongoose = require('mongoose'); //require mongoose native drivers
var url = 'mongodb://localhost/vaibhav'; //connection url of the database
var conn = mongoose.connect(url); //use the connect method to conenct to the server

var post_schema = mongoose.Schema({}, {
    collection: 'abc',
    strict: true,
    name: String,
    dob: Number,
    gender: String,
});

var post = conn.model('post', post_schema);
var conn = mongoose.createConnection(url, function(error, db) {
    if (error) {
        console.log("Unabel to connect to mongo server ERROR");
    } else {
        console.log("Connection succesfull");
        var detail = new post({
            "name": "vaibhavp",
            "dob": "qwerty",
            "gender": "male",
        });

        detail.save(function(err, records) {
            if (err) {
                throw error;
            } else {
                console.log(records)
            }
        });
    }
});