import ScrollOut from "scroll-out";
import { stampRevealAnimation, stampRotateAnimation } from "../helpers";

const stampAnimations = [];

const setupStampAnimations = () => {
  const stamps = document.querySelectorAll(".text-stamp");

  stamps.forEach((el, index) => {
    stampAnimations[index] = { rotate: stampRotateAnimation(el) };
    stampAnimations[index].reveal = stampRevealAnimation(
      el,
      stampAnimations[index].rotate
    );
  });
};

setupStampAnimations();

ScrollOut({
  targets: ".text-stamp",
  offset: 100,
  onShown: function (el, ctx) {
    stampAnimations[ctx.index].reveal.play();
  },
  onHidden: function (el, ctx) {
    stampAnimations[ctx.index].reveal.reset();
    stampAnimations[ctx.index].rotate.reset();
  },
});
