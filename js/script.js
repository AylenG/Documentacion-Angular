
let boton = document.querySelector("#toggle-btn"),
    navbar = document.querySelector("#navbar"),
    main = document.querySelector("#main-doc");

boton.addEventListener("click", () => {
    navbar.classList.toggle("navbar-active");
    main.classList.toggle("main-extendido");
    boton.classList.toggle("main-extendido");
})