const router = require('express').Router();
const notesR = require('./notes-route');
const htmlR = require('./html-route');

router.use('/api/notes', notesR);

router.use('/', htmlR);

module.exports = router;