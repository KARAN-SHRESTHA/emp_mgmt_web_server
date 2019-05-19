const Express = require('express');

const express = new Express();

express.get('/api/login',(req, res)=>{
    res.json({
        status:"OK"
    })
})

express.listen(4000, 'localhost',()=>{
    console.log(`Server running in port 4000`);
})