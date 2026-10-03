// DYCARTER — HAPPY DYDAY INTRO

const eraIntro = document.querySelector(".era-intro");
const stars = document.querySelectorAll(".star");
const eraTitle = document.querySelector(".era-title");

const centerX = window.innerWidth / 2;
const centerY = window.innerHeight / 2;

// Start completely invisible
stars.forEach((star) => {
    star.style.opacity = "0";
    star.style.transform = "translate(-50%, -50%) scale(0.2)";
});

eraTitle.style.opacity = "0";

// Small delay before the animation begins
setTimeout(() => {

    // Stars appear
    stars.forEach((star, index) => {
        setTimeout(() => {
            star.style.transition = "opacity 0.6s ease, transform 1.2s ease";
            star.style.opacity = "1";
            star.style.transform = "translate(-50%, -50%) scale(1)";
        }, index * 180);
    });

}, 500);


// Era title appears after the stars
setTimeout(() => {

    eraTitle.style.transition = "opacity 1.2s ease";
    eraTitle.style.opacity = "1";

}, 2200);
