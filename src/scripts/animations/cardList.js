import ScrollOut from "scroll-out";
import {
  cardAnimationTimeline,
  REVERSE_ANIMATION,
  THRESHOLD,
} from "../helpers";

const cardAnimations = [];

const setupCardAnimations = () => {
  const cardLists = document.querySelectorAll(".card__list");
  cardLists.forEach((list, index) => {
    const cards = list.querySelectorAll(".card");
    cardAnimations[index] = {
      animation: cardAnimationTimeline(cards),
      callbacks: 0,
    };
  });
};

setupCardAnimations();

ScrollOut({
  targets: ".card__list",
  threshold: THRESHOLD,
  once: !REVERSE_ANIMATION,
  onShown: function (el, ctx) {
    if (cardAnimations[ctx.index].callbacks === 0) {
      cardAnimations[ctx.index].animation.play();
      cardAnimations[ctx.index].callbacks++;
    }
  },
  onHidden: function (el, ctx) {
    if (
      cardAnimations[ctx.index].animation &&
      cardAnimations[ctx.index].callbacks === 0
    )
      cardAnimations[ctx.index].animation.reset();
  },
});
