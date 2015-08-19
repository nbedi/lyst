var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "24 hours", update: "daily", javascript: "24hour.js" });
});

router.get('/7days', function(req, res, next) {
  res.render('index', { title: "7 days", update: "daily", javascript: "7day.js" });
});

router.get('/30days', function(req, res, next) {
  res.render('index', { title: "30 days", update: "daily", javascript: "30day.js" });
});

router.get('/1year', function(req, res, next) {
  res.render('index', { title: "1 year", update: "monthly", javascript: "1year.js" });
});

router.get('/custom', function(req, res, next) {
  res.render('index', { title: "Custom query", update: "daily", javascript: "custom.js" });
});

module.exports = router;
