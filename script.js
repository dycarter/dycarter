// ========================================
// DYCARTER — HAPPY DYDAY
// ERA INTRO + MENU
// ========================================


const formingStars =
    document.querySelectorAll(".forming-star-item");

const finalStars =
    document.querySelectorAll(".star");

const eraTitle =
    document.querySelector(".era-title");

const eraIntro =
    document.querySelector(".era-intro");


// ========================================
// MENU ELEMENTS
// ========================================

const menuButton =
    document.querySelector(".menu-button");

const menuClose =
    document.querySelector(".menu-close");

const menuOverlay =
    document.querySelector(".menu-overlay");

const menuLinks =
    document.querySelectorAll(".main-menu a");


// ========================================
// INTRO STATE
// ========================================

let introFinished = false;
let introExiting = false;


// ========================================
// STAR CONFIGURATION
// ========================================

const centerX = 150;
const centerY = 160;

const outerRadius = 140;
const innerRadius = outerRadius * 0.4;

const outerAngles = [
    0,
    72,
    144,
    216,
    288
];

const innerAngles = [
    36,
    108,
    180,
    252,
    324
];


// ========================================
// STAR POSITION
// ========================================

function getPosition(radius, angle) {

    const radians =
        angle * Math.PI / 180;

    return {

        x:
            centerX +
            radius *
            Math.sin(radians),

        y:
            centerY -
            radius *
            Math.cos(radians)

    };

}


// ========================================
// POSITION THE 10 STARS
// ========================================

formingStars.forEach((star, index) => {

    let position;


    if (index < 5) {

        position =
            getPosition(
                outerRadius,
                outerAngles[index]
            );

    } else {

        position =
            getPosition(
                innerRadius,
                innerAngles[index - 5]
            );

    }


    star.style.position =
        "absolute";

    star.style.left =
        `${position.x}px`;

    star.style.top =
        `${position.y}px`;

    star.style.opacity =
        "0";

    star.style.transform =
        "translate(-50%, -50%) scale(0.2)";

});


// ========================================
// INITIAL STATE
// ========================================

finalStars.forEach((star) => {

    star.style.opacity = "0";

});

eraTitle.style.opacity = "0";


// ========================================
// FORM BIG STAR
// ========================================

setTimeout(() => {

    formingStars.forEach((star, index) => {

        setTimeout(() => {

            star.style.transition =
                "opacity 0.7s ease, transform 1.2s cubic-bezier(0.22, 1, 0.36, 1)";

            star.style.opacity =
                "1";

            star.style.transform =
                "translate(-50%, -50%) scale(1)";

        }, index * 120);

    });

}, 500);


// ========================================
// SHOW FOUR FINAL STARS
// ========================================

setTimeout(() => {

    finalStars.forEach((star, index) => {

        setTimeout(() => {

            star.style.transition =
                "opacity 1s ease";

            star.style.opacity =
                "1";

        }, index * 180);

    });

}, 5000);


// ========================================
// SHOW HAPPY DYDAY
// ========================================

setTimeout(() => {

    eraTitle.style.transition =
        "opacity 1.4s ease";

    eraTitle.style.opacity =
        "1";

    introFinished =
        true;

}, 5900);


// ========================================
// EXIT INTRO
// ========================================

function exitIntro() {

    if (
        !introFinished ||
        introExiting
    ) {

        return;

    }


    introExiting =
        true;


    // Hide title

    eraTitle.style.transition =
        "opacity 0.8s ease, transform 1s ease";

    eraTitle.style.opacity =
        "0";

    eraTitle.style.transform =
        "translate(-50%, -50%) scale(0.96)";


    // Hide stars

    setTimeout(() => {

        formingStars.forEach((star) => {

            star.style.transition =
                "opacity 1.2s ease, transform 1.2s ease";

            star.style.opacity =
                "0";

            star.style.transform =
                "translate(-50%, -50%) scale(1.08)";

        });


        finalStars.forEach((star) => {

            star.style.transition =
                "opacity 1.2s ease";

            star.style.opacity =
                "0";

        });

    }, 350);


    // Finish intro

    setTimeout(() => {

        eraIntro.classList.add(
            "intro-complete"
        );

    }, 1500);

}


// ========================================
// INTRO INTERACTION
// ========================================

document.addEventListener(
    "click",
    () => {

        exitIntro();

    }
);


document.addEventListener(
    "touchstart",
    () => {

        exitIntro();

    },
    { passive: true }
);


window.addEventListener(
    "wheel",
    () => {

        exitIntro();

    },
    { passive: true }
);


document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Enter" ||
            event.key === " " ||
            event.key === "ArrowDown"
        ) {

            exitIntro();

        }

    }
);


// ========================================
// OPEN MENU
// ========================================

function openMenu() {

    menuOverlay.classList.add(
        "menu-open"
    );

    menuOverlay.setAttribute(
        "aria-hidden",
        "false"
    );

    menuButton.setAttribute(
        "aria-expanded",
        "true"
    );

    document.body.style.overflow =
        "hidden";

}


// ========================================
// CLOSE MENU
// ========================================

function closeMenu() {

    menuOverlay.classList.remove(
        "menu-open"
    );

    menuOverlay.setAttribute(
        "aria-hidden",
        "true"
    );

    menuButton.setAttribute(
        "aria-expanded",
        "false"
    );

    document.body.style.overflow =
        "";

}


// ========================================
// MENU BUTTON
// ========================================

menuButton.addEventListener(
    "click",
    (event) => {

        event.stopPropagation();

        openMenu();

    }
);


// ========================================
// CLOSE BUTTON
// ========================================

menuClose.addEventListener(
    "click",
    () => {

        closeMenu();

    }
);


// ========================================
// MENU LINKS
// ========================================

menuLinks.forEach((link) => {

    link.addEventListener(
        "click",
        () => {

            closeMenu();

        }
    );

});


// ========================================
// ESCAPE
// ========================================

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape"
        ) {

            closeMenu();

        }

    }
);
