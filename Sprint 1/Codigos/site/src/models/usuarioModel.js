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

function autenticar(email, senha){
    let instrucao = `
        select * from cliente join gestaoAcesso as ga on idGestaoAcesso = fkGestaoAcesso where ga.email = '${email}' and ga.senha = '${senha}';
    `
    return database.executar(instrucao)
}

function salvar(nome, email, senha, id, cnpj) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha,id, cnpj);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = ''
    if(nome != ""){
     instrucao = `
         UPDATE cliente SET nome = '${nome}' WHERE idCliente = ${id};
     `;
    }
    if(email != ""){
        instrucao += `
         UPDATE cliente SET email = '${email}' WHERE idCliente = ${id};
     `;
    }
    if(senha != ""){
        instrucao += `
         UPDATE cliente SET senha = '${senha}' WHERE idCliente = ${id};
     `;
    }
    if(cnpj != ""){
        instrucao += `
            UPDATE cliente SET cnpj = '${cnpj}' WHERE idCliente = ${id};
        `
    }
    console.log("Executando a instrução SQL: \n" + instrucao);
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
    cadastrarHardware
};