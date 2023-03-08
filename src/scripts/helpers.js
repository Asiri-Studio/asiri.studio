import anime from "animejs";

export const REVERSE_ANIMATION = true;
export const THRESHOLD = null;

export const textAnimation = (el) => ({
  targets: el,
  scale: [0.8, 1],
  duration: 640,
  elasticity: 600,
  translateY: [24, 0],
  opacity: [0, 1],
  easing: "easeOutCirc",
  delay: anime.stagger(4.8),
  autoplay: false,
});

export const stampRevealAnimation = (el, rotate) =>
  anime({
    targets: el,
    duration: 1200,
    elasticity: 600,
    opacity: [0, 1],
    easing: "easeOutCirc",
    autoplay: false,
    update: function (a) {
      if (a.progress > 10) rotate.play();
    },
  });

export const stampRotateAnimation = (el) =>
  anime({
    targets: el,
    rotate: [0, 360],
    duration: 5000,
    elasticity: 600,
    loop: true,
    autoplay: false,
    easing: "linear",
  });

export const cardAnimationTimeline = (cards) =>
  anime
    .timeline({
      autoplay: false,
      loop: false,
    })
    .add({
      targets: cards,
      duration: 640,
      elasticity: 600,
      translateY: [24, 0],
      opacity: [0, 1],
      easing: "easeOutCirc",
      delay: anime.stagger(200),
    })
    .add(textAnimation(".card .animText .letter"), "-=1200")
    .add(
      {
        targets: ".card .icon",
        duration: 640,
        elasticity: 600,
        opacity: [0, 1],
        easing: "easeOutCirc",
      },
      "-=800"
    );
