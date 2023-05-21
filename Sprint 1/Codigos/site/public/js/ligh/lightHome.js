console.log(sessionStorage.getItem("mode"));

if (sessionStorage.getItem("mode") == "dark") {
    document.querySelector("#onmode").style.transform = "translateX(5px)"
    lightmode()
} else {
    document.querySelector("#onmode").style.transform = "translateX(40px)"
    lightmode()
}




function lightmode() {

    if (document.querySelector("#onmode").style.transform == "translateX(40px)") {
        //white on
        
        document.querySelector(".sol").style.opacity = "1";
        document.querySelector(".lua").style.opacity = "0";
        document.querySelector("#onmode").style.transform = "translateX(5px)"

        cordefundo("#divlightmode", "#45a0f9"); //fundo botao
        cordefundo("body", "#D6F1FF"); //cor do body
        cordotexto(".text", "black"); //grande parte dos textos
        cordotexto(".divdownload a", "white");// cor do texto do botão de cadastrar
        cordefundo(".black", "black"); //cor do botao de cadastrar no centro da tela
        cordefundo(".botao","black")// cor do botão
        cordefundo(".box", "#52C5FF"); //blocos de informação
        cordefundo(".boxicon", "#D6F1FF",); //div pequena dentro dos blocos

        sessionStorage.setItem("mode", "white");
    } else {
        //black on
        
        document.querySelector(".lua").style.opacity = "1";
        document.querySelector(".sol").style.opacity = "0";
        document.querySelector("#onmode").style.transform = "translateX(40px)"

        cordefundo("#divlightmode", "#45a0f5");//fundo botao
        cordefundo("body", "black"); //cor do body
        cordotexto(".text", "whitesmoke"); //grande parte dos textos
        cordotexto(".divdownload a", "black");// cor do texto do botão de cadastrar
        cordefundo(".black", "black"); //cor do botao de cadastrar no centro da tela
        cordefundo(".botao","whitesmoke")// cor do botão
        cordefundo(".box", "rgba(128, 128, 128, 0.179)", "none"); //blocos de informação
        cordefundo(".boxicon", "rgba(160, 160, 160, 0.253)",); //div pequena dentro dos blocos
        
        sessionStorage.setItem("mode", "dark");
    }
}















function cordotexto(a, b) {

    let lista = document.querySelectorAll(a);      
    console.log(lista)

    lista.forEach((item) => {

        item.style.color = b;

    });

}

function cordefundo(a, b, c) {

    let lista = document.querySelectorAll(a);     
    console.log(lista)

    lista.forEach((item) => {

        item.style.backgroundColor = b;
        item.style.boxShadow = c;

    });

}
