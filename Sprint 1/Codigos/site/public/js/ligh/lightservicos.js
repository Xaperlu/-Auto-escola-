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
        
        cordefundo("header", "black", "none"); //background
        cordefundo(".section", "#D6F1FF");//fundo 
        cordotexto(".text", "whitesmoke"); //grande parte dos textos
        cordefundo(".card", "#52C5FF");//fundo card

        cordefundo("button", "#D6F1FF");//fundo botao card
        cordotexto("button p", "black"); //text botao card
   

      

        
  



        sessionStorage.setItem("mode", "white");
        
        
    } else {
        //black on
        document.querySelector(".lua").style.opacity = "1";
        document.querySelector(".sol").style.opacity = "0";

        document.querySelector("#onmode").style.transform = "translateX(40px)"
        cordefundo("#divlightmode", "#45a0f5");//fundo botao
        
        cordefundo("header", "black", "none"); //background
        cordefundo(".section", "rgb(15, 15, 15)");//fundo 
        cordotexto(".text", "white"); //grande parte dos textos
        cordefundo(".card", "rgba(128, 128, 128, 0.179)");//fundo 

    

   

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

function borda(a, b) {

    let lista = document.querySelectorAll(a);     
    console.log(lista)

    lista.forEach((item) => {

        item.style.border = b;
      
       

    });

}

