// =======================SWIPER=============================================
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
  },
  pagination: {
    el: ".advanced-swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    },
  },
});
var slider3 = new Swiper(".projects__slider", {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 2500,
  },
  pagination: {
    el: ".projects-swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var slider4 = new Swiper(".auto-swiper3", {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 2000,
    pauseOnMouseEnter: "false",
  },
  spaceBetween: 25,

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
  },
  pagination: {
    el: ".testimonial-swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    },
  },
});

//=============================================================
const logisticContent = document.querySelectorAll(".logistic__content__card");
const btnsContainer = document.querySelector(".logistic__content__btns");
const logisticBtn = document.querySelectorAll(".logistic__content__btn");

logisticBtn.forEach((btn, btnIndex) => {
  btn.addEventListener("click", () => {
    btnsContainer.querySelector(".active").classList.remove("active");
    btn.classList.add("active");

    logisticContent.forEach((contentEl, i) => {
      contentEl.classList.add("active");
      if (i !== btnIndex) {
        contentEl.classList.remove("active");
      }
    });
  });
});
