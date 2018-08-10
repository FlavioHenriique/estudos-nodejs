var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/new', function(req, res, next) {
  res.render('new', { title: 'novo' });
});


router.post('/new', function(req, res, next) {
  var nome = req.body.nome;
  var idade= req.body.idade;
  
  require("../db").save(nome,idade,function(){
    res.redirect("/?nome="+ nome);
  })
});

router.get('/usuarios',function(req,res){
  var db = require('../db');
  var users = db.Mongoose.model('teste',db.Schema, 'teste');
  users.find({}).lean().exec(
    function (e,docs){
      res.render('usuarios',{'usuarios':docs});
    });
});

module.exports = router;
