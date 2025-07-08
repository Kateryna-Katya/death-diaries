import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

document.addEventListener('DOMContentLoaded', function () {
  // Ініціалізація kinds-swiper
  const kindsSwiper = new Swiper('.kinds-swiper', {
    modules: [Navigation],
    breakpoints: {
      375: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      1439: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
    },
    loop: true,
    direction: 'horizontal',
    centeredSlides: false,
    slideClass: 'kinds-swiper-slide',
    wrapperClass: 'kinds-swiper-wrapper',
    watchSlidesProgress: true,
    watchSlidesVisibility: true,

    navigation: {
      nextEl: '.kinds-custom-next',
      prevEl: '.kinds-custom-prev',
    },

    on: {
      slideChange: function () {
        const activeIndex = this.realIndex;
        const items = document.querySelectorAll('.pagination-item');

        items.forEach((item, index) => {
          item.classList.toggle('active', index === activeIndex);
        });
      },
    },
  });

  // Ініціалізація word-swiper
  const wordSwiper = new Swiper('.word-swiper', {
    modules: [Navigation],
    breakpoints: {
      375: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      1439: {
        slidesPerView: 2.4,
        spaceBetween: 40,
      },
    },
    loop: true,
    direction: 'horizontal',
    centeredSlides: false,
    slideClass: 'word-swiper-slide',
    wrapperClass: 'word-swiper-wrapper',
    watchSlidesProgress: true,
    watchSlidesVisibility: true,

    navigation: {
      nextEl: '.word-custom-next',
      prevEl: '.word-custom-prev',
    },

    on: {
      slideChange: function () {
        const activeIndex = this.realIndex;
        const items = document.querySelectorAll('.word-pagination-item');

        items.forEach((item, index) => {
          item.classList.toggle('active', index === activeIndex);
        });
      },
    },
  });
});