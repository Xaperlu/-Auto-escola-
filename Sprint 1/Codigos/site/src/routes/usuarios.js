var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
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

router.post("/cadastrarHardware", function (req, res) {
    usuarioController.cadastrarHardware(req, res);
});

module.exports = router;