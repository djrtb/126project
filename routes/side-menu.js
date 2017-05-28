var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/side-menu', function(req, res, next) {
  res.render('side-menu', { title: 'Issues' });
});

module.exports = router;
