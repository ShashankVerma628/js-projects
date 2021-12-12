const reviews = [
    {
        id: 1,
        name: "Shashank Verma",
        image: "https://source.unsplash.com/random/200x200",
        designation: "Front End Developer",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptate, illo labore voluptatem amet porro impedit ut libero deleniti iusto.Lorem ipsum dolor sit, amet",
    },
    {
        id: 2,
        name: "Aman Kumar",
        image: "https://source.unsplash.com/random/200x201",
        designation: "Front End Developer",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptate, illo labore voluptatem amet porro impedit ut libero deleniti iusto.Lorem ipsum dolor sit, amet",
    },
    {
        id: 3,
        name: "Rebecca",
        image: "https://source.unsplash.com/random/201x200",
        designation: "intern",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptate, illo labore voluptatem amet porro impedit ut libero deleniti iusto.Lorem ipsum dolor sit, amet",
    },
    {
        id: 4,
        name: "Shivangani Vats",
        image: "https://source.unsplash.com/random/200x202",
        designation: "Python Developer",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptate, illo labore voluptatem amet porro impedit ut libero deleniti iusto.Lorem ipsum dolor sit, amet",
    }
];

const btns = document.querySelectorAll(".btn");
const reviewContainer = document.querySelector(".review-container");

let index = 0;


document.addEventListener("DOMContentLoaded",function(){
    displayData(index);
});

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        if (e.currentTarget.classList.contains("prev")) {
            if (index == 0) {
                index = reviews.length - 1;
            }
            else {
                index--;
            }
            displayData(index);
        }
        else if (e.currentTarget.classList.contains("next")) {
            if (index == reviews.length - 1) {
                index = 0;
            }
            else {
                index++;
            }
            displayData(index);
        }
        else {
            let random = Math.floor(Math.random() * reviews.length);
            index = random;
            displayData(index);
        }
    });
});


function displayData(index) {
    reviewContainer.innerHTML =
        `<div class="img-container">
    <img src=${reviews[index].image} alt="person" width="1000" height="667" />
</div>
<h2 class="name">${reviews[index].name}</h2>
<p class="designation">${reviews[index].designation}</p>
<p class="about">
    ${reviews[index].about}
</p>`;
}