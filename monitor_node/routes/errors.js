var express = require('express');
var router = express.Router();
const {
  getList,
  newError
} = require('../controller/errors')
const { SuccessModel, ErrorModel } = require('../model/resModel')
/* GET home page. */
router.get('/list', function(req, res, next) {
  const result = getList()
    return result.then(listData => {
      res.json(
        new SuccessModel(listData)
      )
    })
});
router.post('/new', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  res.header('Access-Control-Allow-Methods', '*')
  res.header('Content-Type', 'application/json;charset=utf-8')
  const result = newError(req.body)
  return result.then(data => {
    res.json(
        new SuccessModel(data)
    )
  })
});

module.exports = router;
