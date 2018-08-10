const express = require('express');
const router  = express.Router();
const pg = require('../../public/db');

router.post('/',(req,res,next)=>{
    
    pg.query("INSERT INTO Usuario (nome,idade) VALUES ('"+req.body.nome+"',"+req.body.idade+")",
    (err,result)=>{
        res.send(200).json({message:"tudo de boa"});
    });
});

module.exports = router;