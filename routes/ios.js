var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'iOS' });
});
    
router.post('/validation', function (req, res) {
    res.send('POST request to homepage');
});

module.exports = router;
