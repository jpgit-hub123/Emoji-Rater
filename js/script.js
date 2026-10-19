const starsEl = document.querySelectorAll(".fa-star");

console.log(starsEl);

starsEl.forEach((star, clickedIndex) => {
    star.addEventListener("click", () => {
        updateRate(clickedIndex);
    })
});

function updateRate(index) { 
    starsEl.forEach((star, starIndex) => { 
        if (starIndex < index + 1) { 
            star.classList.add("active");
        } else {
            star.classList.remove("active");
        }
    });
}


