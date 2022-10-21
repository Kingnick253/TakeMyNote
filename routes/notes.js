const router = require('express').Router();
const fs = require('fs');
let noteDB = require('../db/db.json');


router.get('/', (req,res) =>{
    return res.json(noteDB);
});







module.exports = router;