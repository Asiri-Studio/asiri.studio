// Wrap every letter in a span
var textToAnimate = document.querySelectorAll(".animText");
textToAnimate.forEach((textWrapper) => {
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );
});

var heroLogo = document.querySelector("#hero .logoSVG").getBoundingClientRect();

var logoMouseEnterAnimation = (el) => {
  anime.remove(el);
  anime
    .timeline({ loop: false })
    .add({
      targets: el,
      scale: 1.15,
      translateY: -3,
      duration: 460,
      elasticity: 600,
      easing: "easeOutBack",
      delay: 120,
    })
    .add({
      targets: el,
      scale: 0.1,
      translateY: -1,
      rotate: -5,
      duration: 460,
      elasticity: 600,
      easing: "easeOutBack",
    })
    .add({
      targets: el,
      rotate: -15,
      translateY: 0,
      duration: 260,
      elasticity: 600,
      opacity: [1, 0],
      easing: "easeOutBack",
    });
};

var logoMouseLeaveAnimation = (el) => {
  anime.remove(el);
  anime({
    targets: el,
    scale: [0.1, 1],
    rotate: [-60, 0],
    duration: 560,
    elasticity: 600,
    opacity: [0, 1],
    easing: "easeOutBack",
    delay: 250,
  });
};

var logos = document.querySelectorAll("#hero .logoSVG");

logos.forEach((logo) => {
  var icon = logo.querySelector(".logoICON");
  logo.addEventListener(
    "mouseenter",
    () => logoMouseEnterAnimation(icon),
    false
  );
  logo.addEventListener(
    "mouseleave",
    () => logoMouseLeaveAnimation(icon),
    false
  );
});

anime
  .timeline({ loop: false })
  .add(
    {
      targets: ".logoSVG .logoTEXT path",
      scale: [1.2, 1],
      duration: 540,
      elasticity: 600,
      translateY: [40, 0],
      opacity: [0, 1],
      easing: "easeOutCirc",
      delay: anime.stagger(36),
    },
    "+=500"
  )
  .add(
    {
      targets: ".logoSVG .logoICON",
      scale: [0.1, 1],
      rotate: [-60, 0],
      duration: 480,
      elasticity: 600,
      opacity: [0, 1],
      easing: "easeOutBack",
    },
    "-=280"
  )
  .add({
    targets: ".preloader .logoSVG",
    left: function (el) {
      return heroLogo.left - el.getBoundingClientRect().left;
    },
    top: function (el) {
      return heroLogo.top - 20 - el.getBoundingClientRect().top;
    },
    duration: 540,
    elasticity: 600,
    easing: "easeOutCirc",
  })
  .add({
    targets: ".preloader",
    duration: 540,
    elasticity: 600,
    opacity: [1, 0],
    easing: "easeOutCirc",
    complete: function () {
      document.querySelector(".preloader").style.display = "none";
    },
  })
  .add(
    {
      targets: ".animText .letter",
      scale: [0.8, 1],
      duration: 640,
      elasticity: 600,
      translateY: [24, 0],
      opacity: [0, 1],
      easing: "easeOutCirc",
      delay: anime.stagger(4.8),
    },
    "-=400"
  )
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
      // translateY: [24, 0],
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
  );

var textAnimation = {
  targets: ".animText:not(h1) .letter",
  scale: [0.8, 1],
  duration: 640,
  elasticity: 600,
  translateY: [24, 0],
  opacity: [0, 1],
  easing: "easeOutCirc",
  delay: anime.stagger(4.8),
};

var worksStampRevealAnimation = anime({
  targets: "#works .text-stamp",
  duration: 600,
  elasticity: 600,
  opacity: [0, 1],
  easing: "easeOutCirc",
  autoplay: false,
  update: function (a) {
    if (a.progress > 20) worksStampRotateAnimation.play();
  },
});

var worksStampRotateAnimation = anime({
  targets: "#works .text-stamp",
  rotate: [0, 360],
  duration: 5000,
  elasticity: 600,
  loop: true,
  autoplay: false,
  easing: "linear",
});

var clientsAnimationTimeline = anime
  .timeline({ loop: false, autoplay: false })
  .add(textAnimation)
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
  targets: "#works .text-stamp",
  offset: 100,
  onShown: function (el) {
    worksStampRevealAnimation.play();
  },
  onHidden: function (el) {
    worksStampRevealAnimation.reset();
    worksStampRotateAnimation.reset();
  },
});

ScrollOut({
  targets: "#works .clients",
  onShown: function (el) {
    clientsAnimationTimeline.play();
  },
  onHidden: function (el) {
    clientsAnimationTimeline.reset();
  },
});
