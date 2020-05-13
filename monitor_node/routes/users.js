var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  const { username, password } = req.body
  res.json({
    data: {
      username,
      password
    }
  })
});

module.exports = router;
