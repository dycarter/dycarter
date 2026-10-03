// DYCARTER — HAPPY DYDAY INTRO

const formingStars = document.querySelectorAll(".forming-star span");
const finalStars = document.querySelectorAll(".star");
const eraTitle = document.querySelector(".era-title");

// Positions that create a large ★ shape
const starPositions = [
    [0, -150],
    [35, -45],
    [145, -45],
    [55, 20],
    [90, 125],
    [0, 60],
    [-90, 125],
    [-55, 20],
    [-145, -45],
    [-35, -45],

    [0, -95],
    [22, -28],
    [80, -28],
    [32, 12],
    [50, 75],
    [0, 35],
    [-50, 75],
    [-32, 12],
    [-80, -28],
    [-22, -28]
];


// Start with everything invisible
formingStars.forEach((star) => {
    star.style.opacity = "0";
    star.style.transform = "translate(-50%, -50%) scale(0.2)";
});


// 1. Small stars appear and form the large star
setTimeout(() => {

    formingStars.forEach((star, index) => {

        const [x, y] = starPositions[index];

        setTimeout(() => {

            star.style.transition =
                "opacity 0.5s ease, transform 1.4s cubic-bezier(0.22, 1, 0.36, 1)";

            star.style.opacity = "1";

            star.style.transform =
                `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(1)`;

        }, index * 70);

    });

}, 500);


// 2. Large star disappears
setTimeout(() => {

    formingStars.forEach((star, index) => {

        setTimeout(() => {

            star.style.transition =
                "opacity 0.7s ease, transform 0.8s ease";

            star.style.opacity = "0";
            star.style.transform =
                "translate(-50%, -50%) scale(1.8)";

        }, index * 25);

    });

}, 3000);


// 3. Four stars appear
setTimeout(() => {

    finalStars.forEach((star, index) => {

        setTimeout(() => {

            star.style.transition =
                "opacity 0.8s ease, transform 1s ease";

            star.style.opacity = "1";

        }, index * 120);

    });

}, 3700);


// 4. HAPPY DYDAY appears
setTimeout(() => {

    eraTitle.style.transition =
        "opacity 1.2s ease";

    eraTitle.style.opacity = "1";

}, 4600);
