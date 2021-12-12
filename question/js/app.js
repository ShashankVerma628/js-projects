// using selectors inside the element

const questions = document.querySelectorAll(".question");
questions.forEach((question) => {
    const btn = question.querySelector(".button");
    btn.addEventListener("click", () => {
        questions.forEach((item)=>{
            // console.log(item);
            if(item !== question){
                item.classList.remove("show-text");
            }
        });


        question.classList.toggle("show-text");
    });
});


// const btns = document.querySelectorAll(".button");

// btns.forEach((btn) => {
//     btn.addEventListener("click", (e) => {
//         let question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle("show-text");
//     });
// });