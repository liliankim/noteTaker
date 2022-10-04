const express = require('express');

const notesRouter = require('./notes');

const app = express();
//this combines, notesRouter is calling the .notes files
app.use('/notes', notesRouter);

module.exports = app;