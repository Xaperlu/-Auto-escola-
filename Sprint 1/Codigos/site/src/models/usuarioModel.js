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

function cadastrarUnidade(fkUsuario, nome, telefone, cep, bairro, numero, logradouro){
    let instrucao = `
        exec inserir_unidade ${fkUsuario}, '${nome}', '${telefone}', '${cep}', '${logradouro}', '${bairro}', ${numero};
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

function pegarInfoDash(idCliente){
    let instrucao = `
        select * from hardware where fk_cliente = ${idCliente};
    `
    return database.executar(instrucao)
}

function obterDadosDash(idHardware){
    let instrucao = `
    select top 7 m.id_metrica, m.porcentagem_uso, format(dt_hora, 'HH:mm:ss') as momento from metrica as m join componente as c on c.id_componente = m.fk_componente 
    join modelo_componente as mc on  mc.id_modelo_componente = c.fk_modelo_componente 
    where m.fk_hardware = ${idHardware} and mc.tipo = 'CPU' order by id_metrica desc;
    `
    return database.executar(instrucao)
}

function atualizarGrafico(idHardware){
    let instrucao = `
    select top 1 m.id_metrica, m.porcentagem_uso, format(dt_hora, 'HH:mm:ss') as momento from metrica as m join componente as c on c.id_componente = m.fk_componente 
    join modelo_componente as mc on  mc.id_modelo_componente = c.fk_modelo_componente 
    where m.fk_hardware = ${idHardware} and mc.tipo = 'CPU' order by id_metrica desc;
    `
    return database.executar(instrucao)
}

function obterDadosRam(idHardware){
    let instrucao = `
    select top 7 m.id_metrica, m.porcentagem_uso, format(dt_hora, 'HH:mm:ss') as momento from metrica as m join componente as c on c.id_componente = m.fk_componente 
    join modelo_componente as mc on  mc.id_modelo_componente = c.fk_modelo_componente 
    where m.fk_hardware = ${idHardware} and mc.tipo = 'Memória RAM' order by id_metrica desc;
    `
    return database.executar(instrucao)
}

function atualizarGraficoRam(idHardware){
    let instrucao = `
    select top 1 m.id_metrica, m.porcentagem_uso, format(dt_hora, 'HH:mm:ss') as momento from metrica as m join componente as c on c.id_componente = m.fk_componente 
    join modelo_componente as mc on  mc.id_modelo_componente = c.fk_modelo_componente 
    where m.fk_hardware = ${idHardware} and mc.tipo = 'Memória RAM' order by id_metrica desc;
    `
    return database.executar(instrucao)
}

function obterDadosDisco(idHardware){
    let instrucao = `
    select top 7 m.id_metrica, m.porcentagem_uso, format(dt_hora, 'HH:mm:ss') as momento from metrica as m join componente as c on c.id_componente = m.fk_componente 
    join modelo_componente as mc on  mc.id_modelo_componente = c.fk_modelo_componente 
    where m.fk_hardware = ${idHardware} and mc.tipo = 'Disco' order by id_metrica desc;
    `
    return database.executar(instrucao)
}

function atualizarGraficoDisco(idHardware){
    let instrucao = `
    select top 1 m.id_metrica, m.porcentagem_uso, format(dt_hora, 'HH:mm:ss') as momento from metrica as m join componente as c on c.id_componente = m.fk_componente 
    join modelo_componente as mc on  mc.id_modelo_componente = c.fk_modelo_componente 
    where m.fk_hardware = ${idHardware} and mc.tipo = 'Disco' order by id_metrica desc;
    `
    return database.executar(instrucao)
}

function obterDadosRede(idHardware){
    let instrucao = `
    select top 7 id_capturas_rede, download_mbps, upload_mbps, format(dt_hora, 'HH:mm:ss') as momento from capturas_rede
    where fk_hardware = ${idHardware} order by id_capturas_rede desc;
    `
    return database.executar(instrucao)
}

function atualizarGraficoRede(idHardware){
    let instrucao = `
    select top 7 id_capturas_rede, download_mbps, upload_mbps, format(dt_hora, 'HH:mm:ss') as momento from capturas_rede
    where fk_hardware = ${idHardware} order by id_capturas_rede desc;
    `
    return database.executar(instrucao)
}

function pegarDadosGraficosRosca(idHardware){
    let instrucao = `
    select top 1
    (select count(porcentagem_uso) from metrica join componente as c on id_componente = fk_componente join modelo_componente on id_modelo_componente = c.fk_modelo_componente where dt_hora > DATEADD(HOUR, -27, GETDATE()) and porcentagem_uso > 80 and tipo = 'CPU' and c.fk_hardware = ${idHardware}) as CpuAcima, 
    (select count(porcentagem_uso) from metrica join componente as c on id_componente = fk_componente join modelo_componente on id_modelo_componente = c.fk_modelo_componente where dt_hora > DATEADD(HOUR, -27, GETDATE()) and porcentagem_uso > 80 and tipo = 'Memória RAM' and c.fk_hardware = ${idHardware}) as RamAcima,
    (select count(porcentagem_uso) from metrica join componente as c on id_componente = fk_componente join modelo_componente on id_modelo_componente = c.fk_modelo_componente where dt_hora > DATEADD(HOUR, -27, GETDATE()) and porcentagem_uso > 80 and tipo = 'Disco' and c.fk_hardware = ${idHardware}) as DiscoAcima,
    (select count(porcentagem_uso) from metrica join componente as c on id_componente = fk_componente join modelo_componente on id_modelo_componente = c.fk_modelo_componente where dt_hora > DATEADD(HOUR, -27, GETDATE()) and porcentagem_uso < 80 and tipo = 'CPU' and c.fk_hardware = ${idHardware}) as CpuAbaixo,
    (select count(porcentagem_uso) from metrica join componente as c on id_componente = fk_componente join modelo_componente on id_modelo_componente = c.fk_modelo_componente where dt_hora > DATEADD(HOUR, -27, GETDATE()) and porcentagem_uso < 80 and tipo = 'Memória RAM' and c.fk_hardware = ${idHardware}) as RamAbaixo,
    (select count(porcentagem_uso) from metrica join componente as c on id_componente = fk_componente join modelo_componente on id_modelo_componente = c.fk_modelo_componente where dt_hora > DATEADD(HOUR, -27, GETDATE()) and porcentagem_uso < 80 and tipo = 'Disco' and c.fk_hardware = ${idHardware}) as DiscoAbaixo
    from metrica join componente as c on id_componente = fk_componente join modelo_componente on id_modelo_componente = c.fk_modelo_componente 
    where dt_hora > DATEADD(HOUR, -27, GETDATE());
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
    cadastrarHardware,
    pegarInfoDash,
    obterDadosDash,
    atualizarGrafico,
    obterDadosRam,
    atualizarGraficoRam,
    obterDadosDisco,
    atualizarGraficoDisco,
    obterDadosRede,
    atualizarGraficoRede,
    pegarDadosGraficosRosca
};