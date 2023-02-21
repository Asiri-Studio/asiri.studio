// Wrap every letter in a span
var textWrapper = document.querySelector(".ml9 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime.timeline({ loop: false }).add({
  targets: ".ml9 .letter",
  scale: [0, 1],
  duration: 640,
  elasticity: 600,
  translateY: [40, 0],
  opacity: [0, 1],
  easing: "easeOutCirc",
  delay: (el, i) => 12 * (i + 1),
});
//   .add({
//     targets: ".ml9",
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000,
//   });
