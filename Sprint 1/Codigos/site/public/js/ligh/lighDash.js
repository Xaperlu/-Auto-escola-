console.log(sessionStorage.getItem("mode"))

if (sessionStorage.getItem("mode") != "dark") {

    document.querySelector(".painel").style.backgroundColor = "#F0F1F3"; //fundo direito
    document.querySelector(".analytics").style.backgroundColor = "#F0F1F3"; //fundo esquerdo

    document.querySelector(".navbar").style.backgroundColor = "#041737"; //menu

    document.querySelector("#unid").style.color = "#3963AD"; //letras unidade
    document.querySelector("#selUnidade").style.backgroundColor = "#DFDFDF";

    document.querySelector("#ns").style.color = "#3963AD"; //letras n serie
    document.querySelector("#selHardware").style.backgroundColor = "#DFDFDF";


    document.querySelector(".kpi").style.backgroundColor = "white";

    document.querySelector(".descricao h2").style.color = "#3963AD";

    document.querySelector("#textu").style.color = "#3963AD";
    document.querySelector("#textd").style.color = "#3963AD";
    document.querySelector("#textt").style.color = "#3963AD";
    document.querySelector("#textq").style.color = "#3963AD";



    //primeiros blocos
    document.querySelector(".box01").style.backgroundColor = "white";

    // desc nome graficos
    document.querySelector("#desctitleu").style.color = "#3963AD";
    document.querySelector("#desctitled").style.color = "#3963AD";
    document.querySelector("#desctitlet").style.color = "#3963AD";

    document.querySelector("#desctitleq").style.color = "#3963AD";
    document.querySelector("#desctitlec").style.color = "#3963AD";
    document.querySelector("#desctitles").style.color = "#3963AD";

    document.querySelector("#desctitless").style.color = "#3963AD";
    document.querySelector("#desctitleo").style.color = "#3963AD";
    document.querySelector("#desctitlen").style.color = "#3963AD";

    
    //graficos
    document.querySelector(".graf01").style.backgroundColor = "white";
    document.querySelector(".graf01").style.boxShadow = "none";

    document.querySelector(".graf02").style.backgroundColor = "white";
    document.querySelector(".graf02").style.boxShadow = "none";

    document.querySelector(".graf03").style.backgroundColor = "white";
    document.querySelector(".graf03").style.boxShadow = "none";

    document.querySelector(".graf04").style.backgroundColor = "white";
    document.querySelector(".graf04").style.boxShadow = "none";

    document.querySelector(".graf05").style.backgroundColor = "white";
    document.querySelector(".graf05").style.boxShadow = "none";

    document.querySelector(".graf06").style.backgroundColor = "white";
    document.querySelector(".graf06").style.boxShadow = "none";

    document.querySelector(".graf07").style.backgroundColor = "white";
    document.querySelector(".graf07").style.boxShadow = "none";

    document.querySelector(".graf08").style.backgroundColor = "white";
    document.querySelector(".graf08").style.boxShadow = "none";

    document.querySelector(".graf09").style.backgroundColor = "white";
    document.querySelector(".graf09").style.boxShadow = "none";










}