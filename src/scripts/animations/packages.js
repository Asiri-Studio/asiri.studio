import anime from "animejs";
import ScrollOut from "scroll-out";
import { REVERSE_ANIMATION, textAnimation, THRESHOLD } from "../helpers";

var packageAnimations = [];

function setupPackageAnimations() {
  var packages = document.querySelectorAll(".package");

  packages.forEach((el, index) => {
    var letters = el.querySelectorAll(".animText .letter");
    var deliverables = el.querySelectorAll("ul.deliverables li");

    packageAnimations[index] = anime
      .timeline({ loop: false, autoplay: false })
      .add(textAnimation(letters))
      .add(
        {
          targets: deliverables,
          duration: 640,
          elasticity: 600,
          translateY: [24, 0],
          opacity: [0, 1],
          easing: "easeOutCirc",
          delay: anime.stagger(80),
        },
        "-=600"
      );
  });
}

setupPackageAnimations();

ScrollOut({
  targets: ".package",
  once: !REVERSE_ANIMATION,
  threshold: THRESHOLD,
  onShown: function (el, ctx) {
    packageAnimations[ctx.index].play();
  },
  onHidden: function (el, ctx) {
    if (packageAnimations[ctx.index] && REVERSE_ANIMATION)
      packageAnimations[ctx.index].reset();
  },
});
