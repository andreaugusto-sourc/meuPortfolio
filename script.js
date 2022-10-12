const navMenu = document.querySelector('#navMenu');
const hamburguer = document.querySelector('#hamburguer');

navMenu.addEventListener("click", () => {
    navMenu.classList.toggle('active');
    hamburguer.classList.toggle('active');
});

