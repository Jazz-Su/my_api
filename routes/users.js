var express = require('express');
var router = express.Router();
var Residents = require('../models/Residents.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
	Residents.find(function (err, users) {
		if (err) return next (err);
		res.json(users);
	});
});

router.post('/', function(req, res, next) {
	Residents.create(req.body, function (err, post) {
		if (err) return next(err);
		res.json(post);
	});
});

router.get('/:id', function (req, res, next) {
	Residents.findById(req.params.id, function (err, post) {
		if (err) return next (err);
		res.json(post);
	} );
});

router.put('/:id', function (req, res, next) {
	Residents.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
		if (err) return next (err);
		res.json(post);
	});
});


router.delete('/:id', function (req, res, next) {
	Residents.findByIdAndRemove(req.params.id, req.body, function (err, post) {
		if (err) return next(err);
		res.json(post);
	});
});
module.exports = router;