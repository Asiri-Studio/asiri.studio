import anime from "animejs";
import ScrollOut from "scroll-out";
import { REVERSE_ANIMATION, textAnimation, THRESHOLD } from "../helpers";

// Wrap every letter in a span
var textToAnimate = document.querySelectorAll(".animText");
textToAnimate.forEach((textWrapper) => {
  textWrapper.innerHTML = textWrapper.innerHTML
    .split("<br>")
    .reduce(
      (result, str) =>
        result + `${str.replace(/\S/g, "<span class='letter'>$&</span>")} <br>`,
      ""
    );
});

var independentTextAnimations = [];

function setupIndependentTextAnimations() {
  var independentTexts = document.querySelectorAll(".animText.self");
  independentTexts.forEach((el, index) => {
    const letters = el.querySelectorAll(".letter");
    independentTextAnimations[index] = {
      animation: anime(textAnimation(letters)),
      callbacks: 0,
    };
  });
}

setupIndependentTextAnimations();

ScrollOut({
  targets: ".animText.self",
  once: !REVERSE_ANIMATION,
  threshold: THRESHOLD,
  onShown: function (el, ctx) {
    if (independentTextAnimations[ctx.index].callbacks === 0) {
      independentTextAnimations[ctx.index].animation.play();
      independentTextAnimations[ctx.index].callbacks++;
    }
  },
  onHidden: function (el, ctx) {
    if (
      independentTextAnimations[ctx.index] &&
      independentTextAnimations[ctx.index].callbacks === 0
    )
      independentTextAnimations[ctx.index].animation.reset();
  },
});
