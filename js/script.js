var today = new Date().getFullYear();
document.getElementById('copyRight').innerHTML = today;

AOS.init();
AOS.refresh();
var swiper = new Swiper('.swiper-container', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


document.querySelectorAll("h2").forEach(function (el) {
  var text = el.textContent;
  el.style.fontSize = "1.3rem";
  el.textContent = text.toUpperCase();
});

document.querySelectorAll("p .btn").forEach(function (el) {
  var text = el.textContent;
  el.style.fontSize = "1rem";
  el.textContent = text.toUpperCase();
});