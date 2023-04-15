var database = require("../database/config")

function cadastrar(nome, cnpj, email, senha, nivel){
    let instrucao = `
        exec InserirCliente '${email}', '${senha}', ${nivel}, '${nome}', '${cnpj}';
    `
    return database.executar(instrucao)
}

function cadastrarHardware(cliente, unidade, numeroSerie, so, cpu, disco, memoria, cpuModelo, discoModelo, memoriaModelo){
    let instrucao = `
        exec InserirHardware ${cliente}, ${unidade}, '${numeroSerie}', '${so}', '${cpu}', ${disco}, '${memoria}', '${cpuModelo}', '${discoModelo}', '${memoriaModelo}';
    `
    return database.executar(instrucao)
}

function cadastrarUnidade(nome, telefone, cep, logradouro, bairro, numero, usuario){
    let instrucao = `
        insert into unidade (fkCliente, nomeUnidade, telefoneFixo, cep, logradouro, bairro, numero) values
        (${usuario}, '${nome}', '${telefone}', '${cep}', '${logradouro}', '${bairro}', ${numero});
    `
    return database.executar(instrucao)
}

function cadastrarFuncionario(unidade, idCliente, nome, cargo, data, celular, sobrenome, email, senha, nivel){
    let instrucao = `
        exec InserirFuncionario '${nome}', '${sobrenome}', '${cargo}', '${data}', '${celular}', ${unidade}, ${idCliente}, '${email}', '${senha}', ${nivel};
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
        select nomeUnidade, idUnidade from unidade where fkCliente = ${idCliente};
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