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

function cadastrarHardware(req, res){
    const cliente = req.body.cliente
    const unidade = req.body.unidade
    const numeroSerie = req.body.numeroSerie
    const so = req.body.so
    const capacidadeCpu = req.body.cpu
    const capacidadeDisco = req.body.disco
    const capacidadeMemoria = req.body.memoria
    const cpuModelo = req.body.cpuModelo
    const discoModelo = req.body.discoModelo
    const memoriaModelo = req.body.memoriaModelo

    usuarioModel.cadastrarHardware(cliente, unidade, numeroSerie, so, capacidadeCpu, capacidadeDisco, capacidadeMemoria, cpuModelo, discoModelo, memoriaModelo)
        .then(
            function(resultado){
                res.json(resultado)
            }
        )
}

function cadastrarUnidade(req, res){
    const nome = req.body.nome
    const telefone = req.body.telefone
    const cep = req.body.cep
    const logradouro = req.body.logradouro
    const bairro = req.body.bairro
    const numero = req.body.numero
    const usuario = req.body.usuario

    usuarioModel.cadastrarUnidade(nome, telefone, cep, logradouro, bairro, numero, usuario)
        .then(
            function(resultado){
                res.json(resultado)
            }
        )
}

function cadastrarFuncionario(req, res){
    const unidade = req.body.unidade
    const idCliente = req.body.idCliente
    const nome = req.body.nome
    const cargo = req.body.cargo
    const data = req.body.data
    const celular = req.body.celular
    const sobrenome = req.body.sobrenome
    const email = req.body.email
    const senha = req.body.senha
    const nivel = req.body.nivel

    usuarioModel.cadastrarFuncionario(unidade, idCliente, nome, cargo, data, celular, sobrenome, email, senha, nivel)
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
    const fkUsuario = req.body.usuario;

    usuarioModel.cadastrarUnidade(fkUsuario, nome, telefone, cep, bairro, numero, logradouro)
        .then(
            function(resultado){
                res.json(resultado)
            }
        )
}


function salvar(req, res) {
    var nome = req.body.nome;
    var email = req.body.email;
    var senha = req.body.senha;
    var usuario = req.body.usuario;
    var cnpj = req.body.cnpj;

    usuarioModel.salvar(nome, email, senha, usuario, cnpj)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
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

function pegarInfoDash(req, res){
    const idCliente = req.params.idCliente;

    usuarioModel.pegarInfoDash(idCliente)
        .then(
            function(resultado){
                res.json(resultado)
            }
        )
}

function obterDadosDash(req, res){
    const idHardware = req.params.idHardware;

    usuarioModel.obterDadosDash(idHardware)
        .then(
            function(resultado){
                res.json(resultado)
            }
        )
}

function atualizarGrafico(req, res){
    const idHardware = req.params.idHardware;

    usuarioModel.atualizarGrafico(idHardware)
        .then(
            function(resultado){
                res.json(resultado)
            }
        )
}

function obterDadosRam(req, res){
    const idHardware = req.params.idHardware;

    usuarioModel.obterDadosRam(idHardware)
        .then(
            function(resultado){
                res.json(resultado)
            }
        )
}

function atualizarGraficoRam(req, res){
    const idHardware = req.params.idHardware;

    usuarioModel.atualizarGraficoRam(idHardware)
        .then(
            function(resultado){
                res.json(resultado)
            }
        )
}

function obterDadosDisco(req, res){
    const idHardware = req.params.idHardware;

    usuarioModel.obterDadosDisco(idHardware)
        .then(
            function(resultado){
                res.json(resultado)
            }
        )
}

function atualizarGraficoDisco(req, res){
    const idHardware = req.params.idHardware;

    usuarioModel.atualizarGraficoDisco(idHardware)
        .then(
            function(resultado){
                res.json(resultado)
            }
        )
}

function obterDadosRede(req, res){
    const idHardware = req.params.idHardware;

    usuarioModel.obterDadosRede(idHardware)
        .then(
            function(resultado){
                res.json(resultado)
            }
        )
}

function atualizarGraficoRede(req, res){
    const idHardware = req.params.idHardware;

    usuarioModel.atualizarGraficoRede(idHardware)
        .then(
            function(resultado){
                res.json(resultado)
            }
        )
}

function pegarDadosGraficosRosca(req, res){
    const idHardware = req.params.idHardware;

    usuarioModel.pegarDadosGraficosRosca(idHardware)
        .then(
            function(resultado){
                res.json(resultado)
            }
        )
}

function editarUnidade(req, res){
    const unidade = req.body.unidade
    const telefone = req.body.telefone
    const nome = req.body.nome
    const cep = req.body.cep
    const logradouro = req.body.logradouro
    const bairro = req.body.bairro
    const numero = req.body.numero

    usuarioModel.editarUnidade(unidade, telefone, nome, cep, logradouro, bairro, numero)
        .then(
            function(resultado){
                res.json(resultado)
            }
        )
}

function excluirUnidade(req, res){
    const unidade = req.body.unidade

    usuarioModel.excluirUnidade(unidade)
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
   cadastrarHardware,
   cadastrarUnidade,
   cadastrarFuncionario,
   pegarInfoDash,
   obterDadosDash,
   atualizarGrafico,
   atualizarGraficoRam,
   obterDadosRam,
   atualizarGraficoDisco,
   obterDadosDisco,
   atualizarGraficoRede,
   obterDadosRede,
   pegarDadosGraficosRosca,
   editarUnidade,
   excluirUnidade
}