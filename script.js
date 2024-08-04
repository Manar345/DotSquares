var slider1 = new Swiper(".auto-swiper", {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 3500,
    pauseOnMouseEnter: "false",
  },
  spaceBetween: 15,

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});
var slider2 = new Swiper(".auto-swiper2", {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 2500,
    pauseOnMouseEnter: "false",
  },
  spaceBetween: 20,

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    550: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 3.5,
    },
  },
  pagination: {
    el: ".advanced-swiper-pagination",
  },
});
