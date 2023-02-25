var heroCarousel = document.querySelector("#hero .carousel");
var heroCarouselImages = document.querySelectorAll("#hero .carousel img");

var totalCarouselHeight = 0;

heroCarouselImages.forEach(function (img) {
  //   img.style.height = `${img.offsetHeight - 100}px`;
  totalCarouselHeight += img.offsetHeight;
});

totalCarouselHeight /= 2.9;

heroCarousel.offsetHeight = totalCarouselHeight;
