var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/nodejs');

var schema = new mongoose.Schema({
    nome: String,
    idade: int
    }, {collection: 'teste'}
);

module.exports = {
    Mongoose: mongoose, Schema: schema
}