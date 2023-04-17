  
/*==========Swiper-1==========*/
var swiper1 = new Swiper(".mySwiper-one", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  initialSlide: 3,
  coverflowEffect: {
    rotate: 5,
    stretch: 0,
    depth: 300,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

/*==========Swiper-2==========*/
var swiper2 = new Swiper(".mySwiper-two", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  initialSlide: 4,
  coverflowEffect: {
    rotate: 5,
    stretch: 0,
    depth: 300,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
