// ========================================
// DYCARTER — HAPPY DYDAY
// ERA INTRO
// ========================================

const formingStars = document.querySelectorAll(".forming-star-item");
const finalStars = document.querySelectorAll(".star");
const eraTitle = document.querySelector(".era-title");
const eraIntro = document.querySelector(".era-intro");

let introFinished = false;
let introExiting = false;


// ========================================
// CONFIGURAÇÃO DA ESTRELA
// ========================================

const centerX = 150;
const centerY = 160;

const outerRadius = 140;
const innerRadius = outerRadius * 0.4;

const outerAngles = [0, 72, 144, 216, 288];
const innerAngles = [36, 108, 180, 252, 324];


// ========================================
// CALCULAR POSIÇÕES
// ========================================

function getPosition(radius, angle) {

    const radians = angle * Math.PI / 180;

    return {
        x: centerX + radius * Math.sin(radians),
        y: centerY - radius * Math.cos(radians)
    };

}


// ========================================
// POSICIONAR AS 10 ESTRELAS
// ========================================

formingStars.forEach((star, index) => {

    let position;

    if (index < 5) {

        position = getPosition(
            outerRadius,
            outerAngles[index]
        );

    } else {

        position = getPosition(
            innerRadius,
            innerAngles[index - 5]
        );

    }

    star.style.position = "absolute";
    star.style.left = `${position.x}px`;
    star.style.top = `${position.y}px`;

    star.style.opacity = "0";

    star.style.transform =
        "translate(-50%, -50%) scale(0.2)";

});


// ========================================
// ESTADO INICIAL
// ========================================

finalStars.forEach((star) => {

    star.style.opacity = "0";

});

eraTitle.style.opacity = "0";


// ========================================
// 1. FORMAR A GRANDE ESTRELA
// ========================================

setTimeout(() => {

    formingStars.forEach((star, index) => {

        setTimeout(() => {

            star.style.transition =
                "opacity 0.7s ease, transform 1.2s cubic-bezier(0.22, 1, 0.36, 1)";

            star.style.opacity = "1";

            star.style.transform =
                "translate(-50%, -50%) scale(1)";

        }, index * 120);

    });

}, 500);


// ========================================
// 2. DISPERSAR A GRANDE ESTRELA
// ========================================

setTimeout(() => {

    formingStars.forEach((star, index) => {

        setTimeout(() => {

            star.style.transition =
                "opacity 0.8s ease, transform 1s ease";

            star.style.opacity = "0";

            star.style.transform =
                "translate(-50%, -50%) scale(1.5)";

        }, index * 50);

    });

}, 4300);


// ========================================
// 3. MOSTRAR AS 4 ESTRELAS
// ========================================

setTimeout(() => {

    finalStars.forEach((star, index) => {

        setTimeout(() => {

            star.style.transition =
                "opacity 1s ease";

            star.style.opacity = "1";

        }, index * 180);

    });

}, 5000);


// ========================================
// 4. MOSTRAR HAPPY DYDAY
// ========================================

setTimeout(() => {

    eraTitle.style.transition =
        "opacity 1.4s ease";

    eraTitle.style.opacity = "1";

    introFinished = true;

}, 5900);


// ========================================
// 5. SAIR DA ERA INTRO
// ========================================

function exitIntro() {

    if (!introFinished || introExiting) {
        return;
    }

    introExiting = true;

    // O título desaparece primeiro
    eraTitle.style.transition =
        "opacity 0.8s ease, transform 1s ease";

    eraTitle.style.opacity = "0";

    eraTitle.style.transform =
        "translate(-50%, -50%) scale(0.96)";


    // As quatro estrelas continuam
    // por mais um momento
    setTimeout(() => {

        finalStars.forEach((star) => {

            star.style.transition =
                "opacity 1.2s ease";

            star.style.opacity = "0";

        });

    }, 350);


    // Depois a própria intro desaparece
    setTimeout(() => {

        eraIntro.classList.add("intro-complete");

    }, 1000);

}


// ========================================
// CLIQUE / TOQUE
// ========================================

document.addEventListener("click", () => {

    exitIntro();

});


// ========================================
// TOUCH
// ========================================

document.addEventListener("touchstart", () => {

    exitIntro();

}, { passive: true });


// ========================================
// SCROLL
// ========================================

window.addEventListener("wheel", () => {

    exitIntro();

}, { passive: true });


// ========================================
// TECLADO
// ========================================

document.addEventListener("keydown", (event) => {

    if (
        event.key === "Enter" ||
        event.key === " " ||
        event.key === "ArrowDown"
    ) {

        exitIntro();

    }

});
