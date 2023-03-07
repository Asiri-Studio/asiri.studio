import ScrollOut from "scroll-out";
import { cardAnimationTimeline } from "../helpers";

const cardAnimations = [];

const setupCardAnimations = () => {
  const cardLists = document.querySelectorAll(".card__list");
  cardLists.forEach((list, index) => {
    const cards = list.querySelectorAll(".card");
    cardAnimations[index] = cardAnimationTimeline(cards);
  });
};

setupCardAnimations();

ScrollOut({
  targets: ".card__list",
  onShown: function (el, ctx) {
    cardAnimations[ctx.index].play();
  },
  onHidden: function (el, ctx) {
    cardAnimations[ctx.index].reset();
  },
});
