var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://root:root@ds149431.mlab.com:49431/day_tracker', ['days']);

router.get('/days', function(req, res, next) {
	db.day_tracker.find(function(err, days) {
		if(err) {
			res.send(err);
		}
		res.json(days);
	});
});

router.post('/day', function(req, res, next){
    var day = req.body;

        db.day_tracker.save(day, function(err, day){
            if(err){
                res.send(err);
            }
            res.json(day);
        });
});

module.exports = router;