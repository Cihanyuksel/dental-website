/* BOOTSTRAP CAROUSEL */

const myCarousel = document.getElementById('slider');

const carousel = new bootstrap.Carousel(myCarousel, {
    touch: true,
    keyboard: true,
    pause: false,
});

/* SCROLL REVEAL */

ScrollReveal().reveal('.slideLeft', {
    origin: 'left', 
    distance: '10rem',
    duration: 800,
    easing: 'ease-in'
})

ScrollReveal().reveal('.slideBottom', {
  origin: 'bottom', 
  distance: '25rem',
  duration: 1500,
  easing: 'ease-in-out'
})

// QWL CAROUSEL  
$(document).ready(function(){
    let owl = $(".owl-carousel").owlCarousel({
        responsive: {
          1200: {
            items: 3,
            nav: true,
            loop: true,
            margin: 10,
            dots: true,

          },
          992: {
            items:2,
            nav: true,
            loop: true,
            margin: 10,
            dots: true,
          },
          768: {
            items: 2,
            nav: false,
            loop: true,
            margin: 10,
            dots: true,

          },
          576 : {
            items: 2,
            nav: false,
            loop: true,
            margin: 10
          },

          325: {
            items: 1,
            nav: false,
            margin: 10
          }
        }
    });
  });
// END QWL CAROUSEL

// SWİPPER
var swiper = new Swiper(".mySwiper", {
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      }
    },
  });