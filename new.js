
$(function($){
  $('.phone-mask').mask(('+7 ') + '(999) 999-99-99');
});


// Directions for mob.
$('.q-directions__item').on('click', function() {
  $(this).find('.q-directions__text').fadeIn(200);
})


// Hero
var swiper = new Swiper(".q-hero__sl", {
  // loop: true,
  autoplay: {
    delay: 3000,
  },
  // effect: 'fade',
  spaceBetween: 0,
  slidesPerView: 'auto',
  observer: true,
  observeSlideChildren: true,
  observeParents: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Experts
var swiper = new Swiper(".q-experts__sl", {
  spaceBetween: 15,
  slidesPerView: 'auto',
  observer: true,
  observeSlideChildren: true,
  observeParents: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    370: {
      spaceBetween: 25,
      lidesPerView: 'auto',
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

// Reviews
var swiper = new Swiper(".q-reviews__sl", {
  spaceBetween: 20,
  slidesPerView: 'auto',
  observer: true,
  observeSlideChildren: true,
  observeParents: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});



// Map
ymaps.ready(init);
var myMap, 
    myPlacemark;

function init(){ 
  myMap = new ymaps.Map("q-map", {
    center: [59.973873942866945,30.263442100077803],
    zoom: 12,
    controls: ['zoomControl']
  });
  
  myPlacemark = new ymaps.Placemark([59.973873942866945,30.263442100077803], {}, {});
  
  myMap.geoObjects.add(myPlacemark);
  myMap.behaviors.disable([
    'drag',
    'scrollZoom'
  ]);

}