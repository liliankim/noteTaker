const express = require('express');
const path = require('path');
const api = require('./routes/index.js');

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
//we are creating this url (ex.--> api/hello.com)
app.use('/api', api);

//makes this the homepage route
app.use(express.static('public'));

app.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, './public/notes.html'))
)
//homepage is reflected by *asterisk
app.get('*', (req,res)=>
res.sendFile(path.join(__dirname, './public/index.html' ))
)

app.listen(PORT,()=>
console.log(`App listening at http://localhost:${PORT}`)
);