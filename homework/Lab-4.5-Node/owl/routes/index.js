var express = require('express');
var router = express.Router();
var request = require('request');
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
    //   res.render('index', { title: 'Express' });
    res.sendFile('weather.html', { root: 'public' });
});

router.get('/getcity', function(req, res, next) {
    fs.readFile(__dirname + '/cities.dat.txt', function(err, data) {
        if (err) throw err;
        var cities = data.toString().split("\n");
        var myRe = new RegExp("^" + req.query.q);
        var jsonresult = [];
        for (var i = 0; i < cities.length; i++) {
            var result = cities[i].search(myRe);
            if (result != -1) {
                jsonresult.push({city:cities[i]});
            }
        }
        res.status(200).json(jsonresult);
    });
});

module.exports = router;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/owl', function(req, res, next) {
    var url = "https://owlbot.info/api/v1/dictionary/";
    console.log("query ", req.query);
    url += req.query['q'];
    url += "?format=json";
    request(url).pipe(res);
});

module.exports = router;
