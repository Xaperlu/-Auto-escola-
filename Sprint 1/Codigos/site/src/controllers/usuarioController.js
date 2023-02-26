var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function cadastrar(req, res){
    const nome = req.body.nome;
    const cnpj = req.body.cnpj;
    const email = req.body.email;
    const senha = req.body.senha;

    usuarioModel.cadastrar(nome, cnpj, email, senha)
        .then(
            function(resultado){
                res.json(resultado)
            }
        )
}

function autenticar(req, res){
    const email = req.body.email;
    const senha = req.body.senha;

    usuarioModel.autenticar(email, senha)
        .then(
            function(resultado){
                res.json(resultado)
            }
        )
}

module.exports = {
   cadastrar,
   autenticar
}