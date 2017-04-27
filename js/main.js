// Mobile Navigation
let toggleMenu = document.querySelectorAll(".menu-toggle")[0];
toggleMenu.addEventListener("click", menu, false);
function menu() {
    document.querySelector("body").classList.toggle("open");
}

// Random Facts Generator

let fact = ["I like Triple Chocolate Chunk Cookies.", "I Crochet.", "I like to bake.", "I like programming.",
    "I fish.", "I like to learn.", "I like reading.", "I like video games (though its been a while since I've played).",
    "I want to learn C++ or C#.", "I like to be outside."];
let currentFact = document.querySelector(".facts-p");
let getFact = document.querySelector(".random-facts button");

function newFact() {
    let randomNumber = Math.floor(Math.random() * fact.length);
    currentFact.innerHTML = fact[randomNumber];
}

getFact.addEventListener("click", newFact);
