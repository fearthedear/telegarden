var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Telegarden' });
});

router.get('/livestream', function (req, res) {
  res.render('livestream', { flight: ''});
});

module.exports = router;
