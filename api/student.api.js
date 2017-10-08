var student = function (app, db) {
   
    app.get('/api/student', function (req, res) {
        db.collection('student').find().toArray(function (err, docs) {
            res.send(docs);
        })
    })

    app.post('/api/student', function (req, res) {
        console.log(req.body);
        db.collection('student').insert(req.body, function (err, r) {
            console.log(r);
            res.send(r);
        })
    });

}

module.exports = student;