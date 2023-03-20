const toggleButton = document.querySelector('.toggle-menu');
const header = document.querySelector('.header');
toggleButton.addEventListener('click', function () {
  header.classList.toggle('toggle');
});

var swiper = new Swiper('.mySwiper', {
  slidesPerView: 4,
  centeredSlides: false,
  spaceBetween: 30,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    420: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
  },
});
