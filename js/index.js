AOS.init();

$(document).ready(function () {
    // carousel
    $(".carousel").carousel({
        interval: 4000,
        pause: false,
    });

});

const specialOffers = new Swiper(".special-offers__slider", {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },
    // Set slides per view and breakpoints
    slidesPerView: 5, // Default for larger screens
    spaceBetween: 20, // Space between slides
    breakpoints: {
        992: {
            slidesPerView: 5, // 5 slides visible for screens >= 992px
        },
        768: {
            slidesPerView: 3, // 3 slides visible for screens >= 768px and < 992px
        },
        0: {
            slidesPerView: 2, // 2 slides visible for screens < 768px
        },
    },
    // Navigation arrows
    navigation: {
        nextEl: ".special-offers__slider-btns .special-offers__slider-button-next",
        prevEl: ".special-offers__slider-btns .special-offers__slider-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",
    },
});

Fancybox.bind("[data-fancybox]", {
    // Your custom options
});
// fixedIconWrapper
const openFixed = document.querySelector(".fixed__open-close-icon-wrapper");

const iconWrapper = document.querySelector(".fixed-icon-wrapper");

openFixed.addEventListener("click", () => {
    iconWrapper.classList.toggle("active");
});

//HEADER ADD ACTIVE CLASS (during scrolling)
let header = document.querySelector("header");
window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 0) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
});
