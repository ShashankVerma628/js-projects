const blogContainer = document.querySelector(".blogs");
const form = document.getElementById("search-form");
const inputSearch = document.getElementById("search-input");

let searchArr = [];
let blogsArr = [];


if(localStorage.getItem("blogs") == null){
    // console.log("hello");
    localStorage.setItem("blogs",JSON.stringify(blogsArr));
    blogsArr = JSON.parse(localStorage.getItem("blogs"));
    // console.log(blogsArr);
}
else{
    blogsArr = JSON.parse(localStorage.getItem("blogs"));
    // console.log(blogsArr);
}

// Store all the blogs in the localStorage
function storeBlog(){
    // console.log("hi");

    const xhr = new XMLHttpRequest();
    xhr.open("GET","https://jsonplaceholder.typicode.com/posts",true);
    
    xhr.onload = function(){
        if(this.status == 200){
            blogsArr = JSON.parse(this.responseText);
            // console.log(blogsArr);
            localStorage.setItem("blogs",JSON.stringify(blogsArr));
            // console.log(JSON.parse(localStorage.getItem("blogs")));

            updateDOM(blogsArr);
        }
        else{
            blogContainer.innerHTML = `
                <li class="blog">
                    <h2>Data Not Found</h2>
                </li>
            `;
        }
    }

    xhr.send();
}

// Update DOM function
function updateDOM(arr){
    // console.log(arr);

    blogContainer.innerHTML = "";

    let output = "";

    arr.forEach((blog,index)=>{
        output = `
            <li class="blog" data-index="${index}">
                <div class="blog-header">
                <h2 id="blog-title">${blog.title}</h2>
                <h3>Post Id : <span id="blog-id">${blog.id}</span></h3>
                </div>
                <div class="blog-body">
                    <p id="blog-content">${blog.body}</p>
                </div>
                <div class="blog-footer">
                    <h3>Posted By : <span id="user-id">${blog.userId}</span></h3>
                </div>
            </li>
        `;

        blogContainer.innerHTML += output;
    });
    // console.log(arr);
}

// clear form
function clearForm() {
    inputSearch.value = "";
}

document.addEventListener("DOMContentLoaded", storeBlog);


// search as we give input and display the item
// inputSearch.addEventListener("input",function(){

//     let val = inputSearch.value;
//     // console.log(val);

//     blogsArr.forEach((blog)=>{
//         if(blog.title.toLowerCase().indexOf(val)!=-1 || blog.body.toLowerCase().indexOf(val)!=-1){
//             // console.log("running");
//             if(!searchArr.includes(blog)){
//                 searchArr.push(blog);
//                 setTimeout(() => {
//                     updateDOM(searchArr);
//                 }, 1000);
//             }
//         }
//     });
   
// });


// search and display on submit
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let searchingArr = [];
    let val = inputSearch.value.toLowerCase();
    blogsArr.forEach((blog,index)=>{
        if(blog.title.toLowerCase().indexOf(val)!=-1 || blog.body.toLowerCase().indexOf(val)!=-1){
            if(!searchingArr.includes(blog)){
                searchingArr.push(blog);
                setTimeout(() => {
                    updateDOM(searchingArr);
                }, 1000);
            }
        }
    });
    updateDOM(searchingArr);
    clearForm();
});
