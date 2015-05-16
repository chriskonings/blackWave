var express = require('express');
var router  = express.Router();
var fs      = require('fs');

/* GET home page. */
router.get('/', function(req, res) {
  console.log('QUERY: ' + req.query);

  if (req.query.skill) {
    readJSONFile( __dirname + '/../data/skills.json', function (err, json) {
      if(err) { throw err; }
      res.send(json);
    });
  }
  else if (req.query.role) {
    readJSONFile( __dirname + '/../data/role.json', function (err, json) {
      if(err) { throw err; }
      res.send(json);
    });
  }

  else {
   res.send('Resource not found.');
 }

});

// Reads JSON file from file system
function readJSONFile(filename, callback) {
  fs.readFile(filename, function (err, data) {
    if(err) {
      callback(err);
      return;
    }
    try {
      callback(null, JSON.parse(data));
    } catch(exception) {
      callback(exception);
    }
  });
}

module.exports = router;
