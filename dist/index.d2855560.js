var heroCarousel = document.querySelector("#hero .carousel");
var totalImages = 4;
var imageMultiplier = 2;
var imagesLoaded = 0;
var requiredCarouselHeight = 0;
var carouselAnimation = null;
// for (var i = 0; i < imageMultiplier; i++) {
//   for (var j = 1; j <= totalImages; j++) {
//     heroCarousel.innerHTML += `<img src="./images/carousel/img${j}.png">`;
//   }
// }
var carouselImages = heroCarousel.querySelectorAll("img");
function imageLoaded() {
    imagesLoaded++;
    if (imagesLoaded >= totalImages * imageMultiplier) {
        carouselImages.forEach((img, index)=>{
            if (index < totalImages) requiredCarouselHeight += img.offsetHeight + 60;
        });
        carouselAnimation = anime({
            targets: heroCarousel,
            duration: 8000,
            elasticity: 600,
            translateY: [
                requiredCarouselHeight,
                0
            ],
            easing: "linear",
            autoplay: true,
            loop: true
        });
    }
}
carouselImages.forEach((img, index)=>{
    if (img.complete) imageLoaded();
    else img.addEventListener("load", imageLoaded);
});
heroCarousel.addEventListener("mouseenter", ()=>carouselAnimation.pause());
heroCarousel.addEventListener("mouseleave", ()=>carouselAnimation.play());

//# sourceMappingURL=index.d2855560.js.map
