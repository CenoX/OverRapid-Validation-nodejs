var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'iOS' });
});
    
router.all('/validation', function (req, res) {

  let isSandbox = req.query.sandbox ? true : false

  if (req.method == 'GET') {
    res.status(500).json({
      error: "No get request!",
      isSandbox: isSandbox
    })
    return;
  }

  if (req.method != 'POST') {
    res.status(500).json({
      error: "Get away!",
      isSandbox: isSandbox
    })
    return;
  }

  if (req.get('x-overrapid-version') == undefined) {
    res.status(500).json({
      error: "This client is not OverRapid client!",
      isSandbox: isSandbox
    })
  } else {
    res.send('Proceed');
    console.log(req.body) 
    console.log(req.headers)  
  }
});

module.exports = router;
