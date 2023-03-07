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

var logos = document.querySelectorAll(".logoSVG:not(.logoSVG--preloader)");

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

var textAnimation = (el) => ({
  targets: el,
  scale: [0.8, 1],
  duration: 640,
  elasticity: 600,
  translateY: [24, 0],
  opacity: [0, 1],
  easing: "easeOutCirc",
  delay: anime.stagger(4.8),
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
      return heroLogo.top - 18 - el.getBoundingClientRect().top;
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

var stampRevealAnimation = anime({
  targets: ".text-stamp",
  duration: 1200,
  elasticity: 600,
  opacity: [0, 1],
  easing: "easeOutCirc",
  autoplay: false,
  update: function (a) {
    if (a.progress > 10) stampRotateAnimation.play();
  },
});

var stampRotateAnimation = anime({
  targets: ".text-stamp",
  rotate: [0, 360],
  duration: 5000,
  elasticity: 600,
  loop: true,
  autoplay: false,
  easing: "linear",
});

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
  targets: ".text-stamp",
  offset: 100,
  onShown: function (el) {
    stampRevealAnimation.play();
  },
  onHidden: function (el) {
    stampRevealAnimation.reset();
    stampRotateAnimation.reset();
  },
});

ScrollOut({
  targets: "#works .clients",
  offset: 250,
  onShown: function (el) {
    clientsAnimationTimeline.play();
  },
  onHidden: function (el) {
    clientsAnimationTimeline.reset();
  },
});

var portfolioItemAnimations = [];

function setupPortfolioItemAnimations() {
  var portfolioItems = document.querySelectorAll(".portfolio__item");

  portfolioItems.forEach((el, index) => {
    var letters = el.querySelectorAll(".animText .letter");
    var buttonSVG = el.querySelector(".button svg");
    var buttonCircle = el.querySelectorAll(".button .button-circle");
    var video = el.querySelector("video");

    portfolioItemAnimations[index] = anime
      .timeline({ loop: false, autoplay: false })
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
      )
      .add(
        {
          targets: video,
          translateY: [40, 0],
          duration: 640,
          elasticity: 600,
          opacity: [0, 1],
          easing: "easeOutCirc",
          complete: function () {
            video.play();
          },
        },
        "-=1200"
      );
  });
}

setupPortfolioItemAnimations();

ScrollOut({
  targets: ".portfolio__item",
  onShown: function (el, ctx) {
    portfolioItemAnimations[ctx.index].play();
  },
  onHidden: function (el, ctx) {
    if (portfolioItemAnimations[ctx.index])
      portfolioItemAnimations[ctx.index].reset();
    el.querySelector("video").load();
  },
});

var reasoningAnimationTimeline = anime
  .timeline({ loop: false, autoplay: false })
  .add(textAnimation("#reasoning .leftPad .animText .letter"));

ScrollOut({
  targets: "#reasoning .leftPad",
  onShown: function (el) {
    reasoningAnimationTimeline.play();
  },
  onHidden: function (el) {
    reasoningAnimationTimeline.reset();
  },
});

var cardAnimationTimeline = anime
  .timeline({
    autoplay: false,
    loop: false,
  })
  .add({
    targets: ".card",
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

ScrollOut({
  targets: ".card__list",
  onShown: function (el) {
    cardAnimationTimeline.play();
  },
  onHidden: function (el) {
    cardAnimationTimeline.reset();
  },
});
