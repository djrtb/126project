var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/pornography', function(req, res, next) {
  res.render('pornography', { title: 'Express' });
});

router.get('/vawc', function(req, res) {
  res.render('vawc', { title: 'VAWC' });
});

router.get('/trafficking', function(req, res) {
  res.render('trafficking', { title: 'Trafficking' });
});

router.get('/scandal', function(req, res) {
  res.render('scandal', { title: 'Scandal' });
});

module.exports = router;
