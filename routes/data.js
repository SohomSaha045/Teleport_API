const express = require('express');
const router = express.Router();

router.get('/upload',(req,res)=>{
    res.send('Hello from Upload');
})

module.exports = router