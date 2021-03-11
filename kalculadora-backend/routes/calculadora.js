var express = require('express');
var router = express.Router();

router.get('/soma', function(req, res, next) {
    const op1 = parseInt(req.query.op1);
    const op2 = parseInt(req.query.op2);
    return res.json({ resultado: op1 + op2 });
});

module.exports = router;
