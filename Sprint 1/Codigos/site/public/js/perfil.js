
userLogado.innerHTML = sessionStorage.getItem('NOME_USUARIO')
nomeUsuario.innerHTML = sessionStorage.getItem('NOME_USUARIO')
emailUsuario.innerHTML = sessionStorage.getItem('EMAIL_USUARIO')
cnpjUsuario.innerHTML = sessionStorage.getItem('CNPJ_USUARIO')





window.addEventListener("scroll", (event) => {
    let scrollY = this.scrollY;

    console.log(scrollY);

    if (scrollY > 0.7) {
        document.querySelector("header").style.backgroundColor = "rgb(15, 15, 15, 0.120)";
        document.querySelector("header").style.backdropfilter = "blur(10px)";
        document.querySelector("header").style.top = "-80px";
    } else {
        document.querySelector("header").style.backgroundColor = "transparent";
        document.querySelector("header").style.filter = "blur(0px)";
        document.querySelector("header").style.top = "0px";
    }


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

