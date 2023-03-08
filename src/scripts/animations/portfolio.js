import anime from "animejs";
import ScrollOut from "scroll-out";
import { REVERSE_ANIMATION, textAnimation, THRESHOLD } from "../helpers";

var portfolioItemAnimations = [];

function setupPortfolioItemAnimations() {
  var portfolioItems = document.querySelectorAll(".portfolio__item");

  portfolioItems.forEach((el, index) => {
    var letters = el.querySelectorAll(".animText .letter");
    var buttonSVG = el.querySelector(".button svg");
    var buttonCircle = el.querySelectorAll(".button .button-circle");
    var video = el.querySelector("video");

    portfolioItemAnimations[index] = anime
      .timeline({ loop: false, autoplay: false })
      .add(textAnimation(letters))
      .add(
        {
          targets: buttonSVG,
          scale: [1.4, 1],
          duration: 640,
          elasticity: 600,
          opacity: [0, 1],
          easing: "easeOutCirc",
        },
        "-=600"
      )
      .add(
        {
          targets: buttonCircle,
          strokeDashoffset: [anime.setDashoffset, 0],
          duration: 1000,
          elasticity: 600,
          easing: "easeOutQuad",
        },
        "-=600"
      )
      .add(
        {
          targets: video,
          translateY: [40, 0],
          duration: 640,
          elasticity: 600,
          opacity: [0, 1],
          easing: "easeOutCirc",
          complete: function () {
            video.currentTime = 0;
            video.play();
          },
        },
        "-=1200"
      );
  });
}

setupPortfolioItemAnimations();

ScrollOut({
  targets: ".portfolio__item",
  once: !REVERSE_ANIMATION,
  threshold: THRESHOLD,
  onShown: function (el, ctx) {
    portfolioItemAnimations[ctx.index].play();
  },
  onHidden: function (el, ctx) {
    if (portfolioItemAnimations[ctx.index] && REVERSE_ANIMATION)
      portfolioItemAnimations[ctx.index].reset();
  },
});
