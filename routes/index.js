var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/add', function(req, res, next) {
  let number1 = req.body.number1;
  let number2 = req.body.number2;
  let sum = number1 + number2;
  return res.send({"sum": sum});
});

module.exports = router;
