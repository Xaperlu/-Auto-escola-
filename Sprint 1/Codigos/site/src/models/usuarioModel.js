var database = require("../database/config")

function cadastrar(nome, cnpj, email, senha, nivel){
    let instrucao = `
        exec inserir_cliente '${email}', '${senha}', ${nivel}, '${nome}', '${cnpj}';
    `
    return database.executar(instrucao)
}

function cadastrarHardware(cliente, unidade, numeroSerie, so, capacidadeCpu, capacidadeDisco, capacidadeMemoria, cpuModelo, discoModelo, memoriaModelo){
    let instrucao = `
    exec inserir_hardware ${cliente}, ${unidade}, '${numeroSerie}', '${so}', '${cpuModelo}', '${discoModelo}', '${memoriaModelo}', '${capacidadeCpu}', '${capacidadeDisco}', '${capacidadeMemoria}';
    `
    return database.executar(instrucao)
}

function cadastrarUnidade(nome, telefone, cep, logradouro, bairro, numero, usuario){
    let instrucao = `
        exec inserir_unidade ${usuario}, '${nome}', '${telefone}', '${cep}', '${logradouro}', '${bairro}', ${numero};
    `
    return database.executar(instrucao)
}

function cadastrarFuncionario(unidade, idCliente, nome, cargo, data, celular, sobrenome, email, senha, nivel){
    let instrucao = `
        exec inserir_funcionario '${nome}', '${sobrenome}', '${cargo}', '${data}', '${celular}', ${unidade}, ${idCliente}, '${email}', '${senha}', ${nivel};
    `
    return database.executar(instrucao)
}

function autenticar(email, senha){
    let instrucao = `
        exec realizar_login '${email}', '${senha}';
    `
    return database.executar(instrucao)
}

function salvar(nome, email, senha, usuario, cnpj) {
    let instrucao = `
        exec atualizarDados ${usuario}, '${nome}', '${cnpj}', '${email}', '${senha}';
    `
    return database.executar(instrucao);
}

function pegarInfoBanco(idCliente){
    let instrucao = `
        select nome_unidade, id_unidade from unidade where fk_cliente = ${idCliente};
    `
    return database.executar(instrucao)
}

module.exports = {
    cadastrar,
    autenticar,
    salvar,
    pegarInfoBanco,
    cadastrarFuncionario,
    cadastrarUnidade,
    cadastrarHardware
};