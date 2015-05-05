var express = require('express');
var router = express.Router();


router.get('/about', function (req, res) {
	res.render('about', {title: 'About'});
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Black Wave', apichoice: 'chosenPriority' });
});





module.exports = router;


