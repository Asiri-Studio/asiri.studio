import anime from "animejs";
var heroLogo = document.querySelector("#hero .logoSVG").getBoundingClientRect();

export const heroPreloaderTimeline = anime
  .timeline({ loop: false, autoplay: false })
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
      return heroLogo.top - 18 - el.getBoundingClientRect().top;
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
  });

export const preloaderTimeline = anime
  .timeline({ loop: false, autoplay: false })
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
      opacity: [0, 1],
      easing: "easeOutBack",
    },
    "-=280"
  )
  .add({
    targets: ".preloader",
    duration: 540,
    elasticity: 600,
    opacity: [1, 0],
    easing: "easeOutCirc",
    complete: function () {
      document.querySelector(".preloader").style.display = "none";
    },
  });
