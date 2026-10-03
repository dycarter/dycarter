// ========================================
// DYCARTER — HAPPY DYDAY
// STAR FORMATION
// ========================================

const formingStars = document.querySelectorAll(".forming-star-item");
const finalStars = document.querySelectorAll(".star");
const eraTitle = document.querySelector(".era-title");


// ========================================
// CONFIGURAÇÃO
// ========================================

const centerX = 150;
const centerY = 160;

const outerRadius = 140;
const innerRadius = outerRadius * 0.4;


// ========================================
// POSIÇÕES DA ESTRELA
// ========================================

// 5 pontas externas
const outerAngles = [0, 72, 144, 216, 288];

// 5 pontos internos
const innerAngles = [36, 108, 180, 252, 324];


// Converte graus para posição X/Y
function getPosition(radius, angle) {

    const radians = angle * Math.PI / 180;

    const x = centerX + radius * Math.sin(radians);
    const y = centerY - radius * Math.cos(radians);

    return {
        x,
        y
    };
}


// ========================================
// PREPARAR AS 10 ESTRELAS
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

    star.style.transform =
        "translate(-50%, -50%) scale(0.2)";

    star.style.opacity = "0";

});


// ========================================
// ESTADO INICIAL
// ========================================

finalStars.forEach((star) => {

    star.style.opacity = "0";

});

eraTitle.style.opacity = "0";


// ========================================
// 1. ESTRELAS COMEÇAM A APARECER
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
// 2. A ESTRELA FICA FORMADA
// ========================================


// ========================================
// 3. AS 10 ESTRELAS SE DISPERSAM
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
// 4. QUATRO ESTRELAS FINAIS APARECEM
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
// 5. HAPPY DYDAY APARECE
// ========================================

setTimeout(() => {

    eraTitle.style.transition =
        "opacity 1.4s ease";

    eraTitle.style.opacity = "1";

}, 5900);
