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
        
        cordotexto(".text", "black"); //grande parte dos textos
        cordefundo(".box", "#52C5FF", "0px 0px 10px 5px rgba(0, 0, 0, 0.166)"); //blocos de informação
        borda(".box","none");
        cordefundo(".boxicon", "#D6F1FF",); //div pequena dentro dos blocos

        cordefundo("main", "#D6F1FF", "none"); //background
        cordefundo("header", "black", "none"); //background

        sessionStorage.setItem("mode", "white");
        
        
    } else {
        //black on
        document.querySelector(".lua").style.opacity = "1";
        document.querySelector(".sol").style.opacity = "0";
        document.querySelector("#onmode").style.transform = "translateX(40px)"
        cordefundo("#divlightmode", "#45a0f5");//fundo botao
        

        cordotexto(".text", "whitesmoke"); //grande parte dos textos
        cordefundo(".box", "rgba(128, 128, 128, 0.179)"); //blocos de informação
        cordefundo(".boxicon", "rgba(160, 160, 160, 0.253)",); //div pequena dentro dos blocos

        cordefundo("main", "rgba(128, 128, 110, 0)", "none"); //background
        cordefundo("header", "black", "none"); //background

        sessionStorage.setItem("mode", "dark");

        
    }
}



//pendente de alteração



















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

function borda(a, b) {

    let lista = document.querySelectorAll(a);     
    console.log(lista)

    lista.forEach((item) => {

        item.style.border = b;
      
       

    });

}
