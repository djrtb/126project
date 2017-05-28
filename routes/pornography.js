var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/pornography', function(req, res, next) {
  res.render('pornography', { title: 'Express' });
});

module.exports = router;
