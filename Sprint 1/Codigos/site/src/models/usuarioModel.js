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

module.exports = {
    cadastrar,
    autenticar,
    salvar
};