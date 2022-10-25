const router = require('express').Router();
// requires fs to write file
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
let noteDB = require('../db/db.json');

// GET route to get the notes in the db folder
router.get('/', (req, res) =>{
    return res.json(noteDB);
});


router.post('/', (req, res)=>{

const {title, text} = req.body;
    if(title && text){
    let newNote = {
        id: uuidv4(),
        title: req.body.title,
        text: req.body.text
    };
    
    console.log(newNote);

    noteDB.push(newNote);
    
    fs.writeFileSync('../db/db.json', JSON.stringify(noteDB));
    res.json(noteDB);
}
});




module.exports = router;