
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://FlavioHenriique:' + process.env.MONGO_ATLAS_PW + '@apirest-shard-00-00-0x1ae.mongodb.net:27017,apirest-shard-00-01-0x1ae.mongodb.net:27017,apirest-shard-00-02-0x1ae.mongodb.net:27017/test?ssl=true&replicaSet=APIREST-shard-0&authSource=admin',{}
);

const produtoRoutes = require('./api/routes/produtos');
const encomendaRoutes = require('./api/routes/encomendas');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

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
    res.sendFile(__dirname + '/index.html');
});


app.use('/produtos',produtoRoutes);
app.use('/encomendas',encomendaRoutes);
/*
app.use((req,res,next)=>{
    const error = new Error('not found');
    error.status=404;
    next(error);
});

app.use((error,req,res,next)=>{
    res.status(error.status ||  500);
    res.json({
       error:{ message: error.message}
    });
});
*/
module.exports = app;
