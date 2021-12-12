const hamburger = document.querySelector("#nav-toggle");
const navbar = document.querySelector(".navbar");



hamburger.addEventListener("click",()=>{
    navbar.classList.toggle("active");
});
