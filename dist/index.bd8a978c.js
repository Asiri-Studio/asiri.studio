var ScrollOut=function(){"use strict";function e(e,t,n){return e<t?t:n<e?n:e}function t(e){return+(0<e)-+(e<0)}var n,r={};function i(e){return"-"+e[0].toLowerCase()}function o(e){return r[e]||(r[e]=e.replace(/([A-Z])/g,i))}function l(e,t){return e&&0!==e.length?e.nodeName?[e]:[].slice.call(e[0].nodeName?e:(t||document.documentElement).querySelectorAll(e)):[]}function c(e,t){for(var n in t)n.indexOf("_")&&e.setAttribute("data-"+o(n),t[n])}var s=[];function f(){n=0,s.slice().forEach((function(e){return e()})),u()}function u(){!n&&s.length&&(n=requestAnimationFrame(f))}function a(e,t,n,r){return"function"==typeof e?e(t,n,r):e}function d(){}return function(r){var i,f,v,h,m=(r=r||{}).onChange||d,g=r.onHidden||d,p=r.onShown||d,w=r.onScroll||d,X=r.cssProps?(i=r.cssProps,function(e,t){for(var n in t)n.indexOf("_")&&(!0===i||i[n])&&e.style.setProperty("--"+o(n),(r=t[n],Math.round(1e4*r)/1e4));var r}):d,Y=r.scrollingElement,b=Y?l(Y)[0]:window,D=Y?l(Y)[0]:document.documentElement,E=!1,L={},P=[];function _(){P=l(r.targets||"[data-scroll]",l(r.scope||D)[0]).map((function(e){return{element:e}}))}function H(){var i=D.clientWidth,o=D.clientHeight,l=t(-f+(f=D.scrollLeft||window.pageXOffset)),c=t(-v+(v=D.scrollTop||window.pageYOffset)),d=D.scrollLeft/(D.scrollWidth-i||1),m=D.scrollTop/(D.scrollHeight-o||1);E=E||L.scrollDirX!==l||L.scrollDirY!==c||L.scrollPercentX!==d||L.scrollPercentY!==m,L.scrollDirX=l,L.scrollDirY=c,L.scrollPercentX=d,L.scrollPercentY=m;for(var g,p=!1,w=0;w<P.length;w++){for(var X=P[w],Y=X.element,_=Y,H=0,W=0;H+=_.offsetLeft,W+=_.offsetTop,(_=_.offsetParent)&&_!==b;);var x,O=Y.clientHeight||Y.offsetHeight||0,y=Y.clientWidth||Y.offsetWidth||0,C=(e(H+y,f,f+i)-e(H,f,f+i))/y,S=(e(W+O,v,v+o)-e(W,v,v+o))/O,T=1===C?0:t(H-f),q=1===S?0:t(W-v),z=e((f-(y/2+H-i/2))/(i/2),-1,1),F=e((v-(O/2+W-o/2))/(o/2),-1,1);x=r.offset?a(r.offset,Y,X,D)>v?0:1:(a(r.threshold,Y,X,D)||0)<C*S?1:0;var N=X.visible!==x;(X._changed||N||X.visibleX!==C||X.visibleY!==S||X.index!==w||X.elementHeight!==O||X.elementWidth!==y||X.offsetX!==H||X.offsetY!==W||X.intersectX!=X.intersectX||X.intersectY!=X.intersectY||X.viewportX!==z||X.viewportY!==F)&&(p=!0,X._changed=!0,X._visibleChanged=N,X.visible=x,X.elementHeight=O,X.elementWidth=y,X.index=w,X.offsetX=H,X.offsetY=W,X.visibleX=C,X.visibleY=S,X.intersectX=T,X.intersectY=q,X.viewportX=z,X.viewportY=F,X.visible=x)}h||!E&&!p||(g=A,s.push(g),u(),h=function(){!(s=s.filter((function(e){return e!==g}))).length&&n&&(cancelAnimationFrame(n),n=0)})}function A(){W(),E&&(E=!1,c(D,{scrollDirX:L.scrollDirX,scrollDirY:L.scrollDirY}),X(D,L),w(D,L,P));for(var e=P.length-1;-1<e;e--){var t=P[e],n=t.element,i=t.visible,o=n.hasAttribute("scrollout-once")||!1;t._changed&&(t._changed=!1,X(n,t)),t._visibleChanged&&(c(n,{scroll:i?"in":"out"}),m(n,t,D),(i?p:g)(n,t,D)),i&&(r.once||o)&&P.splice(e,1)}}function W(){h&&(h(),h=void 0)}_(),H(),A();var x=0,O=function(){x=x||setTimeout((function(){x=0,H()}),0)};return window.addEventListener("resize",O),b.addEventListener("scroll",O),{index:_,update:H,teardown:function(){W(),window.removeEventListener("resize",O),b.removeEventListener("scroll",O)}}}}();
//# sourceMappingURL=index.bd8a978c.js.map
