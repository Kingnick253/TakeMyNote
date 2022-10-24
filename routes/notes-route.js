const router = require('express').Router();
// requires fs to write file
const fs = require('fs');

let noteDB = require('../db/db.json');

// GET route to get the notes in the db folder
router.get('/', (req, res) =>{
    return res.json(noteDB);
});


router.post('/api/notes', (req, res)=>{
    let notes_db = fs.readFileSync('./db/db.json');
    notes_db = JSON.parse(notes_db);
    res.json(notes_db);

    let newNote = {
        title: req.body.title,
        text: req.body.text
    };

    console.log(newNote);

    notes_db.push(newNote);
    
    fs.writeFileSync('./db/db.json', JSON.stringify(notes_db));
    res.json(notes_db);
});




module.exports = router;