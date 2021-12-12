const modalBtn = document.querySelector("#modal-btn");
const crossBtn = document.querySelector("#cross");
const modalOverlay = document.querySelector(".modal-overlay");

modalBtn.addEventListener("click",()=>{
    modalOverlay.classList.add("active");
});

crossBtn.addEventListener("click",()=>{
    modalOverlay.classList.remove("active");
});


