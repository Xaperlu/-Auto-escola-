

console.log(sessionStorage.getItem("mode"))

if(sessionStorage.getItem("mode") == "dark" ){
    document.querySelector("#onmode").style.transform = "translateX(5px)"
    lightmode()
}else{
    document.querySelector("#onmode").style.transform = "translateX(40px)"
    lightmode()
}




function lightmode() {



    if (document.querySelector("#onmode").style.transform == "translateX(40px)") {

        sessionStorage.setItem("mode", "white");
        //white on
        document.querySelector("#onmode").style.transform = "translateX(5px)"
        document.querySelector("#divlightmode").style.backgroundColor = "gray";

        document.querySelector("header").style.backgroundColor = "black";
        document.querySelector("body").style.backgroundColor = "white";
        
        // textos//home
        document.querySelector(".bloco1 p").style.color = "black";
        document.querySelector(".bloco1 h2").style.color = "black";
        document.querySelector(".divdownload a").style.color = "white";

        document.querySelector(".box h3").style.color = "black";
        document.querySelector(".box p").style.color = "black";


        document.querySelector("div .logo h2").style.color = "black";
        document.querySelector("div .logo p").style.color = "black";

        document.querySelector(".divdownload a").style.backgroundColor = "black";




    } else {
        sessionStorage.setItem("mode", "dark");
        
        //black on
        document.querySelector("#onmode").style.transform = "translateX(40px)"
        document.querySelector("#divlightmode").style.backgroundColor = "#45a0f5";

        document.querySelector("header").style.backgroundColor = "black";
        document.querySelector("body").style.backgroundColor = "rgb(15, 15, 15)";
        
        //textos//home
        document.querySelector(".bloco1 p").style.color = "white";
        document.querySelector(".bloco1 h2").style.color = "white";
        document.querySelector(".divdownload a").style.color = "black";

        document.querySelector(".box h3").style.color = "white";
        document.querySelector(".box p").style.color = "white";

        document.querySelector(".formulario .logo h2").style.color = "white";
        document.querySelector(".formulario .logo p").style.color = "white";

        document.querySelector(".divdownload a").style.backgroundColor = "white";






    }



}