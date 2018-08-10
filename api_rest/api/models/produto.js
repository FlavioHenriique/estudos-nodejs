const mongoose = require('mongoose');

const produtoSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nome: String,
    preco: Number,
});

module.exports = mongoose.model('Produto',produtoSchema);