
let boton = document.querySelector("#toggle-btn"),
    navbar = document.querySelector("#navbar"),
    main = document.querySelector("#main-doc"),
    mediaquery = window.matchMedia("(max-width: 1000px)"),
    mediaquerymobile = window.matchMedia("(max-width: 500px)"),
    botoncerrar = document.querySelector("#cerrar"),
    navlink = document.querySelector("#menu");

boton.addEventListener("click", () => {
    navbar.classList.toggle("navbar-active");
    main.classList.toggle("main-extendido");
    boton.classList.toggle("main-extendido");
})

if (mediaquery.matches) {
    navbar.classList.remove("navbar-active");
    main.classList.add("main-extendido");
    boton.classList.add("main-extendido");
}
else {
    navbar.classList.add("navbar-active");
    main.classList.remove("main-extendido");
    boton.classList.remove("main-extendido");
}

if (mediaquerymobile.matches) {
    botoncerrar.classList.add("cerrar-active");

    botoncerrar.addEventListener("click", () => {
        navbar.classList.toggle("navbar-active");
        boton.classList.add("main-extendido");
    });

    navlink.addEventListener("click", () => {
        navbar.classList.remove("navbar-active");
        boton.classList.add("main-extendido");
    })
}
else {
    botoncerrar.classList.remove("cerrar-active");
}


// Manipulo el navbar cuando la pantalla sea menos a 1000px
window.addEventListener('resize', () => {
    let mediaquery = window.matchMedia("(max-width: 1000px)");
    let mediaquerymobile = window.matchMedia("(max-width: 500px)");
    let botoncerrar = document.querySelector("#cerrar");

    if (mediaquery.matches) {
        navbar.classList.remove("navbar-active");
        main.classList.add("main-extendido");
        boton.classList.add("main-extendido");
    }
    else {
        navbar.classList.add("navbar-active");
        main.classList.remove("main-extendido");
        boton.classList.remove("main-extendido");
    }

    if (mediaquerymobile.matches) {
        botoncerrar.classList.add("cerrar-active");

        botoncerrar.addEventListener("click", () => {
            navbar.classList.toggle("navbar-active");
            boton.classList.add("main-extendido");
        });
    }
    else {
        botoncerrar.classList.remove("cerrar-active");
    }
});