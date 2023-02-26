var database = require("../database/config")

function cadastrar(nome, cnpj, email, senha){
    let instrucao = `
        insert into cliente values ('${nome}', '${cnpj}', '${email}', '${senha}');
    `
    return database.executar(instrucao)
}

function autenticar(email, senha){
    let instrucao = `
        select * from cliente where email = '${email}' and senha = '${senha}';
    `
    return database.executar(instrucao)
}

module.exports = {
    cadastrar,
    autenticar
};