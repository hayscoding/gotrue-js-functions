var express = require('express');
var router = express.Router();

var gotrueAPI = require('../utils/gotrueAPI')

/* GET home page. */
router.get('/', function(req, res, next) {
	gotrueAPI.test();
  	res.render('index', { title: 'Express' });
});

module.exports = router;
