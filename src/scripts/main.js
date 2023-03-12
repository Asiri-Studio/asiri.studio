import anime from "animejs";
import ScrollOut from "scroll-out";
import { REVERSE_ANIMATION, textAnimation } from "./helpers";
import { heroPreloaderTimeline } from "./animations/preloader";

import "./animations/carousel";
// import "./animations/text";
import "./animations/logo";
import "./animations/stamp";
// import "./animations/portfolio";
// import "./animations/cardList";
// import "./animations/testimonial";
// import "./animations/packages";

// HERO & PRELOADER TIMELINE

heroPreloaderTimeline
  .add(textAnimation("h1.animText .letter"), "-=400")
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
      targets: "#hero .button svg",
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
      duration: 240,
      elasticity: 600,
      opacity: [0, 1],
      easing: "linear",
    },
    "-=1000"
  );

heroPreloaderTimeline.play();

// CLIENTS SECTION TIMELINE

var clientsAnimationTimeline = anime
  .timeline({ loop: false, autoplay: false })
  .add(textAnimation(".clients .animText .letter"))
  .add(
    {
      targets: "#works .clients__logos .logo",
      scale: [0.1, 1],
      duration: 640,
      elasticity: 600,
      opacity: [0, 1],
      easing: "easeOutCirc",
      delay: anime.stagger(200, { grid: [3, 4], from: "center" }),
    },
    "-=600"
  );

ScrollOut({
  targets: "#works .clients",
  offset: 250,
  once: !REVERSE_ANIMATION,
  onShown: function (el) {
    clientsAnimationTimeline.play();
  },
  onHidden: function (el) {
    if (REVERSE_ANIMATION) clientsAnimationTimeline.reset();
  },
});
