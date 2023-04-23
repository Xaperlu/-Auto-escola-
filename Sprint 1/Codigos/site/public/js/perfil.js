//const { pegarInfoBanco } = require("../../src/models/usuarioModel");

userLogado.innerHTML = sessionStorage.getItem('NOME_USUARIO')
nomeUsuario.innerHTML = sessionStorage.getItem('NOME_USUARIO')
emailUsuario.innerHTML = sessionStorage.getItem('EMAIL_USUARIO')
cnpjUsuario.innerHTML = sessionStorage.getItem('CNPJ_USUARIO')
nomeCliente.innerHTML = sessionStorage.getItem('EMPRESA_USUARIO')

document.querySelector("#addunidades").addEventListener("click", () => {

    var teladecadastrounidade = document.querySelector("#janelacadastrounidade");
    var ioniconsbotaounidade = document.querySelector(".fecharjanelaunidade");

    if (teladecadastrounidade.style.display == "flex") {        //abrir janela de unidade
        teladecadastrounidade.style.display = "none"

        console.log("none")
    } else {
        var teladecadastrohardware = document.querySelector("#janelacadastrohardware").style.display = "none"
        document.querySelector("#janelacadastrofuncionario").style.display = "none"
        var h1 = document.querySelector("#agaumm").style.opacity = "1";
        teladecadastrounidade.style.display = "flex";

        let teladeescolha = document.querySelector("#listadeunidadeparaupdate").style.display = "none";
        let botaocriar = document.querySelector("#btncriarunidade").style.display = "block";
    }


});

document.querySelector("#fecharjanelaunidade").addEventListener("click", () => {


    var teladecadastrounidade = document.querySelector("#janelacadastrounidade").style.display = "none"   //fechar janela de unidade => o "X" da tela 

    var teladeescolha = document.querySelector("#listadeunidadeparaupdate").style.display = "none";
    var h1 = document.querySelector("#agaumm").style.opacity = "1";
    var botaocriar = document.querySelector("#btncriarunidade").style.display = "block";


});







document.querySelector("#addhardware").addEventListener("click", () => {


    var teladecadastrohardware = document.querySelector("#janelacadastrohardware");

    if (teladecadastrohardware.style.display == "flex") {        //abrir janela de cadastro de hardware
        teladecadastrohardware.style.display = "none"


    } else {
        var teladecadastrounidade = document.querySelector("#janelacadastrounidade").style.display = "none"
        document.querySelector("#janelacadastrofuncionario").style.display = "none"
        var h1 = document.querySelector("#agaum").style.opacity = "1"; 
        teladecadastrohardware.style.display = "flex";

        let teladeescolha = document.querySelector("#listadehaerwareparaupdate").style.display = "none";
        let botaocriar = document.querySelector("#btncriarhardware").style.display = "block";

    }


});



document.querySelector("#fecharjanelahardware").addEventListener("click", () => {


    var teladecadastrohardware = document.querySelector("#janelacadastrohardware").style.display = "none"   //fechar janela de hardware => o "X" da tela 
    

    var teladeescolha = document.querySelector("#listadehaerwareparaupdate").style.display = "none";
    var h1 = document.querySelector("#agaum").style.opacity = "1";
    var botaocriar = document.querySelector("#btncriarhardware").style.display = "block";


});



document.querySelector("#addfuncionario").addEventListener("click", () => {
    console.log("teque")

    var teladecadastrodefuncionario = document.querySelector("#janelacadastrofuncionario");
   

    if (janelacadastrofuncionario.style.display == "flex") {        //abrir janela de unidade
        janelacadastrofuncionario.style.display = "none"

        console.log("none")
    } else {
        var teladecadastrohardware = document.querySelector("#janelacadastrohardware").style.display = "none"
        var teladecadastrounidade = document.querySelector("#janelacadastrounidade").style.display = "none"

        let teladeescolha = document.querySelector("#listadeunidadedefuncionarioparaupdate").style.display = "none";
        var h1 = document.querySelector("#agaummm").style.opacity = "1";
        let botaocriar = document.querySelector("#btncriarfuncionario").style.display = "block";
        janelacadastrofuncionario.style.display = "flex";

        console.log("flex")
    }


});

document.querySelector("#fecharjanelafuncionario").addEventListener("click", () => {


    var janelacadastrofuncionario = document.querySelector("#janelacadastrofuncionario").style.display = "none";
    var botaocriar = document.querySelector("#btncriarfuncionario").style.display = "block";


});


function voltar() {

    let principal = document.querySelector('.listadecampos')
    let editar = document.querySelector('.editarDados')
    let salvar = document.querySelector('.botaoSalvar')
    let botaoEditar = document.querySelector('.botaoEditar')
    let botaoVoltar = document.querySelector('.botaoVoltar')
    let bola01 = document.querySelector('#boll1')
    let bola02 = document.querySelector('#boll2')
    let bola03 = document.querySelector('#boll1After')
    let bola04 = document.querySelector('#boll2After')

    principal.style.display = "flex"
    editar.style.display = "none"
    salvar.style.display = "none"
    botaoEditar.style.display = "flex"
    botaoVoltar.style.display = "none"

    bola01.style.display = "flex"
    bola02.style.display = "flex"
    bola03.style.display = "none"
    bola04.style.display = "none"

}

function editar() {

    let principal = document.querySelector('.listadecampos')
    let editar = document.querySelector('.editarDados')
    let salvar = document.querySelector('.botaoSalvar')
    let botaoEditar = document.querySelector('.botaoEditar')
    let botaoVoltar = document.querySelector('.botaoVoltar')
    let bola01 = document.querySelector('#boll1')
    let bola02 = document.querySelector('#boll2')
    let bola03 = document.querySelector('#boll1After')
    let bola04 = document.querySelector('#boll2After')

    principal.style.display = "none"
    editar.style.display = "flex"
    salvar.style.display = "flex"
    botaoEditar.style.display = "none"
    botaoVoltar.style.display = "block"

    bola01.style.display = "none"
    bola02.style.display = "none"
    bola03.style.display = "flex"
    bola04.style.display = "flex"

}



function MascaraCnpj() {

    let cnpjMascara = document.getElementById('CNPJ');

    let tamanhoCnpj = cnpjMascara.value.length

    if (tamanhoCnpj == 2 || tamanhoCnpj == 6 || tamanhoCnpj == 15) {
        cnpjMascara.value += "."
    }

    if (tamanhoCnpj == 10) {
        cnpjMascara.value += "/"
    }
}

function onsenha() {
    document.querySelector("#onsenha").style.display = "none";
    document.querySelector("#offsenha").style.display = "block";

    document.querySelector("#senhaconfirmacaoupdate").type = "password";
    console.log("mostrar texto")

}

function offsenha() {
    document.querySelector("#offsenha").style.display = "none";
    document.querySelector("#onsenha").style.display = "block";

    document.querySelector("#senhaconfirmacaoupdate").type = "text";
    console.log("mostrar senha")

}

function update() {
    var usuario = sessionStorage.getItem('ID_USUARIO')
    var nome = document.querySelector('#inNome').value
    var email = document.querySelector('#inEmail').value
    var cnpj = document.querySelector('#CNPJ').value
    var senha = document.querySelector('#inSenha').value
    const nivel = sessionStorage.getItem('NIVEL_USUARIO')
    const validacaoSenha = senha.match(/[0-9]/) && senha.match(/[A-Z]/) && senha.match(/[!\@\#\$\%\&\*]/) && senha.length >= 6

    if(nivel != 3){
        alert('Você não tem permissão para alterar esses dados!')
        return false
    }

    if (nome == "" && email == "" && senha == "" && cnpj == "") {
        alert('Por favor, preencha algum campo para prosseguir')
        return false;
    }
    else if (cnpj != "" && cnpj.length != 18){
        alert("CNPJ inválido! um CNPJ deve ter 14 caracteres numéricos.")
    }
    else if (email != "" && !email.match(/[@]/)) {
        alert("Email inválido!")
    }
    else if (senha != "" && !validacaoSenha) {
        alert("Senha inválida!")
    }

    fetch("/usuarios/salvar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome,
            email,
            senha,
            usuario,
            cnpj
        })
    }).then(function (resposta) {
        console.log("resposta: ", resposta);
        if (resposta.ok) {
            alert("Informações atualizadas com sucesso!")

            if(nome != ''){
                sessionStorage.NOME_USUARIO = nome
            }

            if(email != ''){
                sessionStorage.EMAIL_USUARIO = email
            }

            if(cnpj != ''){
                sessionStorage.CNPJ_USUARIO = cnpj
            }

            window.location = "perfil.html";
        }
    })

    return false;
}


function cadastrarUnidade() {
    const nome = document.querySelector('#unNomeUnidade').value
    const telefone = document.querySelector('#unTelefone').value
    const cep = document.querySelector('#unCep').value
    const logradouro = document.querySelector('#unLogradouro').value
    const bairro = document.querySelector('#unBairro').value
    const numero = document.querySelector('#unNumero').value
    const usuario = sessionStorage.getItem('ID_USUARIO')
    const nivel = sessionStorage.getItem('NIVEL_USUARIO')

    if(nivel != 3){
        alert('Você não tem permissão para cadastrar uma unidade!')
        return false
    }

    fetch(`/usuarios/cadastrarUnidade`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome,
            telefone,
            cep,
            logradouro,
            bairro,
            numero,
            usuario
        })
    }).then(function (resposta) {
        if(resposta.ok){
            alert('Cadastro com sucesso')

            window.location = "perfil.html"
        }else{
            alert('Falha no cadastro')
        }
    })
}

function abrirteladeescolhaunidade() {
    var teladeescolha = document.querySelector("#listadeunidadeparaupdate").style.display = "flex";
    var h1 = document.querySelector("#agaumm").style.opacity = "0";
    let botaocriar = document.querySelector("#btncriarunidade").style.display = "none";
}

function cadastrarhardware() {

    //pegar os dados dos inputs da tela de cadastro de hardware e jogar no banco de dados

    console.log("criou")

    var listadehardware = document.querySelector("#listadehaerwareparaupdate");
    var texto = document.createTextNode(nserie.value);
    var li = document.createElement("li");
    var p = document.createElement("p");
    p.appendChild(texto);                                                                       //criando o elemento na lista de hardwares
    li.appendChild(p);
    listadehardware.appendChild(li);

    var telahardware = document.querySelector("#janelacadastrohardware").style.display = "none";
    var botaodeadicionarunidade = document.querySelector("#addunidades").style.display = "flex";
    var botaodeadicionarhardware = document.querySelector("#addhardware").style.display = "flex";

}

function abrirteladeescolhahardware() {
    var teladeescolha = document.querySelector("#listadehaerwareparaupdate").style.display = "flex";
    var h1 = document.querySelector("#agaum").style.opacity = "0";
    let botaocriar = document.querySelector("#btncriarhardware").style.display = "none";
}

function abrirteladeescolhadeunidadefuncionario() {
    var teladeescolha = document.querySelector("#listadeunidadedefuncionarioparaupdate").style.display = "flex";
    var h1 = document.querySelector("#agaummm").style.opacity = "0";
    let botaocriar = document.querySelector("#btncriarfuncionario").style.display = "none";
}

function hardwareCadastro(){
    const cliente = sessionStorage.getItem("ID_USUARIO")
    const unidade = document.querySelector('#selHardware').value
    const numeroSerie = document.querySelector('#nserie').value
    const so = document.querySelector('#sistemaOperacional').value
    const cpu = document.querySelector('#capacidadeCpu').value
    const disco = document.querySelector('#capacidadeDisco').value
    const memoria = document.querySelector('#capacidadeMemoria').value
    const cpuModelo = document.querySelector('#cpuModelo').value
    const discoModelo = document.querySelector('#discoModelo').value
    const memoriaModelo = document.querySelector('#memoriaModelo').value
    const nivel = sessionStorage.getItem('NIVEL_USUARIO')

    if(!(nivel == 3 || nivel == 2)){
        alert('Você não tem permissão para cadastrar um hardware!')
        return false
    }

    fetch(`/usuarios/cadastrarHardware`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            cliente,
            unidade,
            numeroSerie,
            so,
            cpu,
            disco,
            memoria,
            cpuModelo,
            discoModelo,
            memoriaModelo
        })
    }).then(function (resposta) {
        if(resposta.ok){
            alert('Cadastro com sucesso')

            window.location = "perfil.html"
        }else{
            alert('Falha no cadastro')
        }
    })
}

function funcionarioCadastro(){
    const nome = document.querySelector('#funNome').value
    const sobrenome = document.querySelector('#funSobrenome').value
    const nivel = document.querySelector('#selCargo').value
    const data = document.querySelector('#funData').value
    const celular = document.querySelector('#funCelular').value
    const unidade = document.querySelector('#selUnidade').value
    const empresa = sessionStorage.getItem('EMPRESA_USUARIO')
    const idCliente = sessionStorage.getItem('ID_USUARIO')
    const email = nome.toLowerCase() + "." + sobrenome.toLowerCase() + "@" + empresa.toLowerCase() + ".com" 
    const senha = 'Padrao1!'
    let cargo
    const nivelUsuario = sessionStorage.getItem('NIVEL_USUARIO')

    if(!(nivelUsuario == 2 || nivelUsuario == 3)){
        alert('Você não possui permissão para cadastrar um usuário!')
        return false
    }

    if(nivel == 1){
        cargo = "Analista NOC"
    }else if(nivel == 2){
        cargo = "Gerente"
    }else{
        alert('Escolha o cargo do funcionario!')
        return false
    }

    fetch(`/usuarios/cadastrarFuncionario`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            unidade,
            idCliente,
            nome,
            cargo,
            data,
            celular,
            sobrenome,
            email,
            senha,
            nivel
        })
    }).then(function (resposta) {
        if(resposta.ok){
            alert('Cadastro com sucesso')

            window.location = "perfil.html"
        }else{
            alert('Falha no cadastro')
        }
    })

}


const numCep = document.getElementById('unCep');
const logradouro = document.getElementById('unLogradouro');
const bairro = document.getElementById('unBairro');

function CepMascara() {

    if (numCep.value.length == 5) {
        numCep.value += "-"
    }

    if (numCep.value.length == 9) {
        PegarEndereco(numCep.value)
    }

    if (numCep != 9) {
        logradouro.value = "";
        bairro.value = "";
    }
}

function PegarEndereco(cep) {
    let script = document.createElement('script');

    script.src = `https://viacep.com.br/ws/${cep}/json/?callback=CallbackEndereco`;

    document.body.appendChild(script);
}

function CallbackEndereco(endereco) {
    logradouro.value = (endereco.logradouro);
    bairro.value = (endereco.bairro);
}

const telefone = document.getElementById('unTelefone');

function FixoMascara() {

    let tamanhoTel = telefone.value.length

    if (tamanhoTel == 2) {
        telefone.value += " "
    }

    if (tamanhoTel == 7) {
        telefone.value += "-"
    }
}

const mascaraCelular = document.getElementById('funCelular');

function CelularMascara() {

    let tamanhoTel = mascaraCelular.value.length

    if (tamanhoTel == 2) {
        mascaraCelular.value += " "
    }

    if (tamanhoTel == 8) {
        mascaraCelular.value += "-"
    }
}