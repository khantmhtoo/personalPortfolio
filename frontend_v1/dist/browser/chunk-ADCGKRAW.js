import{a as De}from"./chunk-FQODEHBD.js";import{f as je,j as ze,q as Le,t as Fe}from"./chunk-3SSGEZZX.js";import{$a as we,Ab as q,Cb as Rt,Ga as ye,Gb as at,Ib as Me,Ja as ke,La as xe,P as zt,Q as pe,Ra as nt,Sa as L,W as Lt,Y as et,Z as ve,_ as he,aa as vt,ab as Se,ba as ge,ca as be,gb as Ae,hb as Ce,jb as Oe,kb as Ie,lb as F,mb as D,nb as Pe,rb as Ee,sb as _e,ub as Ft,vb as Dt,wb as Ne,xb as Te}from"./chunk-GUQ5ZOSL.js";function Re(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Re(Object(n),!0).forEach(function(a){y(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Re(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function It(t){"@babel/helpers - typeof";return It=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},It(t)}function Hn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function $e(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function Un(t,e,n){return e&&$e(t.prototype,e),n&&$e(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ee(t,e){return Vn(t)||Xn(t,e)||mn(t,e)||Kn()}function mt(t){return Bn(t)||Gn(t)||mn(t)||qn()}function Bn(t){if(Array.isArray(t))return Ut(t)}function Vn(t){if(Array.isArray(t))return t}function Gn(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Xn(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var a=[],r=!0,i=!1,o,s;try{for(n=n.call(t);!(r=(o=n.next()).done)&&(a.push(o.value),!(e&&a.length===e));r=!0);}catch(f){i=!0,s=f}finally{try{!r&&n.return!=null&&n.return()}finally{if(i)throw s}}return a}}function mn(t,e){if(t){if(typeof t=="string")return Ut(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ut(t,e)}}function Ut(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function qn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Kn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ye=function(){},ne={},dn={},pn=null,vn={mark:Ye,measure:Ye};try{typeof window<"u"&&(ne=window),typeof document<"u"&&(dn=document),typeof MutationObserver<"u"&&(pn=MutationObserver),typeof performance<"u"&&(vn=performance)}catch{}var Qn=ne.navigator||{},We=Qn.userAgent,He=We===void 0?"":We,$=ne,g=dn,Ue=pn,ht=vn,Rr=!!$.document,j=!!g.documentElement&&!!g.head&&typeof g.addEventListener=="function"&&typeof g.createElement=="function",hn=~He.indexOf("MSIE")||~He.indexOf("Trident/"),gt,bt,yt,kt,xt,N="___FONT_AWESOME___",Bt=16,gn="fa",bn="svg-inline--fa",G="data-fa-i2svg",Vt="data-fa-pseudo-element",Jn="data-fa-pseudo-element-pending",ae="data-prefix",re="data-icon",Be="fontawesome-i2svg",Zn="async",ta=["HTML","HEAD","STYLE","SCRIPT"],yn=function(){try{return!0}catch{return!1}}(),h="classic",b="sharp",ie=[h,b];function dt(t){return new Proxy(t,{get:function(n,a){return a in n?n[a]:n[h]}})}var st=dt((gt={},y(gt,h,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),y(gt,b,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),gt)),ft=dt((bt={},y(bt,h,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),y(bt,b,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),bt)),lt=dt((yt={},y(yt,h,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),y(yt,b,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),yt)),ea=dt((kt={},y(kt,h,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),y(kt,b,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),kt)),na=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,kn="fa-layers-text",aa=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,ra=dt((xt={},y(xt,h,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),y(xt,b,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),xt)),xn=[1,2,3,4,5,6,7,8,9,10],ia=xn.concat([11,12,13,14,15,16,17,18,19,20]),oa=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],B={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ct=new Set;Object.keys(ft[h]).map(ct.add.bind(ct));Object.keys(ft[b]).map(ct.add.bind(ct));var sa=[].concat(ie,mt(ct),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",B.GROUP,B.SWAP_OPACITY,B.PRIMARY,B.SECONDARY]).concat(xn.map(function(t){return"".concat(t,"x")})).concat(ia.map(function(t){return"w-".concat(t)})),it=$.FontAwesomeConfig||{};function fa(t){var e=g.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function la(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}g&&typeof g.querySelector=="function"&&(Ve=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],Ve.forEach(function(t){var e=ee(t,2),n=e[0],a=e[1],r=la(fa(n));r!=null&&(it[a]=r)}));var Ve,wn={styleDefault:"solid",familyDefault:"classic",cssPrefix:gn,replacementClass:bn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};it.familyPrefix&&(it.cssPrefix=it.familyPrefix);var Z=c(c({},wn),it);Z.autoReplaceSvg||(Z.observeMutations=!1);var m={};Object.keys(wn).forEach(function(t){Object.defineProperty(m,t,{enumerable:!0,set:function(n){Z[t]=n,ot.forEach(function(a){return a(m)})},get:function(){return Z[t]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(e){Z.cssPrefix=e,ot.forEach(function(n){return n(m)})},get:function(){return Z.cssPrefix}});$.FontAwesomeConfig=m;var ot=[];function ca(t){return ot.push(t),function(){ot.splice(ot.indexOf(t),1)}}var R=Bt,_={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ua(t){if(!(!t||!j)){var e=g.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=g.head.childNodes,a=null,r=n.length-1;r>-1;r--){var i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return g.head.insertBefore(e,a),t}}var ma="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ut(){for(var t=12,e="";t-- >0;)e+=ma[Math.random()*62|0];return e}function tt(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function oe(t){return t.classList?tt(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Sn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function da(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Sn(t[n]),'" ')},"").trim()}function _t(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function se(t){return t.size!==_.size||t.x!==_.x||t.y!==_.y||t.rotate!==_.rotate||t.flipX||t.flipY}function pa(t){var e=t.transform,n=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:u}}function va(t){var e=t.transform,n=t.width,a=n===void 0?Bt:n,r=t.height,i=r===void 0?Bt:r,o=t.startCentered,s=o===void 0?!1:o,f="";return s&&hn?f+="translate(".concat(e.x/R-a/2,"em, ").concat(e.y/R-i/2,"em) "):s?f+="translate(calc(-50% + ".concat(e.x/R,"em), calc(-50% + ").concat(e.y/R,"em)) "):f+="translate(".concat(e.x/R,"em, ").concat(e.y/R,"em) "),f+="scale(".concat(e.size/R*(e.flipX?-1:1),", ").concat(e.size/R*(e.flipY?-1:1),") "),f+="rotate(".concat(e.rotate,"deg) "),f}var ha=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function An(){var t=gn,e=bn,n=m.cssPrefix,a=m.replacementClass,r=ha;if(n!==t||a!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(a))}return r}var Ge=!1;function $t(){m.autoAddCss&&!Ge&&(ua(An()),Ge=!0)}var ga={mixout:function(){return{dom:{css:An,insertCss:$t}}},hooks:function(){return{beforeDOMElementCreation:function(){$t()},beforeI2svg:function(){$t()}}}},T=$||{};T[N]||(T[N]={});T[N].styles||(T[N].styles={});T[N].hooks||(T[N].hooks={});T[N].shims||(T[N].shims=[]);var I=T[N],Cn=[],ba=function t(){g.removeEventListener("DOMContentLoaded",t),Pt=1,Cn.map(function(e){return e()})},Pt=!1;j&&(Pt=(g.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(g.readyState),Pt||g.addEventListener("DOMContentLoaded",ba));function ya(t){j&&(Pt?setTimeout(t,0):Cn.push(t))}function pt(t){var e=t.tag,n=t.attributes,a=n===void 0?{}:n,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?Sn(t):"<".concat(e," ").concat(da(a),">").concat(i.map(pt).join(""),"</").concat(e,">")}function Xe(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var ka=function(e,n){return function(a,r,i,o){return e.call(n,a,r,i,o)}},Yt=function(e,n,a,r){var i=Object.keys(e),o=i.length,s=r!==void 0?ka(n,r):n,f,u,l;for(a===void 0?(f=1,l=e[i[0]]):(f=0,l=a);f<o;f++)u=i[f],l=s(l,e[u],u,e);return l};function xa(t){for(var e=[],n=0,a=t.length;n<a;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Gt(t){var e=xa(t);return e.length===1?e[0].toString(16):null}function wa(t,e){var n=t.length,a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function qe(t){return Object.keys(t).reduce(function(e,n){var a=t[n],r=!!a.icon;return r?e[a.iconName]=a.icon:e[n]=a,e},{})}function Xt(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,i=qe(e);typeof I.hooks.addPack=="function"&&!r?I.hooks.addPack(t,qe(e)):I.styles[t]=c(c({},I.styles[t]||{}),i),t==="fas"&&Xt("fa",e)}var wt,St,At,K=I.styles,Sa=I.shims,Aa=(wt={},y(wt,h,Object.values(lt[h])),y(wt,b,Object.values(lt[b])),wt),fe=null,On={},In={},Pn={},En={},_n={},Ca=(St={},y(St,h,Object.keys(st[h])),y(St,b,Object.keys(st[b])),St);function Oa(t){return~sa.indexOf(t)}function Ia(t,e){var n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!Oa(r)?r:null}var Nn=function(){var e=function(i){return Yt(K,function(o,s,f){return o[f]=Yt(s,i,{}),o},{})};On=e(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=o})}return r}),In=e(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=o})}return r}),_n=e(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(f){r[f]=o}),r});var n="far"in K||m.autoFetchSvg,a=Yt(Sa,function(r,i){var o=i[0],s=i[1],f=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:f}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});Pn=a.names,En=a.unicodes,fe=Nt(m.styleDefault,{family:m.familyDefault})};ca(function(t){fe=Nt(t.styleDefault,{family:m.familyDefault})});Nn();function le(t,e){return(On[t]||{})[e]}function Pa(t,e){return(In[t]||{})[e]}function V(t,e){return(_n[t]||{})[e]}function Tn(t){return Pn[t]||{prefix:null,iconName:null}}function Ea(t){var e=En[t],n=le("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Y(){return fe}var ce=function(){return{prefix:null,iconName:null,rest:[]}};function Nt(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,a=n===void 0?h:n,r=st[a][t],i=ft[a][t]||ft[a][r],o=t in I.styles?t:null;return i||o||null}var Ke=(At={},y(At,h,Object.keys(lt[h])),y(At,b,Object.keys(lt[b])),At);function Tt(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.skipLookups,r=a===void 0?!1:a,i=(e={},y(e,h,"".concat(m.cssPrefix,"-").concat(h)),y(e,b,"".concat(m.cssPrefix,"-").concat(b)),e),o=null,s=h;(t.includes(i[h])||t.some(function(u){return Ke[h].includes(u)}))&&(s=h),(t.includes(i[b])||t.some(function(u){return Ke[b].includes(u)}))&&(s=b);var f=t.reduce(function(u,l){var d=Ia(m.cssPrefix,l);if(K[l]?(l=Aa[s].includes(l)?ea[s][l]:l,o=l,u.prefix=l):Ca[s].indexOf(l)>-1?(o=l,u.prefix=Nt(l,{family:s})):d?u.iconName=d:l!==m.replacementClass&&l!==i[h]&&l!==i[b]&&u.rest.push(l),!r&&u.prefix&&u.iconName){var p=o==="fa"?Tn(u.iconName):{},v=V(u.prefix,u.iconName);p.prefix&&(o=null),u.iconName=p.iconName||v||u.iconName,u.prefix=p.prefix||u.prefix,u.prefix==="far"&&!K.far&&K.fas&&!m.autoFetchSvg&&(u.prefix="fas")}return u},ce());return(t.includes("fa-brands")||t.includes("fab"))&&(f.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(f.prefix="fad"),!f.prefix&&s===b&&(K.fass||m.autoFetchSvg)&&(f.prefix="fass",f.iconName=V(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||o==="fa")&&(f.prefix=Y()||"fas"),f}var _a=function(){function t(){Hn(this,t),this.definitions={}}return Un(t,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=c(c({},n.definitions[s]||{}),o[s]),Xt(s,o[s]);var f=lt[h][s];f&&Xt(f,o[s]),Nn()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,f=o.iconName,u=o.icon,l=u[2];n[s]||(n[s]={}),l.length>0&&l.forEach(function(d){typeof d=="string"&&(n[s][d]=u)}),n[s][f]=u}),n}}]),t}(),Qe=[],Q={},J={},Na=Object.keys(J);function Ta(t,e){var n=e.mixoutsTo;return Qe=t,Q={},Object.keys(J).forEach(function(a){Na.indexOf(a)===-1&&delete J[a]}),Qe.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),It(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=r[o][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){Q[o]||(Q[o]=[]),Q[o].push(i[o])})}a.provides&&a.provides(J)}),n}function qt(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var i=Q[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(a))}),e}function X(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];var r=Q[t]||[];r.forEach(function(i){i.apply(null,n)})}function M(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return J[t]?J[t].apply(null,e):void 0}function Kt(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Y();if(e)return e=V(n,e)||e,Xe(Mn.definitions,n,e)||Xe(I.styles,n,e)}var Mn=new _a,Ma=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,X("noAuto")},ja={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return j?(X("beforeI2svg",e),M("pseudoElements2svg",e),M("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,ya(function(){La({autoReplaceSvgRoot:n}),X("watch",e)})}},za={icon:function(e){if(e===null)return null;if(It(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:V(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],a=Nt(e[0]);return{prefix:a,iconName:V(a,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(m.cssPrefix,"-"))>-1||e.match(na))){var r=Tt(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||Y(),iconName:V(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var i=Y();return{prefix:i,iconName:V(i,e)||e}}}},A={noAuto:Ma,config:m,dom:ja,parse:za,library:Mn,findIconDefinition:Kt,toHtml:pt},La=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,a=n===void 0?g:n;(Object.keys(I.styles).length>0||m.autoFetchSvg)&&j&&m.autoReplaceSvg&&A.dom.i2svg({node:a})};function Mt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return pt(a)})}}),Object.defineProperty(t,"node",{get:function(){if(j){var a=g.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function Fa(t){var e=t.children,n=t.main,a=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(se(o)&&n.found&&!a.found){var s=n.width,f=n.height,u={x:s/f/2,y:.5};r.style=_t(c(c({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function Da(t){var e=t.prefix,n=t.iconName,a=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(m.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:c(c({},r),{},{id:o}),children:a}]}]}function ue(t){var e=t.icons,n=e.main,a=e.mask,r=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,f=t.title,u=t.maskId,l=t.titleId,d=t.extra,p=t.watchable,v=p===void 0?!1:p,x=a.found?a:n,C=x.width,O=x.height,P=r==="fak",k=[m.replacementClass,i?"".concat(m.cssPrefix,"-").concat(i):""].filter(function(z){return d.classes.indexOf(z)===-1}).filter(function(z){return z!==""||!!z}).concat(d.classes).join(" "),w={children:[],attributes:c(c({},d.attributes),{},{"data-prefix":r,"data-icon":i,class:k,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(C," ").concat(O)})},E=P&&!~d.classes.indexOf("fa-fw")?{width:"".concat(C/O*16*.0625,"em")}:{};v&&(w.attributes[G]=""),f&&(w.children.push({tag:"title",attributes:{id:w.attributes["aria-labelledby"]||"title-".concat(l||ut())},children:[f]}),delete w.attributes.title);var S=c(c({},w),{},{prefix:r,iconName:i,main:n,mask:a,maskId:u,transform:o,symbol:s,styles:c(c({},E),d.styles)}),H=a.found&&n.found?M("generateAbstractMask",S)||{children:[],attributes:{}}:M("generateAbstractIcon",S)||{children:[],attributes:{}},U=H.children,jt=H.attributes;return S.children=U,S.attributes=jt,s?Da(S):Fa(S)}function Je(t){var e=t.content,n=t.width,a=t.height,r=t.transform,i=t.title,o=t.extra,s=t.watchable,f=s===void 0?!1:s,u=c(c(c({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});f&&(u[G]="");var l=c({},o.styles);se(r)&&(l.transform=va({transform:r,startCentered:!0,width:n,height:a}),l["-webkit-transform"]=l.transform);var d=_t(l);d.length>0&&(u.style=d);var p=[];return p.push({tag:"span",attributes:u,children:[e]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function Ra(t){var e=t.content,n=t.title,a=t.extra,r=c(c(c({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=_t(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Wt=I.styles;function Qt(t){var e=t[0],n=t[1],a=t.slice(4),r=ee(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(B.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(B.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(B.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}var $a={found:!1,width:512,height:512};function Ya(t,e){!yn&&!m.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Jt(t,e){var n=e;return e==="fa"&&m.styleDefault!==null&&(e=Y()),new Promise(function(a,r){var i={found:!1,width:512,height:512,icon:M("missingIconAbstract")||{}};if(n==="fa"){var o=Tn(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&Wt[e]&&Wt[e][t]){var s=Wt[e][t];return a(Qt(s))}Ya(t,e),a(c(c({},$a),{},{icon:m.showMissingIcons&&t?M("missingIconAbstract")||{}:{}}))})}var Ze=function(){},Zt=m.measurePerformance&&ht&&ht.mark&&ht.measure?ht:{mark:Ze,measure:Ze},rt='FA "6.5.1"',Wa=function(e){return Zt.mark("".concat(rt," ").concat(e," begins")),function(){return jn(e)}},jn=function(e){Zt.mark("".concat(rt," ").concat(e," ends")),Zt.measure("".concat(rt," ").concat(e),"".concat(rt," ").concat(e," begins"),"".concat(rt," ").concat(e," ends"))},me={begin:Wa,end:jn},Ct=function(){};function tn(t){var e=t.getAttribute?t.getAttribute(G):null;return typeof e=="string"}function Ha(t){var e=t.getAttribute?t.getAttribute(ae):null,n=t.getAttribute?t.getAttribute(re):null;return e&&n}function Ua(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(m.replacementClass)}function Ba(){if(m.autoReplaceSvg===!0)return Ot.replace;var t=Ot[m.autoReplaceSvg];return t||Ot.replace}function Va(t){return g.createElementNS("http://www.w3.org/2000/svg",t)}function Ga(t){return g.createElement(t)}function zn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,a=n===void 0?t.tag==="svg"?Va:Ga:n;if(typeof t=="string")return g.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(zn(o,{ceFn:a}))}),r}function Xa(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Ot={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(zn(r),n)}),n.getAttribute(G)===null&&m.keepOriginalSource){var a=g.createComment(Xa(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(e){var n=e[0],a=e[1];if(~oe(n).indexOf(m.replacementClass))return Ot.replace(e);var r=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,f){return f===m.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(s){return pt(s)}).join(`
`);n.setAttribute(G,""),n.innerHTML=o}};function en(t){t()}function Ln(t,e){var n=typeof e=="function"?e:Ct;if(t.length===0)n();else{var a=en;m.mutateApproach===Zn&&(a=$.requestAnimationFrame||en),a(function(){var r=Ba(),i=me.begin("mutate");t.map(r),i(),n()})}}var de=!1;function Fn(){de=!0}function te(){de=!1}var Et=null;function nn(t){if(Ue&&m.observeMutations){var e=t.treeCallback,n=e===void 0?Ct:e,a=t.nodeCallback,r=a===void 0?Ct:a,i=t.pseudoElementsCallback,o=i===void 0?Ct:i,s=t.observeMutationsRoot,f=s===void 0?g:s;Et=new Ue(function(u){if(!de){var l=Y();tt(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!tn(d.addedNodes[0])&&(m.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&m.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&tn(d.target)&&~oa.indexOf(d.attributeName))if(d.attributeName==="class"&&Ha(d.target)){var p=Tt(oe(d.target)),v=p.prefix,x=p.iconName;d.target.setAttribute(ae,v||l),x&&d.target.setAttribute(re,x)}else Ua(d.target)&&r(d.target)})}}),j&&Et.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function qa(){Et&&Et.disconnect()}function Ka(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),n}function Qa(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=Tt(oe(t));return r.prefix||(r.prefix=Y()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Pa(r.prefix,t.innerText)||le(r.prefix,Gt(t.innerText))),!r.iconName&&m.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Ja(t){var e=tt(t.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return m.autoA11y&&(n?e["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(a||ut()):(e["aria-hidden"]="true",e.focusable="false")),e}function Za(){return{iconName:null,title:null,titleId:null,prefix:null,transform:_,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function an(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Qa(t),a=n.iconName,r=n.prefix,i=n.rest,o=Ja(t),s=qt("parseNodeAttributes",{},t),f=e.styleParser?Ka(t):[];return c({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:_,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:o}},s)}var tr=I.styles;function Dn(t){var e=m.autoReplaceSvg==="nest"?an(t,{styleParser:!1}):an(t);return~e.extra.classes.indexOf(kn)?M("generateLayersText",t,e):M("generateSvgReplacementMutation",t,e)}var W=new Set;ie.map(function(t){W.add("fa-".concat(t))});Object.keys(st[h]).map(W.add.bind(W));Object.keys(st[b]).map(W.add.bind(W));W=mt(W);function rn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!j)return Promise.resolve();var n=g.documentElement.classList,a=function(d){return n.add("".concat(Be,"-").concat(d))},r=function(d){return n.remove("".concat(Be,"-").concat(d))},i=m.autoFetchSvg?W:ie.map(function(l){return"fa-".concat(l)}).concat(Object.keys(tr));i.includes("fa")||i.push("fa");var o=[".".concat(kn,":not([").concat(G,"])")].concat(i.map(function(l){return".".concat(l,":not([").concat(G,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=tt(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var f=me.begin("onTree"),u=s.reduce(function(l,d){try{var p=Dn(d);p&&l.push(p)}catch(v){yn||v.name==="MissingIcon"&&console.error(v)}return l},[]);return new Promise(function(l,d){Promise.all(u).then(function(p){Ln(p,function(){a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),f(),l()})}).catch(function(p){f(),d(p)})})}function er(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Dn(t).then(function(n){n&&Ln([n],e)})}function nr(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||{}).icon?e:Kt(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:Kt(r||{})),t(a,c(c({},n),{},{mask:r}))}}var ar=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?_:a,i=n.symbol,o=i===void 0?!1:i,s=n.mask,f=s===void 0?null:s,u=n.maskId,l=u===void 0?null:u,d=n.title,p=d===void 0?null:d,v=n.titleId,x=v===void 0?null:v,C=n.classes,O=C===void 0?[]:C,P=n.attributes,k=P===void 0?{}:P,w=n.styles,E=w===void 0?{}:w;if(e){var S=e.prefix,H=e.iconName,U=e.icon;return Mt(c({type:"icon"},e),function(){return X("beforeDOMElementCreation",{iconDefinition:e,params:n}),m.autoA11y&&(p?k["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(x||ut()):(k["aria-hidden"]="true",k.focusable="false")),ue({icons:{main:Qt(U),mask:f?Qt(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:H,transform:c(c({},_),r),symbol:o,title:p,maskId:l,titleId:x,extra:{attributes:k,styles:E,classes:O}})})}},rr={mixout:function(){return{icon:nr(ar)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=rn,n.nodeCallback=er,n}}},provides:function(e){e.i2svg=function(n){var a=n.node,r=a===void 0?g:a,i=n.callback,o=i===void 0?function(){}:i;return rn(r,o)},e.generateSvgReplacementMutation=function(n,a){var r=a.iconName,i=a.title,o=a.titleId,s=a.prefix,f=a.transform,u=a.symbol,l=a.mask,d=a.maskId,p=a.extra;return new Promise(function(v,x){Promise.all([Jt(r,s),l.iconName?Jt(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(C){var O=ee(C,2),P=O[0],k=O[1];v([n,ue({icons:{main:P,mask:k},prefix:s,iconName:r,transform:f,symbol:u,maskId:d,title:i,titleId:o,extra:p,watchable:!0})])}).catch(x)})},e.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.transform,s=n.styles,f=_t(s);f.length>0&&(r.style=f);var u;return se(o)&&(u=M("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(u||i.icon),{children:a,attributes:r}}}},ir={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return Mt({type:"layer"},function(){X("beforeDOMElementCreation",{assembler:n,params:a});var o=[];return n(function(s){Array.isArray(s)?s.map(function(f){o=o.concat(f.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers")].concat(mt(i)).join(" ")},children:o}]})}}}},or={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,f=a.attributes,u=f===void 0?{}:f,l=a.styles,d=l===void 0?{}:l;return Mt({type:"counter",content:n},function(){return X("beforeDOMElementCreation",{content:n,params:a}),Ra({content:n.toString(),title:i,extra:{attributes:u,styles:d,classes:["".concat(m.cssPrefix,"-layers-counter")].concat(mt(s))}})})}}}},sr={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?_:r,o=a.title,s=o===void 0?null:o,f=a.classes,u=f===void 0?[]:f,l=a.attributes,d=l===void 0?{}:l,p=a.styles,v=p===void 0?{}:p;return Mt({type:"text",content:n},function(){return X("beforeDOMElementCreation",{content:n,params:a}),Je({content:n,transform:c(c({},_),i),title:s,extra:{attributes:d,styles:v,classes:["".concat(m.cssPrefix,"-layers-text")].concat(mt(u))}})})}}},provides:function(e){e.generateLayersText=function(n,a){var r=a.title,i=a.transform,o=a.extra,s=null,f=null;if(hn){var u=parseInt(getComputedStyle(n).fontSize,10),l=n.getBoundingClientRect();s=l.width/u,f=l.height/u}return m.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Je({content:n.innerHTML,width:s,height:f,transform:i,title:r,extra:o,watchable:!0})])}}},fr=new RegExp('"',"ug"),on=[1105920,1112319];function lr(t){var e=t.replace(fr,""),n=wa(e,0),a=n>=on[0]&&n<=on[1],r=e.length===2?e[0]===e[1]:!1;return{value:Gt(r?e[0]:e),isSecondary:a||r}}function sn(t,e){var n="".concat(Jn).concat(e.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(n)!==null)return a();var i=tt(t.children),o=i.filter(function(U){return U.getAttribute(Vt)===e})[0],s=$.getComputedStyle(t,e),f=s.getPropertyValue("font-family").match(aa),u=s.getPropertyValue("font-weight"),l=s.getPropertyValue("content");if(o&&!f)return t.removeChild(o),a();if(f&&l!=="none"&&l!==""){var d=s.getPropertyValue("content"),p=~["Sharp"].indexOf(f[2])?b:h,v=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?ft[p][f[2].toLowerCase()]:ra[p][u],x=lr(d),C=x.value,O=x.isSecondary,P=f[0].startsWith("FontAwesome"),k=le(v,C),w=k;if(P){var E=Ea(C);E.iconName&&E.prefix&&(k=E.iconName,v=E.prefix)}if(k&&!O&&(!o||o.getAttribute(ae)!==v||o.getAttribute(re)!==w)){t.setAttribute(n,w),o&&t.removeChild(o);var S=Za(),H=S.extra;H.attributes[Vt]=e,Jt(k,v).then(function(U){var jt=ue(c(c({},S),{},{icons:{main:U,mask:ce()},prefix:v,iconName:w,extra:H,watchable:!0})),z=g.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(z,t.firstChild):t.appendChild(z),z.outerHTML=jt.map(function(Wn){return pt(Wn)}).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function cr(t){return Promise.all([sn(t,"::before"),sn(t,"::after")])}function ur(t){return t.parentNode!==document.head&&!~ta.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Vt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function fn(t){if(j)return new Promise(function(e,n){var a=tt(t.querySelectorAll("*")).filter(ur).map(cr),r=me.begin("searchPseudoElements");Fn(),Promise.all(a).then(function(){r(),te(),e()}).catch(function(){r(),te(),n()})})}var mr={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=fn,n}}},provides:function(e){e.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?g:a;m.searchPseudoElements&&fn(r)}}},ln=!1,dr={mixout:function(){return{dom:{unwatch:function(){Fn(),ln=!0}}}},hooks:function(){return{bootstrap:function(){nn(qt("mutationObserverCallbacks",{}))},noAuto:function(){qa()},watch:function(n){var a=n.observeMutationsRoot;ln?te():nn(qt("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},cn=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},n)},pr={mixout:function(){return{parse:{transform:function(n){return cn(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=cn(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(f," ").concat(u," ").concat(l)},p={transform:"translate(".concat(o/2*-1," -256)")},v={outer:s,inner:d,path:p};return{tag:"g",attributes:c({},v.outer),children:[{tag:"g",attributes:c({},v.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:c(c({},a.icon.attributes),v.path)}]}]}}}},Ht={x:0,y:0,width:"100%",height:"100%"};function un(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function vr(t){return t.tag==="g"?t.children:[t]}var hr={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),i=r?Tt(r.split(" ").map(function(o){return o.trim()})):ce();return i.prefix||(i.prefix=Y()),n.mask=i,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.mask,s=n.maskId,f=n.transform,u=i.width,l=i.icon,d=o.width,p=o.icon,v=pa({transform:f,containerWidth:d,iconWidth:u}),x={tag:"rect",attributes:c(c({},Ht),{},{fill:"white"})},C=l.children?{children:l.children.map(un)}:{},O={tag:"g",attributes:c({},v.inner),children:[un(c({tag:l.tag,attributes:c(c({},l.attributes),v.path)},C))]},P={tag:"g",attributes:c({},v.outer),children:[O]},k="mask-".concat(s||ut()),w="clip-".concat(s||ut()),E={tag:"mask",attributes:c(c({},Ht),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,P]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:w},children:vr(p)},E]};return a.push(S,{tag:"rect",attributes:c({fill:"currentColor","clip-path":"url(#".concat(w,")"),mask:"url(#".concat(k,")")},Ht)}),{children:a,attributes:r}}}},gr={provides:function(e){var n=!1;$.matchMedia&&(n=$.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:c(c({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=c(c({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:c(c({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:c(c({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:c(c({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:c(c({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:c(c({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:c(c({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:c(c({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},br={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return n.symbol=i,n}}}},yr=[ga,rr,ir,or,sr,mr,dr,pr,hr,gr,br];Ta(yr,{mixoutsTo:A});var $r=A.noAuto,Yr=A.config,Wr=A.library,Hr=A.dom,Rn=A.parse,Ur=A.findIconDefinition,Br=A.toHtml,$n=A.icon,Vr=A.layer,kr=A.text,xr=A.counter;var Sr=["*"],Ar=t=>{throw new Error(`Could not find icon with iconName=${t.iconName} and prefix=${t.prefix} in the icon library.`)},Cr=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},Or=t=>{let e={[`fa-${t.animation}`]:t.animation!=null&&!t.animation.startsWith("spin"),"fa-spin":t.animation==="spin"||t.animation==="spin-reverse","fa-spin-pulse":t.animation==="spin-pulse"||t.animation==="spin-pulse-reverse","fa-spin-reverse":t.animation==="spin-reverse"||t.animation==="spin-pulse-reverse","fa-pulse":t.animation==="spin-pulse"||t.animation==="spin-pulse-reverse","fa-fw":t.fixedWidth,"fa-border":t.border,"fa-inverse":t.inverse,"fa-layers-counter":t.counter,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both",[`fa-${t.size}`]:t.size!==null,[`fa-rotate-${t.rotate}`]:t.rotate!==null,[`fa-pull-${t.pull}`]:t.pull!==null,[`fa-stack-${t.stackItemSize}`]:t.stackItemSize!=null};return Object.keys(e).map(n=>e[n]?n:null).filter(n=>n)},Ir=t=>t.prefix!==void 0&&t.iconName!==void 0,Pr=(t,e)=>Ir(t)?t:typeof t=="string"?{prefix:e,iconName:t}:{prefix:t[0],iconName:t[1]},Er=(()=>{let e=class e{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=zt({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),_r=(()=>{let e=class e{constructor(){this.definitions={}}addIcons(...a){for(let r of a){r.prefix in this.definitions||(this.definitions[r.prefix]={}),this.definitions[r.prefix][r.iconName]=r;for(let i of r.icon[2])typeof i=="string"&&(this.definitions[r.prefix][i]=r)}}addIconPacks(...a){for(let r of a){let i=Object.keys(r).map(o=>r[o]);this.addIcons(...i)}}getIconDefinition(a,r){return a in this.definitions&&r in this.definitions[a]?this.definitions[a][r]:null}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=zt({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),Nr=(()=>{let e=class e{constructor(){this.stackItemSize="1x"}ngOnChanges(a){if("size"in a)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=he({type:e,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[vt]});let t=e;return t})(),Tr=(()=>{let e=class e{constructor(a,r){this.renderer=a,this.elementRef=r}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(a){"size"in a&&(a.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${a.size.currentValue}`),a.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${a.size.previousValue}`))}};e.\u0275fac=function(r){return new(r||e)(L(xe),L(ke))},e.\u0275cmp=et({type:e,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[vt,at],ngContentSelectors:Sr,decls:1,vars:0,template:function(r,i){r&1&&(Ne(),Te(0))},encapsulation:2});let t=e;return t})(),Zr=(()=>{let e=class e{set spin(a){this.animation=a?"spin":void 0}set pulse(a){this.animation=a?"spin-pulse":void 0}constructor(a,r,i,o,s){this.sanitizer=a,this.config=r,this.iconLibrary=i,this.stackItem=o,this.classes=[],s!=null&&o==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(a){if(this.icon==null&&this.config.fallbackIcon==null){Cr();return}if(a){let r=this.icon!=null?this.icon:this.config.fallbackIcon,i=this.findIconDefinition(r);if(i!=null){let o=this.buildParams();this.renderIcon(i,o)}}}render(){this.ngOnChanges({})}findIconDefinition(a){let r=Pr(a,this.config.defaultPrefix);if("icon"in r)return r;let i=this.iconLibrary.getIconDefinition(r.prefix,r.iconName);return i??(Ar(r),null)}buildParams(){let a={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},r=typeof this.transform=="string"?Rn.transform(this.transform):this.transform;return{title:this.title,transform:r,classes:[...Or(a),...this.classes],mask:this.mask!=null?this.findIconDefinition(this.mask):null,styles:this.styles!=null?this.styles:{},symbol:this.symbol,attributes:{role:this.a11yRole}}}renderIcon(a,r){let i=$n(a,r);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(i.html.join(`
`))}};e.\u0275fac=function(r){return new(r||e)(L(Le),L(Er),L(_r),L(Nr,8),L(Tr,8))},e.\u0275cmp=et({type:e,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(r,i){r&2&&(_e("innerHTML",i.renderedIconHTML,ye),we("title",i.title))},inputs:{icon:"icon",title:"title",animation:"animation",spin:"spin",pulse:"pulse",mask:"mask",styles:"styles",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",classes:"classes",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[vt,at],decls:0,vars:0,template:function(r,i){},encapsulation:2});let t=e;return t})();var Yn=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=ve({type:e}),e.\u0275inj=pe({});let t=e;return t})();var Mr=(t,e)=>e.id,jr=t=>({"background-image":t});function zr(t,e){if(t&1&&Pe(0,"div",8),t&2){let n=Dt().$implicit;Se("ngStyle",Me(1,jr,"url("+n.imgLink+" )"))}}function Lr(t,e){t&1&&(F(0,"div",9)(1,"h3"),q(2,"No Project Image"),D()())}function Fr(t,e){if(t&1){let n=Ee();F(0,"div",3),Ft("click",function(){let i=ge(n).$implicit,o=Dt();return be(o.onClick(i.id))}),F(1,"h3",4),q(2),D(),F(3,"div",5)(4,"p",6),q(5),D()(),Ae(6,zr,1,3,"div",7)(7,Lr,3,0),D()}if(t&2){let n=e.$implicit;nt(2),Rt(" ",n.projectTitle," "),nt(3),Rt(" ",n.overallSummary," "),nt(1),Ce(6,n.imgLink?6:7)}}function Dr(t,e){t&1&&(F(0,"div"),q(1,"Currently No Projects Available"),D())}var fi=(()=>{let e=class e{constructor(){this._projectService=Lt(De),this._router=Lt(Fe)}routeToLink(){this._router.navigate(["project"])}onClick(a){this._router.navigate([`project/details/${a}`])}ngOnInit(){this._projectService.getProjectList(),this.projectListSubs=this._projectService.$projectList.subscribe(a=>{this.projectList=a})}ngOnDestroy(){this.projectListSubs&&this.projectListSubs.unsubscribe()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=et({type:e,selectors:[["app-projectlist"]],standalone:!0,features:[at],decls:7,vars:1,consts:[[1,"project"],[1,"project-title",3,"click"],[1,"project-container"],[1,"project-container-content",3,"click"],[1,"project-container-content-title"],[1,"project-container-content-details"],[1,"project-container-content-summary"],["class","project-container-content-preview",3,"ngStyle"],[1,"project-container-content-preview",3,"ngStyle"],[1,"project-container-content-preview"],["class","project-container-content"]],template:function(r,i){r&1&&(F(0,"div",0)(1,"h2",1),Ft("click",function(){return i.routeToLink()}),q(2,"My Projects"),D(),F(3,"div",2),Oe(4,Fr,8,3,"div",10,Mr,!1,Dr,2,0),D()()),r&2&&(nt(4),Ie(i.projectList))},dependencies:[ze,je,Yn],styles:[".project[_ngcontent-%COMP%]{margin-block:1rem}.project-title[_ngcontent-%COMP%]{margin-bottom:1rem;cursor:pointer}.project-container-content[_ngcontent-%COMP%]{padding:1rem;height:13rem;border:1px solid;margin-bottom:.5rem;position:relative;cursor:pointer}.project-container-content-preview[_ngcontent-%COMP%]{display:none}.project-container-content-title[_ngcontent-%COMP%]{margin-bottom:.5rem}.project-container-content-details[_ngcontent-%COMP%]{height:80%;display:flex;flex-direction:column;justify-content:space-between}.project-container-content-summary[_ngcontent-%COMP%]{letter-spacing:.5px;font-size:.85rem}@media screen and (min-width: 550px){.project-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:10px}.project-container-content-preview[_ngcontent-%COMP%]{box-shadow:0 0 4px #00000080;background-color:#fff;padding:1rem;height:20rem;width:100%;background-position:center;background-repeat:no-repeat;background-size:cover;position:absolute;top:-25%;display:none;transition:ease-in-out all .1s;z-index:100;align-items:center;justify-content:center}.project-container-content[_ngcontent-%COMP%]:nth-child(odd):hover   .project-container-content-preview[_ngcontent-%COMP%]{display:flex;left:calc(100% + 1rem)}.project-container-content[_ngcontent-%COMP%]:nth-child(2n):hover   .project-container-content-preview[_ngcontent-%COMP%]{display:flex;right:calc(100% + 1rem)}}"]});let t=e;return t})();export{Zr as a,Yn as b,fi as c};
