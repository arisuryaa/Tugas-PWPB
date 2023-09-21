const typing = document.querySelector(".typing");

let typed = new Typed(typing, {
  strings: ["pelajar...", "programer...", "UI UX..."],
  typeSpeed: 100,
  backSpeed: 150,
  loop: true,
});

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
