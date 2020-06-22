var express = require('express');
var router = express.Router();
//目前不用这玩意，暂时留着
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
