const router = require('express').Router();
const db = require('../db/db.json')
//endpoint
//this line is our endpoint, next line does our get request
router.get('/',(req,res)=>{
//this is what gets 'served' or returned
res.json(db)
})

module.exports = router
