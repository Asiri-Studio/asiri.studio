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
