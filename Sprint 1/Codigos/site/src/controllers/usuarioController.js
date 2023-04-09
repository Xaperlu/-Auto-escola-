var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function cadastrar(req, res){
    const nome = req.body.nome;
    const cnpj = req.body.cnpj;
    const email = req.body.email;
    const senha = req.body.senha;
    const nivel = req.body.nivel;

    usuarioModel.cadastrar(nome, cnpj, email, senha, nivel)
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

function cadastrarUnidade(req, res){
    const nome = req.body.nome;
    const telefone = req.body.telefone;
    const logradouro = req.body.logradouro;
    const cep = req.body.cep;
    const bairro = req.body.bairro;
    const numero = req.body.numero;
    const fkUsuario = req.body.fkUsuario;

    usuarioModel.cadastrarUnidade(fkUsuario, nome, telefone, cep, bairro, numero, logradouro)
        .then(
            function(resultado){
                res.json(resultado)
            }
        )
}


function salvar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var id = req.body.idServer;
    var cnpj = req.body.cnpjServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (id == undefined) {
        res.status(400).send("null");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.salvar(nome, email, senha, id, cnpj)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


function pegarInfoBanco(req, res){
    const idCliente = req.params.idCliente;

    usuarioModel.pegarInfoBanco(idCliente)
        .then(
            function(resultado){
                res.json(resultado)
            }
        )
}

module.exports = {
   cadastrar,
   autenticar,
   salvar,
   pegarInfoBanco,
   cadastrarUnidade
}