var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/footer', function(req, res, next) {
  res.render('footer', { title: 'Express' });
});

module.exports = router;
