const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const db = require('./public/db');

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Origin,X-Requested-With,Accept,Authorization');
    if(req.method === 'OPTIONS'){
            res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,DELETE,GET');
            res.status(200).json({});
    }
    next();
});

app.get('/', function(req, res){
  
    res.sendFile(__dirname + '/public/index.html');
});

const usuarioRouter = require('./config/routes/usuario');

app.use('/usuario',usuarioRouter);



module.exports = app;