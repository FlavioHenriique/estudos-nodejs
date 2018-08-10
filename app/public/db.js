const banco = require('pg');
var conexao = "postgres://postgres:flavio22@localhost:5432/nodejs";

var cliente = new banco.Client(conexao);
cliente.connect();


module.exports = cliente;