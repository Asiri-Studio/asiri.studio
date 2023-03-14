import anime from "animejs";
import ScrollOut from "scroll-out";
import { REVERSE_ANIMATION, textAnimation, THRESHOLD } from "../helpers";

var testimonialAnimations = [];

function setupTestimonialAnimations() {
  var testimonials = document.querySelectorAll(".testimonial");

  testimonials.forEach((el, index) => {
    var letters = el.querySelectorAll(".animText .letter");
    var buttonSVG = el.querySelector(".button svg");
    var buttonCircle = el.querySelectorAll(".button .button-circle");
    var video = el.querySelector("video");

    testimonialAnimations[index] = {
      animation: anime
        .timeline({ loop: false, autoplay: false })
        .add({
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
        })
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
        ),
      callbacks: 0,
    };
  });
}

setupTestimonialAnimations();

ScrollOut({
  targets: ".testimonial",
  once: !REVERSE_ANIMATION,
  threshold: THRESHOLD,
  onShown: function (el, ctx) {
    if (testimonialAnimations[ctx.index].callbacks === 0) {
      testimonialAnimations[ctx.index].animation.play();
      testimonialAnimations[ctx.index].callbacks++;
    }
  },
  onHidden: function (el, ctx) {
    if (
      testimonialAnimations[ctx.index] &&
      testimonialAnimations[ctx.index].callbacks === 0
    )
      testimonialAnimations[ctx.index].animation.reset();
  },
});
