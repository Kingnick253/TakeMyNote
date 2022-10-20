//require express
const express = require("express");
const path = require("path");
const fs = require('fs');
const app = express();

const PORT = process.env.PORT || 3001;



app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.send("Hello world!")
});

app.listen( PORT, () => {
    console.log('Server UP!');

});

app.get("/", (req, res) =>{
    res.sendFile(path.join__durname,'/public/notes.html')

});
//require the 'db.json" file and store it in 'Notes'

//Use express to intialize the 'app' server

//GET /notes should return the notes.html file

//GET * should return the index.html file.

//GET /api/notes should read the db.json file

    // res. json()

//POST /api/notes should receive a new note to save on the request body, add add it to the db.json file, and then return the new note to the client.

        // fs.writeFile


//Use the 'app' to listen to a specific PORT(3001) will need to change when i deploy to heroku


