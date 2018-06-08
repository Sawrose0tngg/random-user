var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  	res.render('admin', {
  		show: 'adduser'
  	});
});

router.get('/show', function(req, res, next) {
  	res.render('admin', {
  		show: 'viewuser'
  	});
});



module.exports = router;
