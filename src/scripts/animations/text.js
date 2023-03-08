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
    independentTextAnimations[index] = anime(textAnimation(letters));
  });
}

setupIndependentTextAnimations();

ScrollOut({
  targets: ".animText.self",
  once: !REVERSE_ANIMATION,
  threshold: THRESHOLD,
  onShown: function (el, ctx) {
    independentTextAnimations[ctx.index].play();
  },
  onHidden: function (el, ctx) {
    if (independentTextAnimations[ctx.index] && REVERSE_ANIMATION)
      independentTextAnimations[ctx.index].reset();
  },
});
