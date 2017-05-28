var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/sex_trafficking', function(req, res, next) {
  res.render('sextrafficking', { title: 'Sex Trafficking' });
});

module.exports = router;
