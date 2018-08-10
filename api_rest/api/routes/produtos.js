const express = require('express');

const router  = express.Router();
const mongoose = require('mongoose');
const Produto = require('../models/produto');

router.get('/',(req,res,next) =>{
    Produto.find().exec().then(docs =>{
        console.log(docs);
        
        if(docs.length >=0){

            res.status(200).json(docs);
    
        }else{
            res.status(404).json({message: "Nenhum produto cadastrado"});
        }
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({
            error: err
        });
    });   
});


router.post('/',(req,res,next) =>{
    
    const produto = new Produto({
        _id: new mongoose.Types.ObjectId(),
        nome: req.body.nome,
        preco: req.body.preco
    });

    produto.save().then(result =>{
        console.log(result);
    });

    res.status(201).json({
        message: "post  produtos",
        produtoCriado: produto
    });
});

router.get('/:idProduto',(req,res,next)=>{
    const id = req.params.idProduto;
    Produto.findById(id).exec().then(doc =>{
        console.log(doc);
        res.status(200).json({doc});
    })
    .catch(err => {
        console.log (err);
        res.status(500).json({error: err});
    });
});

router.patch('/:idProduto',(req,res,next)=>{
    const updateOps = {};
    
    const id = req.params.idProduto;
    for(const ops of req.body){
        updateOps[ops.propName] = ops.value;
    }

    Produto.update({_id:id},{$set: updateOps }).exec().then(result =>{
        console.log(result);
        res.status(200).json({result});
    }).catch(err =>{
        console.log(err);
        res.status(500).json({error: err});
    });
});

router.delete('/:idProduto',(req,res,next)=>{
    
    const id = req.params.idProduto;

    Produto.remove({_id: id}).exec().then(result=>{
        res.status(200).json({result});
    }).catch(err =>{
        console.log(err);
        res.status(500).json({error : err});
    });
});



module.exports = router;