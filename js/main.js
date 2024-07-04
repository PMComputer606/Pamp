let UbicacionPrincipal = window.pageYOffset;

AOS.init();

window.addEventListener("scroll", function(){
    let desplazamientoActual = window.pageYOffset;
    if(UbicacionPrincipal >= desplazamientoActual){
        document.getElementsByTagName("nav")[0].style.top = "0px"
    }else{
        document.getElementsByTagName("nav")[0].style.top = "-100px"
    }
    UbicacionPrincipal= desplazamientoActual; //200
})

//Menu

let enlaceHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;

document.querySelectorAll(".hamburguer")[0].addEventListener("click", function(){
    if(semaforo){
        document.querySelectorAll(".hamburguer")[0].style.color ="#fff";
        semaforo= false;
    }else{
        document.querySelectorAll(".hamburguer")[0].style.color ="#000";
        semaforo= true;
    }

    enlaceHeader.classList.toggle("menudos")
})




 