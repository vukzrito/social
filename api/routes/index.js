var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let posts = require('../../data/posts.json');
  res.send(posts);
});

module.exports = router;
