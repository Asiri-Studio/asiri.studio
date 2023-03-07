var textToAnimate=document.querySelectorAll(".animText");textToAnimate.forEach((t=>{t.innerHTML=t.innerHTML.split("<br>").reduce(((t,e)=>t+`${e.replace(/\S/g,"<span class='letter'>$&</span>")} <br>`),"")}));var heroLogo=document.querySelector("#hero .logoSVG").getBoundingClientRect(),logoMouseEnterAnimation=t=>{anime.remove(t),anime.timeline({loop:!1}).add({targets:t,scale:1.15,translateY:-3,duration:460,elasticity:600,easing:"easeOutBack",delay:120}).add({targets:t,scale:.1,translateY:-1,rotate:-5,duration:460,elasticity:600,easing:"easeOutBack"}).add({targets:t,rotate:-15,translateY:0,duration:260,elasticity:600,opacity:[1,0],easing:"easeOutBack"})},logoMouseLeaveAnimation=t=>{anime.remove(t),anime({targets:t,scale:[.1,1],rotate:[-60,0],duration:560,elasticity:600,opacity:[0,1],easing:"easeOutBack",delay:250})},logos=document.querySelectorAll(".logoSVG:not(.logoSVG--preloader)");logos.forEach((t=>{var e=t.querySelector(".logoICON");t.addEventListener("mouseenter",(()=>logoMouseEnterAnimation(e)),!1),t.addEventListener("mouseleave",(()=>logoMouseLeaveAnimation(e)),!1)}));var textAnimation=t=>({targets:t,scale:[.8,1],duration:640,elasticity:600,translateY:[24,0],opacity:[0,1],easing:"easeOutCirc",delay:anime.stagger(4.8)});anime.timeline({loop:!1}).add({targets:".logoSVG .logoTEXT path",scale:[1.2,1],duration:540,elasticity:600,translateY:[40,0],opacity:[0,1],easing:"easeOutCirc",delay:anime.stagger(36)},"+=500").add({targets:".logoSVG .logoICON",scale:[.1,1],rotate:[-60,0],duration:480,elasticity:600,opacity:[0,1],easing:"easeOutBack"},"-=280").add({targets:".preloader .logoSVG",left:function(t){return heroLogo.left-t.getBoundingClientRect().left},top:function(t){return heroLogo.top-18-t.getBoundingClientRect().top},duration:540,elasticity:600,easing:"easeOutCirc"}).add({targets:".preloader",duration:540,elasticity:600,opacity:[1,0],easing:"easeOutCirc",complete:function(){document.querySelector(".preloader").style.display="none"}}).add(textAnimation("h1.animText .letter"),"-=400").add({targets:"#hero .button",scale:[.8,1],duration:640,translateY:[24,0],elasticity:600,opacity:[0,1],easing:"easeOutCirc"},"-=600").add({targets:"#hero .button svg",scale:[1.4,1],duration:640,elasticity:600,opacity:[0,1],easing:"easeOutCirc"},"-=600").add({targets:"#hero .button .button-circle",strokeDashoffset:[anime.setDashoffset,0],duration:1e3,elasticity:600,easing:"easeOutQuad"},"-=600").add({targets:"nav li",scale:[.8,1],translateY:[24,0],duration:640,elasticity:600,opacity:[0,1],easing:"easeOutCirc",delay:anime.stagger(48)},"-=1200").add({targets:"#hero .carousel",duration:240,elasticity:600,opacity:[0,1],easing:"linear"},"-=1000");var stampRevealAnimation=anime({targets:".text-stamp",duration:1200,elasticity:600,opacity:[0,1],easing:"easeOutCirc",autoplay:!1,update:function(t){t.progress>10&&stampRotateAnimation.play()}}),stampRotateAnimation=anime({targets:".text-stamp",rotate:[0,360],duration:5e3,elasticity:600,loop:!0,autoplay:!1,easing:"linear"}),clientsAnimationTimeline=anime.timeline({loop:!1,autoplay:!1}).add(textAnimation(".clients .animText .letter")).add({targets:"#works .clients__logos .logo",scale:[.1,1],duration:640,elasticity:600,opacity:[0,1],easing:"easeOutCirc",delay:anime.stagger(200,{grid:[3,4],from:"center"})},"-=600");ScrollOut({targets:".text-stamp",offset:100,onShown:function(t){stampRevealAnimation.play()},onHidden:function(t){stampRevealAnimation.reset(),stampRotateAnimation.reset()}}),ScrollOut({targets:"#works .clients",offset:250,onShown:function(t){clientsAnimationTimeline.play()},onHidden:function(t){clientsAnimationTimeline.reset()}});var portfolioItemAnimations=[];function setupPortfolioItemAnimations(){document.querySelectorAll(".portfolio__item").forEach(((t,e)=>{var a=t.querySelectorAll(".animText .letter"),i=t.querySelector(".button svg"),o=t.querySelectorAll(".button .button-circle"),n=t.querySelector("video");portfolioItemAnimations[e]=anime.timeline({loop:!1,autoplay:!1}).add(textAnimation(a)).add({targets:i,scale:[1.4,1],duration:640,elasticity:600,opacity:[0,1],easing:"easeOutCirc"},"-=600").add({targets:o,strokeDashoffset:[anime.setDashoffset,0],duration:1e3,elasticity:600,easing:"easeOutQuad"},"-=600").add({targets:n,translateY:[40,0],duration:640,elasticity:600,opacity:[0,1],easing:"easeOutCirc",complete:function(){n.play()}},"-=1200")}))}setupPortfolioItemAnimations(),ScrollOut({targets:".portfolio__item",onShown:function(t,e){portfolioItemAnimations[e.index].play()},onHidden:function(t,e){portfolioItemAnimations[e.index]&&portfolioItemAnimations[e.index].reset(),t.querySelector("video").load()}});var reasoningAnimationTimeline=anime.timeline({loop:!1,autoplay:!1}).add(textAnimation("#reasoning .leftPad .animText .letter"));ScrollOut({targets:"#reasoning .leftPad",onShown:function(t){reasoningAnimationTimeline.play()},onHidden:function(t){reasoningAnimationTimeline.reset()}});var cardAnimationTimeline=anime.timeline({autoplay:!1,loop:!1}).add({targets:".card",duration:640,elasticity:600,translateY:[24,0],opacity:[0,1],easing:"easeOutCirc",delay:anime.stagger(200)}).add(textAnimation(".card .animText .letter"),"-=1200").add({targets:".card .icon",duration:640,elasticity:600,opacity:[0,1],easing:"easeOutCirc"},"-=800");ScrollOut({targets:".card__list",onShown:function(t){cardAnimationTimeline.play()},onHidden:function(t){cardAnimationTimeline.reset()}});
//# sourceMappingURL=index.993b8657.js.map