var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/data', function(req, res) {
    return res.json([
        {"author": "Pete Hunt", "text": "This is one comment"},
        {"author": "Jordan Walke", "text": "This is *another* comment"}
    ]);
});

module.exports = router;
