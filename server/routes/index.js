var express = require('express');
var router = express.Router();
var path = require('path');

//loads index.html on all calls

router.get('/*', function(req, res, next){
    var file = req.params[0] || '/views/index.html';
    res.sendFile(path.join(__dirname, '../public/', file));
});

//exports to server

module.exports = router;