// ===============================
// AYESHA SIDDIKA PORTFOLIO
// JavaScript
// ===============================


// Display current year in footer

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


// ===============================
// NAVIGATION
// ===============================

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navigationLinks.forEach(function(item) {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});