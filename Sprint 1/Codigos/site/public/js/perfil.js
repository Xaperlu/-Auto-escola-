
userLogado.innerHTML = sessionStorage.getItem('NOME_USUARIO')
nomeUsuario.innerHTML = sessionStorage.getItem('NOME_USUARIO')
emailUsuario.innerHTML = sessionStorage.getItem('EMAIL_USUARIO')
cnpjUsuario.innerHTML = sessionStorage.getItem('CNPJ_USUARIO')




document.querySelector("#addunidades").addEventListener("click", () => {
    console.log("teque")

    var teladecadastrounidade = document.querySelector("#janelacadastrounidade");
    var ioniconsbotaounidade = document.querySelector(".fecharjanelaunidade");

    if (teladecadastrounidade.style.display == "flex") {        //abrir janela de unidade
        teladecadastrounidade.style.display = "none"

        console.log("none")
    } else {
        var teladecadastrohardware = document.querySelector("#janelacadastrohardware").style.display = "none"
        teladecadastrounidade.style.display = "flex";
        var botaodeadicionarunidade = document.querySelector("#addunidades").style.display = "none";
        var botaodeadicionarhardware = document.querySelector("#addhardware").style.display = "none";

        console.log("flex")
    }


});

document.querySelector("#fecharjanelaunidade").addEventListener("click", () => {


    var teladecadastrounidade = document.querySelector("#janelacadastrounidade").style.display = "none"   //fechar janela de unidade => o "X" da tela 
    var botaodeadicionarunidade = document.querySelector("#addunidades").style.display = "flex";
    var botaodeadicionarhardware = document.querySelector("#addhardware").style.display = "flex";

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
        teladecadastrohardware.style.display = "flex";
        var botaodeadicionarunidade = document.querySelector("#addunidades").style.display = "none";
        var botaodeadicionarhardware = document.querySelector("#addhardware").style.display = "none";

    }


});



document.querySelector("#fecharjanelahardware").addEventListener("click", () => {


    var teladecadastrohardware = document.querySelector("#janelacadastrohardware").style.display = "none"   //fechar janela de hardware => o "X" da tela 
    var botaodeadicionarunidade = document.querySelector("#addunidades").style.display = "flex";
    var botaodeadicionarhardware = document.querySelector("#addhardware").style.display = "flex";

    var teladeescolha = document.querySelector("#listadehaerwareparaupdate").style.display = "none";
    var h1 = document.querySelector("#agaum").style.opacity = "1";
    var botaocriar = document.querySelector("#btncriarhardware").style.display = "block";


});






function editar() {

    let nodisp = document.getElementById('noeditsinfo1').style.display = "none";
    let nodisp2 = document.getElementById('noeditsinfo2').style.display = "none";
    let nodisp3 = document.getElementById('noeditsinfo3').style.display = "none";
    let nodisp4 = document.getElementById('noeditsinfo4').style.display = "none";
    let nodisp5 = document.getElementById('boll1').style.display = "none";
    let nodisp6 = document.getElementById('boll2').style.display = "none";

    let disp1 = document.getElementById('editarinfo1').style.display = "block";
    let disp2 = document.getElementById('editarinfo2').style.display = "block";
    let disp3 = document.getElementById('editarinfo3').style.display = "block";
    let disp4 = document.getElementById('editarinfo4').style.display = "block";
    let disp5 = document.getElementById('boll1After').style.display = "block";
    let disp6 = document.getElementById('boll2After').style.display = "block";

    let botaoeditar = document.querySelector(".campobotoes button").style.opacity = "0";

    let setaproximo = document.querySelector(".campobotoes div img").style.display = "none"
    let botaosalvar = document.querySelector(".campobotoes div button").style.display = "flex"



    //colocar os dados do usuario no input


}

const cnpjMascara = document.getElementById('CNPJ');

function MascaraCnpj(){

    let tamanhoCnpj = cnpjMascara.value.length

    if(tamanhoCnpj == 2 || tamanhoCnpj == 6 || tamanhoCnpj == 15){
        cnpjMascara.value += "."
    }

    if(tamanhoCnpj == 10){
        cnpjMascara.value += "/"
    }
}

function salvar() {



    //aqui tem que fazer update dos dados da tela normal de usuario





    let nodisp = document.getElementById('noeditsinfo1').style.display = "flex";
    let nodisp2 = document.getElementById('noeditsinfo2').style.display = "flex";
    let nodisp3 = document.getElementById('noeditsinfo3').style.display = "flex";
    let nodisp4 = document.getElementById('noeditsinfo4').style.display = "flex";
    let nodisp5 = document.getElementById('boll1After').style.display = "none";
    let nodisp6 = document.getElementById('boll2After').style.display = "none";

    let disp1 = document.getElementById('editarinfo1').style.display = "none";
    let disp2 = document.getElementById('editarinfo2').style.display = "none";
    let disp3 = document.getElementById('editarinfo3').style.display = "none";
    let disp4 = document.getElementById('editarinfo4').style.display = "none";
    let disp5 = document.getElementById('boll1').style.display = "block";
    let disp6 = document.getElementById('boll2').style.display = "block";

    let botaoeditar = document.querySelector(".campobotoes button").style.opacity = "1";

    let setaproximo = document.querySelector(".campobotoes div img").style.display = "flex";
    let botaosalvar = document.querySelector(".campobotoes div button").style.display = "none";



    var idVar = sessionStorage.getItem('ID_USUARIO')
    var nomeVar = Nome.value;
    var emailVar = Email.value;
    var cnpjVar = CNPJ.value;
    var senhaVar = Senha.value;
    const validacaoSenha = senhaVar.match(/[0-9]/) && senhaVar.match(/[A-Z]/) && senhaVar.match(/[!\@\#\$\%\&\*]/) && senhaVar.length >= 6


    if (nomeVar == "" && emailVar == "" && senhaVar == "" && cnpjVar == "") {
        alert('Por favor, preencha algum campo para prosseguir')

        return false;
    }
    else if(cnpjVar != "" && cnpjVar != 18){
        alert("CNPJ inválido! um CNPJ deve ter 14 caracteres numéricos.")
    }
    else if(emailVar != "" && !emailVar.match(/[@]/)){
        alert("Email inválido!")
    }
    else if(senhaVar != "" && !validacaoSenha){
        alert("Senha inválida!")
    }

    // Enviando o valor da nova input
    fetch("/usuarios/salvar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            nomeServer: nomeVar,
            emailServer: emailVar,
            senhaServer: senhaVar,
            idServer: idVar,
            cnpjServer: cnpjVar
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            // cardErro.style.display = "block";

            alert ("Informmações atualizadas com sucesso!")

            setTimeout(() => {
                window.location = "perfil.html";
            }, "2000")
            
            limparFormulario();
            finalizarAguardar();
        } else {
            throw ("Houve um erro ao tentar realizar a atualização!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        finalizarAguardar();
    });

    return false;
}





function cadastrarunidade() {




    //pegar os dados dos inputs da tela de cadastro de unidade e jogar no banco de dados




    var listadeunidades = document.querySelector("#listadeunidadeparaupdate");
    var texto = document.createTextNode(nserie.value);
    var li = document.createElement("li");
    var p = document.createElement("p");
    p.appendChild(texto);                                                                       //criando o elemento na lista de hardwares
    li.appendChild(p);
    listadehardware.appendChild(li);






    var telaunidade = document.querySelector("#janelacadastrounidade").style.display = "none";
    var botaodeadicionarunidade = document.querySelector("#addunidades").style.display = "flex";
    var botaodeadicionarhardware = document.querySelector("#addhardware").style.display = "flex";

}

function abrirteladeescolhaunidade() {
    var teladeescolha = document.querySelector("#listadeunidadeparaupdate").style.display = "flex";
    var h1 = document.querySelector("#agaumm").style.opacity = "0";
    var botaocriar = document.querySelector("#btncriarunidade").style.display = "none";
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
    var botaocriar = document.querySelector("#btncriarhardware").style.display = "none";
}



// const valoresDoSelect = [{nome: "José", idade: 18}];
// valoresDoSelect.map(valor => {
//     document.createElement("li")
//     document.createTextNode(valor.nome)
//     console.log(valor.nome)
// })