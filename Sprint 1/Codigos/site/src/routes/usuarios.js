var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
});

router.post("/cadastrarUnidade", function (req, res) {
    usuarioController.cadastrarUnidade(req, res);
});

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/salvar", function (req, res) {
    usuarioController.salvar(req, res);
});

router.get("/pegarInfoBanco/:idCliente", function (req, res) {
    usuarioController.pegarInfoBanco(req, res);
});

router.get("/pegarInfoDash/:idCliente", function (req, res) {
    usuarioController.pegarInfoDash(req, res);
});

router.post("/cadastrarHardware", function (req, res) {
    usuarioController.cadastrarHardware(req, res);
});

router.post("/cadastrarUnidade", function (req, res) {
    usuarioController.cadastrarUnidade(req, res);
});

router.post("/cadastrarFuncionario", function (req, res) {
    usuarioController.cadastrarFuncionario(req, res);
});

router.get("/obterDadosDash/:idHardware", function (req, res) {
    usuarioController.obterDadosDash(req, res);
});

router.get("/atualizarGrafico/:idHardware", function (req, res) {
    usuarioController.atualizarGrafico(req, res);
});

router.get("/obterDadosRam/:idHardware", function (req, res) {
    usuarioController.obterDadosRam(req, res);
});

router.get("/atualizarGraficoRam/:idHardware", function (req, res) {
    usuarioController.atualizarGraficoRam(req, res);
});

router.get("/obterDadosDisco/:idHardware", function (req, res) {
    usuarioController.obterDadosDisco(req, res);
});

router.get("/atualizarGraficoDisco/:idHardware", function (req, res) {
    usuarioController.atualizarGraficoDisco(req, res);
});

router.get("/obterDadosRede/:idHardware", function (req, res) {
    usuarioController.obterDadosRede(req, res);
});

router.get("/atualizarGraficoRede/:idHardware", function (req, res) {
    usuarioController.atualizarGraficoRede(req, res);
});

router.get("/pegarDadosGraficosRosca/:idHardware", function (req, res) {
    usuarioController.pegarDadosGraficosRosca(req, res);
});

router.put("/editarUnidade", function (req, res) {
    usuarioController.editarUnidade(req, res);
});

router.delete("/excluirUnidade", function (req, res) {
    usuarioController.excluirUnidade(req, res);
});

module.exports = router;