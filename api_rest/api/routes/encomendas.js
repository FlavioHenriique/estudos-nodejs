const express = require('express');

const router  = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message: "encomendas enviadas"
    });
});


router.post('/',(req,res,next)=>{
    const encomenda = {
        idProduto : req.body.idProduto,
        quantidade: req.body.quantidade
    };
    res.status(201).json({
        message: "encomendas criadas",
        encomenda: encomenda
    });
});


router.get('/:idEncomenda',(req,res,next)=>{
    res.status(200).json({
        message: "encomendas enviadas",
        id: req.params.idEncomenda
    });
});


router.delete('/:idEncomenda',(req,res,next)=>{
    res.status(200).json({
        message: "encomenda deletada",
        id: req.params.idEncomenda
    });
});

module.exports = router;