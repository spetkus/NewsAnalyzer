import "swiper/swiper-bundle.css";
import Swiper from "swiper/bundle";
import "../about/about.css";

const swiper = new Swiper(".github-commits__cards-list", {
  slidesPerView: 3,
  spaceBetween: 16,
  wrapperClass: "github-commits__wrapper",
  slideClass: "github-commits__slide",
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  pagination: {
    el: ".github-commits__pagination",
    bulletClass: "github-commits__pagination-bullet",
    bulletActiveClass: "github-commits__pagination-bullet_type_active",
    clickable: true,
  },
  navigation: {
    nextEl: ".github-commits__button_type_next",
    prevEl: ".github-commits__button_type_prev",
  },
});
