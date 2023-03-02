
userLogado.innerHTML = sessionStorage.getItem('NOME_USUARIO')
nomeUsuario.innerHTML = sessionStorage.getItem('NOME_USUARIO')
emailUsuario.innerHTML = sessionStorage.getItem('EMAIL_USUARIO')
cnpjUsuario.innerHTML = sessionStorage.getItem('CNPJ_USUARIO')




document.querySelector("#addunidades").addEventListener("click", () => {
    console.log("teque")
    
var teladecadastrounidade = document.querySelector("#janelacadastrounidade");
var ioniconsbotaounidade = document.querySelector(".fecharjanelaunidade");

    if (teladecadastrounidade.style.display == "flex" ) {        //abrir janela de unidade
        teladecadastrounidade.style.height = "0%" ; 
        teladecadastrounidade.style.display = "none"
        console.log("none")
    } else {
        teladecadastrounidade.style.display = "flex" ;  
        teladecadastrounidade.style.height = "100%" ; 
       
        console.log("flex")
    }


});

document.querySelector("#fecharjanelaunidade").addEventListener("click", () => {
    
    
var teladecadastrounidade = document.querySelector("#janelacadastrounidade").style.display = "none"   //fechar janela de unidade

         
});







document.querySelector("#addhardware").addEventListener("click", () => {
    console.log("teque")
    
var teladecadastrohardware = document.querySelector("#janelacadastrohardware");

    if (teladecadastrohardware.style.display == "flex" ) {        //abrir janela de cadastro de hardware
        teladecadastrohardware.style.display = "none"
        console.log("none")
    } else {
        teladecadastrohardware.style.display = "flex" ;  
        console.log("flex")
    }


});



document.querySelector("#fecharjanelahardware").addEventListener("click", () => {
    
    
    var teladecadastrounidade = document.querySelector("#janelacadastrohardware").style.display = "none"   //fechar janela de hardware
    
             
    }); 




function editar() {

    let nodisp = document.getElementById('noeditsinfo1').style.display = "none";
    let nodisp2 = document.getElementById('noeditsinfo2').style.display = "none";
    let nodisp3 = document.getElementById('noeditsinfo3').style.display = "none";
    let nodisp4 = document.getElementById('noeditsinfo4').style.display = "none";

    let disp1 = document.getElementById('editarinfo1').style.display = "block";
    let disp2 = document.getElementById('editarinfo2').style.display = "block";
    let disp3 = document.getElementById('editarinfo3').style.display = "block";
    let disp4 = document.getElementById('editarinfo4').style.display = "block";

    let botaoeditar = document.querySelector(".campobotoes button").style.opacity = "0";

    let setaproximo = document.querySelector(".campobotoes div img").style.display = "none"
    let botaosalvar = document.querySelector(".campobotoes div button").style.display = "flex"



    //colocar os dados do usuario no input


}



function salvar() {



    //aqui tem que fazer update dos dados 





    let nodisp = document.getElementById('noeditsinfo1').style.display = "flex";
    let nodisp2 = document.getElementById('noeditsinfo2').style.display = "flex";
    let nodisp3 = document.getElementById('noeditsinfo3').style.display = "flex";
    let nodisp4 = document.getElementById('noeditsinfo4').style.display = "flex";

    let disp1 = document.getElementById('editarinfo1').style.display = "none";
    let disp2 = document.getElementById('editarinfo2').style.display = "none";
    let disp3 = document.getElementById('editarinfo3').style.display = "none";
    let disp4 = document.getElementById('editarinfo4').style.display = "none";

    let botaoeditar = document.querySelector(".campobotoes button").style.opacity = "1";

    let setaproximo = document.querySelector(".campobotoes div img").style.display = "flex";
    let botaosalvar = document.querySelector(".campobotoes div button").style.display = "none";


}

