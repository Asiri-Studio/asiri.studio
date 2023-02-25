// Wrap every letter in a span
var textToAnimate = document.querySelectorAll(".animText");
textToAnimate.forEach((textWrapper) => {
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );
});

var heroLogo = document.querySelector("#hero .logoSVG").getBoundingClientRect();

console.log(heroLogo.left, heroLogo.top);

var heroCarousel = document.querySelector("#hero .carousel");
var heroCarouselImages = document.querySelectorAll("#hero .carousel img");

var totalCarouselHeight = 0;

heroCarouselImages.forEach(function (img) {
  //   img.style.height = `${img.offsetHeight - 100}px`;
  totalCarouselHeight += img.offsetHeight;
});

totalCarouselHeight /= 2.9;

heroCarousel.offsetHeight = totalCarouselHeight;

anime
  .timeline({ loop: false })
  .add(
    {
      targets: ".logoSVG .logoTEXT path",
      scale: [1.2, 1],
      duration: 540,
      elasticity: 600,
      translateY: [40, 0],
      opacity: [0, 1],
      easing: "easeOutCirc",
      delay: anime.stagger(36),
    },
    "+=500"
  )
  .add(
    {
      targets: ".logoSVG .logoICON",
      scale: [0.1, 1],
      rotate: [-60, 0],
      duration: 480,
      elasticity: 600,
      translateY: [0, 0],
      opacity: [0, 1],
      easing: "easeOutBack",
    },
    "-=280"
  )
  .add({
    targets: ".preloader .logoSVG",
    left: function (el) {
      return heroLogo.left - el.getBoundingClientRect().left;
    },
    top: function (el) {
      return heroLogo.top - 20 - el.getBoundingClientRect().top;
    },
    duration: 540,
    elasticity: 600,
    easing: "easeOutCirc",
  })
  .add({
    targets: ".preloader",
    duration: 540,
    elasticity: 600,
    opacity: [1, 0],
    easing: "easeOutCirc",
    complete: function () {
      document.querySelector(".preloader").style.display = "none";
    },
  })
  .add(
    {
      targets: ".animText .letter",
      scale: [0.8, 1],
      duration: 640,
      elasticity: 600,
      translateY: [24, 0],
      opacity: [0, 1],
      easing: "easeOutCirc",
      delay: anime.stagger(4.8),
    },
    "-=400"
  )
  .add(
    {
      targets: "#hero .button",
      scale: [0.8, 1],
      duration: 640,
      translateY: [24, 0],
      elasticity: 600,
      opacity: [0, 1],
      easing: "easeOutCirc",
    },
    "-=600"
  )
  .add(
    {
      targets: "#hero .button .button-circle",
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 1000,
      elasticity: 600,
      easing: "easeOutQuad",
    },
    "-=600"
  )
  .add(
    {
      targets: "nav li",
      scale: [0.8, 1],
      translateY: [24, 0],
      duration: 640,
      elasticity: 600,
      opacity: [0, 1],
      easing: "easeOutCirc",
      delay: anime.stagger(48),
    },
    "-=1200"
  )
  .add(
    {
      targets: "#hero .carousel",
      duration: 500,
      elasticity: 600,
      opacity: [0, 1],
      easing: "linear",
    },
    "-=1200"
  );
