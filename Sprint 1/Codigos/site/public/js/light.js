

console.log(sessionStorage.getItem("mode"))

if (sessionStorage.getItem("mode") == "dark") {
    document.querySelector("#onmode").style.transform = "translateX(5px)"
    lightmode()
} else {
    document.querySelector("#onmode").style.transform = "translateX(40px)"
    lightmode()
}




function lightmode() {
    console.log("botão precionado")



    if (document.querySelector("#onmode").style.transform == "translateX(40px)") {

        sessionStorage.setItem("mode", "white");
        //white on
        document.querySelector("#onmode").style.transform = "translateX(5px)"
        document.querySelector("#divlightmode").style.backgroundColor = "gray";

        document.querySelector("header").style.backgroundColor = "black"; //tela inicial
        document.querySelector("body").style.backgroundColor = "#D6F1FF"; //tela inicial

        // textos//home
        document.querySelector(".bloco1 p").style.color = "black"; //tela inicial
        document.querySelector(".bloco1 h2").style.color = "black"; //tela inicial
        document.querySelector(".divdownload a").style.color = "white"; //tela inicial
        document.querySelector(".divdownload a").style.backgroundColor = "black"; //tela inicial

        document.querySelector(".container2").style.color = "black";
        document.querySelector(" #boxone").style.backgroundColor = "#52C5FF"; //tela inicial
        document.querySelector(" #boxtwo").style.backgroundColor = "#52C5FF"; //tela inicial
        document.querySelector(" #boxtree").style.backgroundColor = "#52C5FF"; //tela inicial
        document.querySelector(".container3 p").style.color = "black"; //tela inicial




        document.querySelector("div .logo h2").style.color = "black";
        document.querySelector("div .logo p").style.color = "black";


        document.querySelector("main").style.color = "red";



        //sobre
        document.querySelector("#boxu .box").style.backgroundColor = "#a0a5a441";
        document.querySelector(".container2 .box").style.backgroundColor = "red";




    } else {
        sessionStorage.setItem("mode", "dark");

        //black on
        document.querySelector("#onmode").style.transform = "translateX(40px)"
        document.querySelector("#divlightmode").style.backgroundColor = "#45a0f5";

        document.querySelector("header").style.backgroundColor = "black"; //tela inicial
        document.querySelector("body").style.backgroundColor = "rgb(15, 15, 15)"; //tela inicial


        //textos//home
        document.querySelector(".bloco1 h2").style.color = "white"; //tela inicial
        document.querySelector(".bloco1 p").style.color = "white";  //tela inicial
        document.querySelector(".divdownload a").style.color = "black"; //tela inicial
        document.querySelector(".divdownload a").style.backgroundColor = "white"; //tela inicial

        document.querySelector(".container2").style.color = "whitesmoke"; //tela inicial
        document.querySelector(" #boxone").style.backgroundColor = "rgba(128, 128, 128, 0.179)"; //tela inicial
        document.querySelector(" #boxtwo").style.backgroundColor = "rgba(128, 128, 128, 0.179)"; //tela inicial
        document.querySelector(" #boxtree").style.backgroundColor = "rgba(128, 128, 128, 0.179)"; //tela inicial
        document.querySelector(".container3").style.color = "whitesmoke"; //tela inicial

        document.querySelector(".formulario .logo h2").style.color = "white";
        document.querySelector(".formulario .logo p").style.color = "white";



        //sobre
        document.querySelector("main").style.color = "white";

        //sobre
        document.querySelector(".box #boxu").style.backgroundColor = "black";






    }



}