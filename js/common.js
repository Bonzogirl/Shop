document.addEventListener('DOMContentLoaded', function () {
  const showSlider = new Swiper('.showcase_products', {
    loop: true,
    slidesPerView: 3,
    speed: 1800,
    centeredSlides: true,
    navigation: {
      nextEl: '.showcase_navigation-next',
      prevEl: '.showcase_navigation-prev',
    },
  });

  document.querySelector('video').playbackRate = 2;
});
