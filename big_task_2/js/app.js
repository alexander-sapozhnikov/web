document.addEventListener("DOMContentLoaded", function (event) {
    const swiper = new Swiper('.swiper', {
        loop: true,

        // Default parameters
        slidesPerView: 1,
        spaceBetween: 10,
        // Responsive breakpoints
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 3,
            spaceBetween: 40
          }
        },

        navigation: {
            nextEl: '.button-next',
            prevEl: '.button-prev',
          },
      })
      
    
});