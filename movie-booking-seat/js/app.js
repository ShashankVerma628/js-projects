const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");

const movieSelect = document.getElementById("movie");

populateUI();

// const ticketPrice = parseInt(movieSelect.value);

let ticketPrice = +movieSelect.value;

// By putting + before it makes it an number


// save selected movie and index and price
function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem("selectedMovieIndex", movieIndex);
    localStorage.setItem("selectedMoviePrice", moviePrice);
}

// update total and count

function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll(".row .seat.selected");
    // console.log(selectedSeats);

    const selectedSeatsCount = selectedSeats.length;

    // console.log(selectedSeatCount);

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;


    // copy selected seats into arr
    // Map through array
    // return a new array indices

    const seatsIndex = [...selectedSeats].map((seat) => {
        return [...seats].indexOf(seat);
    });

    // console.log(seatsIndex);
    localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));
}

// Get data from localStorage and populate UI
function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add("selected");
            }
        });
    }

    const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");

    if(selectedMovieIndex !== null){
        movieSelect.selectedIndex = selectedMovieIndex;
    }
}

// Movie select event

movieSelect.addEventListener("change", e => {
    ticketPrice = +e.target.value;
    updateSelectedCount();

    setMovieData(e.target.selectedIndex, e.target.value);

    // console.log(e.target.selectedIndex);
    // console.log(e.target.value);

});

// Seat click event
container.addEventListener("click", (e) => {
    if (e.target.classList.contains("seat") && !e.target.classList.contains("occupied")) {
        // console.log(e.target);
        e.target.classList.toggle("selected");
        updateSelectedCount();
    }
});

// Initital counta nd total set

updateSelectedCount();