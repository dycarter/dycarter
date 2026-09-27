// DYCARTER — Official Website

const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");

// Header changes slightly when scrolling
window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Mobile menu
if (menuToggle && navigation) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navigation.classList.toggle("mobile-open");

        menuToggle.classList.toggle("active", isOpen);

        if (isOpen) {
            navigation.style.display = "flex";
            navigation.style.position = "absolute";
            navigation.style.top = "70px";
            navigation.style.left = "0";
            navigation.style.right = "0";
            navigation.style.flexDirection = "column";
            navigation.style.alignItems = "flex-start";
            navigation.style.gap = "24px";
            navigation.style.padding = "30px 24px";
            navigation.style.background = "rgba(5, 5, 5, 0.97)";
            navigation.style.backdropFilter = "blur(20px)";
        } else {
            navigation.removeAttribute("style");
        }
    });

    // Close menu after clicking a link
    navigation.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navigation.classList.remove("mobile-open");
            menuToggle.classList.remove("active");
            navigation.removeAttribute("style");
        });
    });
}

// Smooth reveal animation
const revealElements = document.querySelectorAll(
    ".section, .music-featured, .book-featured, .visual-card, .about-content, .contact-content"
);

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                revealObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12
    }
);

revealElements.forEach((element) => {
    element.classList.add("reveal");
    revealObserver.observe(element);
});

// Respect reduced-motion settings
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.documentElement.style.scrollBehavior = "auto";
                       }
