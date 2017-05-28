var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/pornography', function(req, res, next) {
  res.render('pornography', { title: 'Express' });
});

module.exports = router;
