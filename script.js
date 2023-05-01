const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const hamBtn = document.querySelector(".ham-btn");
const navMenu = document.querySelector(".menu");

hamBtn.addEventListener("click", (e) => {
  e.target.classList.toggle("active");
  navMenu.classList.toggle("active");
});

const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector(".search-input");

searchBtn.addEventListener("click", (e) => {
  e.target.classList.toggle("active");
  searchInput.classList.toggle("active");
});
