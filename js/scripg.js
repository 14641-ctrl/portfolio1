/* ========================================
   PORTFOLIO JAVASCRIPT
======================================== */


/* ---------- Current Page ---------- */

const currentPage = window.location.pathname.split("/").pop();

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {

    const linkPage = link.getAttribute("href");

    if (
        linkPage === currentPage ||
        (currentPage === "" && linkPage === "index.html")
    ) {
        link.classList.add("active");
    }

});


/* ---------- Scroll Animation ---------- */

const cards = document.querySelectorAll(
    ".card, .timeline-item, .activity-card, .contact-card"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.animation =
                    "fadeUp 0.7s ease forwards";

            }

        });

    },
    {
        threshold: 0.15
    }
);


cards.forEach(card => {

    card.style.opacity = "0";

    observer.observe(card);

});
