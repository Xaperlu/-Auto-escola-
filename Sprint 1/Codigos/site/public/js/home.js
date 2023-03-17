
window.addEventListener("load", (event) => {
    contanimation.innerText = "0%";
    let cont = 0;
    let timmer = setInterval(() => {

        cont++

        if (cont >= 100) {
            clearInterval(timmer)
            document.querySelector(".preencher").style.animation = "none";

            setTimeout(() => {
                document.querySelector(".backanimation").style.display = "none";
            }, 500);
        }

        contanimation.innerText = cont + "%";





    }, 60);














})





window.addEventListener("scroll", (event) => {
    let scrollY = this.scrollY;
    let scrollX = this.scrollX;


    if (scrollY > 0.7) {
        document.querySelector("header").style.backgroundColor = "black";
    } else {
        document.querySelector("header").style.backgroundColor = "transparent";
    }

})





const logo = document.querySelector("header img");
logo.addEventListener("click", () => {

    logo.classList.add("rotatelogo")

    if (document.querySelector(".blurtrocatela").style.display == "block") {
        setTimeout(() => {

            document.querySelector(".blurtrocatela").style.display = "none"
            document.querySelector(" header ul").style.display = "none"
            document.querySelector("body").style.overflow = "auto"
            logo.classList.remove("rotatelogo")
        }, 1000);
    } else {
        setTimeout(() => {
            document.querySelector(".blurtrocatela").style.display = "block"
            document.querySelector(" header ul").style.display = "flex"
            document.querySelector("body").style.overflow = "hidden"
            logo.classList.remove("rotatelogo")
        }, 1000);
    }







})



