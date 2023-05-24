console.log(sessionStorage.getItem("mode"))


if (sessionStorage.getItem("mode") == "white") {
    white();

} else {
    document.querySelector("#onmode").style.transform = "translateX(40px)"
    document.querySelector("#divlightmode").style.backgroundColor = "#45a0f5";
    console.log("modo dark")

}


function lightmode() {

    if (document.querySelector("#onmode").style.transform == "translateX(40px)") {
        white();

    } else {
        black()

    }

}




















function white() {



    document.querySelector(".sol").style.opacity = "1";
    document.querySelector(".lua").style.opacity = "0";
   
    document.querySelector("#onmode").style.transform = "translateX(5px)"

    cordefundo("#onmode", "white", "none") //bolinha dentro do botão do lighmode

    cordefundo("#divlightmode", "#45a0f9", "none")//botao do lighmode

    document.querySelector(".analytics").style.backgroundImage = "url(././asset/ceu3.jpg)"; //mudar fundo 

    cordefundo(".navbar", "#041737", "none") //cor do menu lateral

    cordotexto("h3", "#3963AD") //texto em cima da kpi

    cordefundo(".kpi", "white", "0px 0px 10px 5px rgba(0, 0, 0, 0.166)") //cor da div das kpis 

    cordotexto(".descricao h2", "#3963AD") //cor do titulo "KPI"

    cordefundo(".styleFiltro", "#DFDFDF", "none") //cor dos inputs da navbar

    cordotexto(".clabel", "#3963AD") //cor das labels da navbar

    cordotexto(".bigN p", "#3963AD") //mudar cor do titulos de kpi

    cordefundo(".areagrafico", "white", "none") //mudar cor do grafico

    cordotexto(".textpage", "#3963AD") //mudar cor titulo descrição dos graficos 


    sessionStorage.setItem("mode", "white");

}



function black() {

    document.querySelector(".sol").style.opacity = "0";
        document.querySelector(".lua").style.opacity = "1";

    document.querySelector("#onmode").style.transform = "translateX(40px)"
    document.querySelector("#divlightmode").style.backgroundColor = "#45a0f5";

    cordefundo("#onmode", "white", "none") //bolinha dentro do botão do lighmode

    cordefundo("#divlightmode", "grey", "none")//botao do lighmode

    document.querySelector(".analytics").style.backgroundImage = "url(././asset/realback.png)";

    cordefundo(".navbar", "#242731", "none") //cor do menu lateral

    cordotexto("h3", "white") //texto em cima da kpi

    cordefundo(".kpi", "#242731", "none") //cor da div das kpis 

    cordotexto(".descricao h2", "white") //cor do titulo "KPI"

    cordefundo(".styleFiltro", "#DFDFDF", "none") //cor dos inputs da navbar

    cordotexto(".clabel", "white") //cor das labels da navbar

    cordotexto(".bigN p", "white") //mudar cor do titulos de kpi

    cordefundo(".areagrafico", "#242731", "none") //mudar cor do grafico

    cordotexto(".textpage", "whitesmoke") //mudar cor titulo descrição dos graficos 

    sessionStorage.setItem("mode", "dark");

}






























function cordotexto(a, b) {

    let lista = document.querySelectorAll(a);     //o primeiro parametro é a "classe" e o segundo é a "cor"     => cordotext(classe, vermelho)
                                                //coloca a mesma classe em varias coisas e só passa o nome dela aqui 
    console.log(lista)
    lista.forEach((item) => {

        item.style.color = b;

    });

}

function cordefundo(a, b, c) {

    let lista = document.querySelectorAll(a);      //mesma logica do de cima só que tem um parametro a mais que é opcional passar tlg
    console.log(lista)

    lista.forEach((item) => {

        item.style.backgroundColor = b;
        item.style.boxShadow = c;

    });

}


