const express = require('express');
const router = express.Router();
const db = require('../config/dbconfig.js');

router.get('/list', function (req, res) {

    let sql = 'SELECT * FROM userlogin';
    db.query(sql, function (err, data, fields) {
        if (err) throw err;
        res.json({
            status: 200,
            data: data,
            message: "Successfull"
        })
    })

});
router.post('/create', function (req, res) {

    res.json({
        message: 'First Express Api created successfully'
    });
});

module.exports = router; 