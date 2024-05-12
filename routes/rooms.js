const express = require('express');
const router = express.Router();

router.get('/rooms',(req,res)=>{
    res.send('Hello from Rooms');
})

module.exports = router