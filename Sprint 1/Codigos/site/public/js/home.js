
window.addEventListener("load", (event) => {
    let body = document.querySelector("body")



    if (window.screen.availWidth <= 600) {

        document.querySelector("body").style.overflow = "hidden";
        document.querySelector("header").style.display = "none";
        document.querySelector(".container2").style.display = "none";
        document.querySelector("footer").style.display = "none";


        contanimation.innerText = "0%";

        var cont = 0;

        let timmer = setInterval(() => {
            cont++

            if (cont > 100) {

                clearInterval(timmer)
                

                document.querySelector(".preencher").style.animation = "none";

                setTimeout(() => {
                    document.querySelector(".backanimation").style.display = "none";
                    document.querySelector("header").style.display = "flex";
                    document.querySelector(".container2").style.display = "flex";
                    document.querySelector("footer").style.display = "flex";
                    document.querySelector("body").style.overflowY = "auto";

                    setTimeout(() => {
                        document.querySelector(".container1 .bloco1 h2").style.opacity = "1";
                    }, 1000);

                    setTimeout(() => {
                        document.querySelector(".container1 .bloco1 h2").style.opacity = "0";

                    }, 5000);

                    setTimeout(() => {

                        document.querySelector(".container1 .bloco1 p").style.opacity = "1";
                    }, 7000);


                }, 500);

            } else {

                contanimation.innerText = cont + "%";
            }


        }, 60);



    }


   

})




window.addEventListener("scroll", (event) => {
    let scrollY = this.scrollY;

 

    if (window.screen.availWidth > 600) {


        if (scrollY > 0.7) {
            document.querySelector("header").style.backgroundColor = "black";
            console.log("b")
        } else {
            document.querySelector("header").style.backgroundColor = "transparent";
            console.log("t")
        }

    }



})





const logo = document.querySelector("header img");
logo.addEventListener("click", () => {

    if (window.screen.availWidth <= 600) {
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
    
                document.querySelector("header ul").style.display = "flex"
    
                setTimeout(() => {
                    document.querySelector("header ul").style.height = "200px"
                    document.querySelector("header ul").style.width = "50vw"
                }, 150);
    
    
    
    
    
                document.querySelector("body").style.overflow = "hidden"
                logo.classList.remove("rotatelogo")
            }, 1000);
        }
    }

    







})



