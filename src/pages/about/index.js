import "swiper/swiper-bundle.css";
import Swiper from "swiper/bundle";
import "../about/about.css";

const swiper = new Swiper(".github-commits__cards-list", {
  slidesPerView: "auto",
  spaceBetween: 16,
  breakpoints: {
    320: {
      slidesPerView: "auto",
      spaceBetween: 8
    },
    710: {
      slidesPerView: "auto",
      spaceBetween: 4,
    },
    1025: {
      slidesPerView: "auto",
      spaceBetween: 16
    }
  },
  loop: true,
  centeredSlides: true,
  wrapperClass: "github-commits__wrapper",
  slideClass: "github-commits__slide",
  pagination: {
    el: ".github-commits__pagination",
    bulletClass: "github-commits__pagination-bullet",
    bulletActiveClass: "github-commits__pagination-bullet_type_active",
    clickable: true,
  },
  navigation: {
    nextEl: ".github-commits__button_type_next",
    prevEl: ".github-commits__button_type_prev",
  }
});
