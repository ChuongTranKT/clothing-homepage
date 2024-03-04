/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

//   Menu show
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// Menu hidden
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each menu item with class nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== SWIPER CLOTHING ===============*/
let swiperHome = new Swiper(".home__swiper", {
  loop: true,
  grabCursor: true,
  slidesPerView: "auto",

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    768: {
      slidesPerView: 3,
      centeredSlides: "auto",
    },
    1152: {
      centeredSlides: "auto",
      spaceBetween: -64,
    },
  },
});

/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = () => {
  const header = document.getElementById("header");

  this.scrollY >= 50 /* 'this' refers to the global (window) object */
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};

window.addEventListener("scroll", bgHeader);

/*=============== SCROLL REVEAL ANIMATION ===============*/
// Khởi tạo ScrollReveal với các cài đặt mặc định
const sr = ScrollReveal({
  origin: "top", // Xuất phát từ phía trên của phần tử
  distance: "60px", // Khoảng cách mà phần tử sẽ di chuyển
  duration: 2500, // Thời gian diễn ra hiệu ứng
});

// Reveal các phần tử .home__swiper và .home__footer khi scroll
sr.reveal(`.home__swiper,.home__footer`);

// Reveal các phần tử .home__circle với hiệu ứng scale và độ trễ 300ms
sr.reveal(`.home__circle`, { scale: 1.5, delay: 300 });

// Reveal các phần tử .home__subcircle với hiệu ứng scale và độ trễ 500ms
sr.reveal(`.home__subcircle`, { scale: 1.5, delay: 500 });

// Reveal các phần tử .home__title với hiệu ứng scale và xuất phát từ phía dưới,
// cùng với độ trễ 1200ms
sr.reveal(`.home__title`, { scale: 1, origin: "bottom", delay: 1200 });

// Reveal các phần tử .swiper-button-prev và .swiper-button-next
// với xuất phát từ phía dưới
sr.reveal(`.swiper-button-prev, .swiper-button-next`, { origin: "bottom" });
