const alpha = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

// const selBtns = document.querySelectorAll(".selection-btn");
const btn = document.querySelector(".btn");
const color = document.querySelector(".color");
const hexBtn = document.querySelector(".hex-btn");
const rgbBtn = document.querySelector(".rgb-btn");
const hexWindow = document.getElementById("hex");
const rgbWindow = document.getElementById("rgb");
const rgbColor = document.querySelector(".rgb-color");


rgbBtn.addEventListener("click", () => {
    rgbBtn.classList.add("active");
    hexBtn.classList.remove("active");

    rgbWindow.classList.remove("hide");
    hexWindow.classList.add("hide");
    let storedRGB = localStorage.getItem("rgbColor");
    document.body.style.backgroundColor = storedRGB;
    rgbColor.textContent = storedRGB;
    rgbColor.style.color = storedRGB;
    rgbRandomBtn.style.color = "white";
    rgbRandomBtn.style.backgroundColor = storedRGB;
});
hexBtn.addEventListener("click", () => {
    hexBtn.classList.add("active");
    rgbBtn.classList.remove("active");

    hexWindow.classList.remove("hide");
    rgbWindow.classList.add("hide");


    let storedHex = localStorage.getItem("color");
    document.body.style.backgroundColor = storedHex;
    color.textContent = storedHex;
    color.style.color = storedHex;
    btn.style.backgroundColor = storedHex;
    btn.style.color = "white";

});

// const displayWindow = document.querySelectorAll(".window");
let finalColor;


btn.addEventListener("click", changeColors);
finalColor = localStorage.getItem("color");
// console.log(finalColor);

document.addEventListener("DOMContentLoaded", function () {
    document.body.style.backgroundColor = finalColor;
    color.textContent = finalColor;
    color.style.color = finalColor;
    btn.style.backgroundColor = finalColor;
    btn.style.color = "white";
});


function changeColors() {
    let localRandomColor = randomColors();
    document.body.style.backgroundColor = localRandomColor;
    color.textContent = localRandomColor;
    color.style.color = localRandomColor;
    btn.style.backgroundColor = localRandomColor;
    btn.style.color = "white";

    localStorage.setItem("color", localRandomColor);
}

function randomColors() {
    let randomColor = "#";
    for (i = 0; i < 6; i++) {
        randomColor += alpha[Math.floor(Math.random() * alpha.length)];
    }
    return randomColor;
}


// selBtns.forEach(function (selBtn) {
//     selBtn.addEventListener("click", function (e) {
//         selBtns[0].classList.remove("active");
//         selBtns[1].classList.remove("active");

//         e.currentTarget.classList.add("active");
//         let displayWindow = e.currentTarget.textContent.trim();

//     });
// });

const rgbRandomBtn = document.querySelector(".rgb-random-btn");

function rgbColorGenerator() {
    let localRandom = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
    return localRandom;
}

rgbRandomBtn.addEventListener("click", changeRGBColors);

function changeRGBColors() {
    let localRandomRgbColor = rgbColorGenerator();
    document.body.style.backgroundColor = localRandomRgbColor;
    rgbColor.textContent = localRandomRgbColor;
    rgbColor.style.color = localRandomRgbColor;
    rgbRandomBtn.style.color = "white";
    rgbRandomBtn.style.backgroundColor = localRandomRgbColor;
    localStorage.setItem("rgbColor", localRandomRgbColor);
}