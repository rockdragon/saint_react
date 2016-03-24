var express = require('express');
var router = express.Router();
var DB = require('../DB/messages');

router.get('/message', function(req, res) {
    res.json(DB.last10());
});

router.post('/message', function(req, res) {
    global.debug(req.body);

    if(DB.save(req.body.name, req.body.message) > 0){
        return res.json(DB.last10());
    } else {
        return res.status(400).send('Bad Request');
    }
});

module.exports = router;
