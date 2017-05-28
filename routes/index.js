var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/trafficking', function(req, res, next) {
  res.render('trafficking', { title: 'Sex Trafficking' });
});

module.exports = router;
