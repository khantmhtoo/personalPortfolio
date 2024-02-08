import{j as v}from"./chunk-3SSGEZZX.js";import{Gb as N,Ob as D,P as O,Q as L,Sa as C,Y as S,Z as I,_ as w,a as m,h as y,wb as T,xb as _}from"./chunk-GUQ5ZOSL.js";var A=class a{static equals(i,t,e){return e?this.resolveFieldData(i,e)===this.resolveFieldData(t,e):this.equalsByValue(i,t)}static equalsByValue(i,t){if(i===t)return!0;if(i&&t&&typeof i=="object"&&typeof t=="object"){var e=Array.isArray(i),s=Array.isArray(t),n,r,o;if(e&&s){if(r=i.length,r!=t.length)return!1;for(n=r;n--!==0;)if(!this.equalsByValue(i[n],t[n]))return!1;return!0}if(e!=s)return!1;var l=this.isDate(i),d=this.isDate(t);if(l!=d)return!1;if(l&&d)return i.getTime()==t.getTime();var c=i instanceof RegExp,u=t instanceof RegExp;if(c!=u)return!1;if(c&&u)return i.toString()==t.toString();var p=Object.keys(i);if(r=p.length,r!==Object.keys(t).length)return!1;for(n=r;n--!==0;)if(!Object.prototype.hasOwnProperty.call(t,p[n]))return!1;for(n=r;n--!==0;)if(o=p[n],!this.equalsByValue(i[o],t[o]))return!1;return!0}return i!==i&&t!==t}static resolveFieldData(i,t){if(i&&t){if(this.isFunction(t))return t(i);if(t.indexOf(".")==-1)return i[t];{let e=t.split("."),s=i;for(let n=0,r=e.length;n<r;++n){if(s==null)return null;s=s[e[n]]}return s}}else return null}static isFunction(i){return!!(i&&i.constructor&&i.call&&i.apply)}static reorderArray(i,t,e){let s;i&&t!==e&&(e>=i.length&&(e%=i.length,t%=i.length),i.splice(e,0,i.splice(t,1)[0]))}static insertIntoOrderedArray(i,t,e,s){if(e.length>0){let n=!1;for(let r=0;r<e.length;r++)if(this.findIndexInList(e[r],s)>t){e.splice(r,0,i),n=!0;break}n||e.push(i)}else e.push(i)}static findIndexInList(i,t){let e=-1;if(t){for(let s=0;s<t.length;s++)if(t[s]==i){e=s;break}}return e}static contains(i,t){if(i!=null&&t&&t.length){for(let e of t)if(this.equals(i,e))return!0}return!1}static removeAccents(i){return i&&(i=i.normalize("NFKD").replace(new RegExp("\\p{Diacritic}","gu"),"")),i}static isDate(i){return Object.prototype.toString.call(i)==="[object Date]"}static isEmpty(i){return i==null||i===""||Array.isArray(i)&&i.length===0||!this.isDate(i)&&typeof i=="object"&&Object.keys(i).length===0}static isNotEmpty(i){return!this.isEmpty(i)}static compare(i,t,e,s=1){let n=-1,r=this.isEmpty(i),o=this.isEmpty(t);return r&&o?n=0:r?n=s:o?n=-s:typeof i=="string"&&typeof t=="string"?n=i.localeCompare(t,e,{numeric:!0}):n=i<t?-1:i>t?1:0,n}static sort(i,t,e=1,s,n=1){let r=a.compare(i,t,s,e),o=e;return(a.isEmpty(i)||a.isEmpty(t))&&(o=n===1?e:n),o*r}static merge(i,t){if(!(i==null&&t==null)){{if((i==null||typeof i=="object")&&(t==null||typeof t=="object"))return m(m({},i||{}),t||{});if((i==null||typeof i=="string")&&(t==null||typeof t=="string"))return[i||"",t||""].join(" ")}return t||i}}static isPrintableCharacter(i=""){return this.isNotEmpty(i)&&i.length===1&&i.match(/\S| /)}static getItemValue(i,...t){return this.isFunction(i)?i(...t):i}static findLastIndex(i,t){let e=-1;if(this.isNotEmpty(i))try{e=i.findLastIndex(t)}catch{e=i.lastIndexOf([...i].reverse().find(t))}return e}static findLast(i,t){let e;if(this.isNotEmpty(i))try{e=i.findLast(t)}catch{e=[...i].reverse().find(t)}return e}static deepEquals(i,t){if(i===t)return!0;if(i&&t&&typeof i=="object"&&typeof t=="object"){var e=Array.isArray(i),s=Array.isArray(t),n,r,o;if(e&&s){if(r=i.length,r!=t.length)return!1;for(n=r;n--!==0;)if(!this.deepEquals(i[n],t[n]))return!1;return!0}if(e!=s)return!1;var l=i instanceof Date,d=t instanceof Date;if(l!=d)return!1;if(l&&d)return i.getTime()==t.getTime();var c=i instanceof RegExp,u=t instanceof RegExp;if(c!=u)return!1;if(c&&u)return i.toString()==t.toString();var p=Object.keys(i);if(r=p.length,r!==Object.keys(t).length)return!1;for(n=r;n--!==0;)if(!Object.prototype.hasOwnProperty.call(t,p[n]))return!1;for(n=r;n--!==0;)if(o=p[n],!this.deepEquals(i[o],t[o]))return!1;return!0}return i!==i&&t!==t}},b=0;function B(a="pn_id_"){return b++,`${a}${b}`}function H(){let a=[],i=(n,r)=>{let o=a.length>0?a[a.length-1]:{key:n,value:r},l=o.value+(o.key===n?0:r)+2;return a.push({key:n,value:l}),l},t=n=>{a=a.filter(r=>r.value!==n)},e=()=>a.length>0?a[a.length-1].value:0,s=n=>n&&parseInt(n.style.zIndex,10)||0;return{get:s,set:(n,r,o)=>{r&&(r.style.zIndex=String(i(n,o)))},clear:n=>{n&&(t(s(n)),n.style.zIndex="")},getCurrent:()=>e()}}var G=H();var x=["*"];var f=(()=>{class a{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return a})();var Y=(()=>{class a{messageSource=new y;clearSource=new y;messageObserver=this.messageSource.asObservable();clearObserver=this.clearSource.asObservable();add(t){t&&this.messageSource.next(t)}addAll(t){t&&t.length&&this.messageSource.next(t)}clear(t){this.clearSource.next(t||null)}static \u0275fac=function(e){return new(e||a)};static \u0275prov=O({token:a,factory:a.\u0275fac})}return a})();var z=(()=>{class a{ripple=!1;inputStyle="outlined";overlayOptions={};filterMatchModeOptions={text:[f.STARTS_WITH,f.CONTAINS,f.NOT_CONTAINS,f.ENDS_WITH,f.EQUALS,f.NOT_EQUALS],numeric:[f.EQUALS,f.NOT_EQUALS,f.LESS_THAN,f.LESS_THAN_OR_EQUAL_TO,f.GREATER_THAN,f.GREATER_THAN_OR_EQUAL_TO],date:[f.DATE_IS,f.DATE_IS_NOT,f.DATE_BEFORE,f.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"{0} results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new y;translationObserver=this.translationSource.asObservable();getTranslation(t){return this.translation[t]}setTranslation(t){this.translation=m(m({},this.translation),t),this.translationSource.next(this.translation)}static \u0275fac=function(e){return new(e||a)};static \u0275prov=O({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})(),$=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275cmp=S({type:a,selectors:[["p-header"]],ngContentSelectors:x,decls:1,vars:0,template:function(e,s){e&1&&(T(),_(0))},encapsulation:2})}return a})();var Q=(()=>{class a{template;type;name;constructor(t){this.template=t}getType(){return this.name}static \u0275fac=function(e){return new(e||a)(C(D))};static \u0275dir=w({type:a,selectors:[["","pTemplate",""]],inputs:{type:"type",name:["pTemplate","name"]}})}return a})(),Z=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275mod=I({type:a});static \u0275inj=L({imports:[v]})}return a})();var j="*";function tt(a,i){return{type:7,name:a,definitions:i,options:{}}}function et(a,i=null){return{type:4,styles:i,timings:a}}function it(a,i=null){return{type:2,steps:a,options:i}}function st(a){return{type:6,styles:a,offset:null}}function nt(a,i,t){return{type:0,name:a,styles:i,options:t}}function rt(a,i,t=null){return{type:1,expr:a,animation:i,options:t}}function at(a=null){return{type:9,options:a}}function ot(a,i,t=null){return{type:11,selector:a,animation:i,options:t}}var F=class{constructor(i=0,t=0){this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._originalOnDoneFns=[],this._originalOnStartFns=[],this._started=!1,this._destroyed=!1,this._finished=!1,this._position=0,this.parentPlayer=null,this.totalTime=i+t}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(i=>i()),this._onDoneFns=[])}onStart(i){this._originalOnStartFns.push(i),this._onStartFns.push(i)}onDone(i){this._originalOnDoneFns.push(i),this._onDoneFns.push(i)}onDestroy(i){this._onDestroyFns.push(i)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){queueMicrotask(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(i=>i()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(i=>i()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(i){this._position=this.totalTime?i*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(i){let t=i=="start"?this._onStartFns:this._onDoneFns;t.forEach(e=>e()),t.length=0}},M=class{constructor(i){this._onDoneFns=[],this._onStartFns=[],this._finished=!1,this._started=!1,this._destroyed=!1,this._onDestroyFns=[],this.parentPlayer=null,this.totalTime=0,this.players=i;let t=0,e=0,s=0,n=this.players.length;n==0?queueMicrotask(()=>this._onFinish()):this.players.forEach(r=>{r.onDone(()=>{++t==n&&this._onFinish()}),r.onDestroy(()=>{++e==n&&this._onDestroy()}),r.onStart(()=>{++s==n&&this._onStart()})}),this.totalTime=this.players.reduce((r,o)=>Math.max(r,o.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(i=>i()),this._onDoneFns=[])}init(){this.players.forEach(i=>i.init())}onStart(i){this._onStartFns.push(i)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(i=>i()),this._onStartFns=[])}onDone(i){this._onDoneFns.push(i)}onDestroy(i){this._onDestroyFns.push(i)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(i=>i.play())}pause(){this.players.forEach(i=>i.pause())}restart(){this.players.forEach(i=>i.restart())}finish(){this._onFinish(),this.players.forEach(i=>i.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(i=>i.destroy()),this._onDestroyFns.forEach(i=>i()),this._onDestroyFns=[])}reset(){this.players.forEach(i=>i.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(i){let t=i*this.totalTime;this.players.forEach(e=>{let s=e.totalTime?Math.min(1,t/e.totalTime):1;e.setPosition(s)})}getPosition(){let i=this.players.reduce((t,e)=>t===null||e.totalTime>t.totalTime?e:t,null);return i!=null?i.getPosition():0}beforeDestroy(){this.players.forEach(i=>{i.beforeDestroy&&i.beforeDestroy()})}triggerCallback(i){let t=i=="start"?this._onStartFns:this._onDoneFns;t.forEach(e=>e()),t.length=0}},lt="!";var pt=(()=>{class a{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(t,e){t&&e&&(t.classList?t.classList.add(e):t.className+=" "+e)}static addMultipleClasses(t,e){if(t&&e)if(t.classList){let s=e.trim().split(" ");for(let n=0;n<s.length;n++)t.classList.add(s[n])}else{let s=e.split(" ");for(let n=0;n<s.length;n++)t.className+=" "+s[n]}}static removeClass(t,e){t&&e&&(t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(t,e){t&&e&&[e].flat().filter(Boolean).forEach(s=>s.split(" ").forEach(n=>this.removeClass(t,n)))}static hasClass(t,e){return t&&e?t.classList?t.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(t.className):!1}static siblings(t){return Array.prototype.filter.call(t.parentNode.children,function(e){return e!==t})}static find(t,e){return Array.from(t.querySelectorAll(e))}static findSingle(t,e){return this.isElement(t)?t.querySelector(e):null}static index(t){let e=t.parentNode.childNodes,s=0;for(var n=0;n<e.length;n++){if(e[n]==t)return s;e[n].nodeType==1&&s++}return-1}static indexWithinGroup(t,e){let s=t.parentNode?t.parentNode.childNodes:[],n=0;for(var r=0;r<s.length;r++){if(s[r]==t)return n;s[r].attributes&&s[r].attributes[e]&&s[r].nodeType==1&&n++}return-1}static appendOverlay(t,e,s="self"){s!=="self"&&t&&e&&this.appendChild(t,e)}static alignOverlay(t,e,s="self",n=!0){t&&e&&(n&&(t.style.minWidth=`${a.getOuterWidth(e)}px`),s==="self"?this.relativePosition(t,e):this.absolutePosition(t,e))}static relativePosition(t,e){let s=E=>{if(E)return getComputedStyle(E).getPropertyValue("position")==="relative"?E:s(E.parentElement)},n=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),r=e.offsetHeight,o=e.getBoundingClientRect(),l=this.getWindowScrollTop(),d=this.getWindowScrollLeft(),c=this.getViewport(),p=s(t)?.getBoundingClientRect()||{top:-1*l,left:-1*d},h,g;o.top+r+n.height>c.height?(h=o.top-p.top-n.height,t.style.transformOrigin="bottom",o.top+h<0&&(h=-1*o.top)):(h=r+o.top-p.top,t.style.transformOrigin="top");let R=o.left+n.width-c.width,P=o.left-p.left;n.width>c.width?g=(o.left-p.left)*-1:R>0?g=P-R:g=o.left-p.left,t.style.top=h+"px",t.style.left=g+"px"}static absolutePosition(t,e){let s=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),n=s.height,r=s.width,o=e.offsetHeight,l=e.offsetWidth,d=e.getBoundingClientRect(),c=this.getWindowScrollTop(),u=this.getWindowScrollLeft(),p=this.getViewport(),h,g;d.top+o+n>p.height?(h=d.top+c-n,t.style.transformOrigin="bottom",h<0&&(h=c)):(h=o+d.top+c,t.style.transformOrigin="top"),d.left+r>p.width?g=Math.max(0,d.left+u+l-r):g=d.left+u,t.style.top=h+"px",t.style.left=g+"px"}static getParents(t,e=[]){return t.parentNode===null?e:this.getParents(t.parentNode,e.concat([t.parentNode]))}static getScrollableParents(t){let e=[];if(t){let s=this.getParents(t),n=/(auto|scroll)/,r=o=>{let l=window.getComputedStyle(o,null);return n.test(l.getPropertyValue("overflow"))||n.test(l.getPropertyValue("overflowX"))||n.test(l.getPropertyValue("overflowY"))};for(let o of s){let l=o.nodeType===1&&o.dataset.scrollselectors;if(l){let d=l.split(",");for(let c of d){let u=this.findSingle(o,c);u&&r(u)&&e.push(u)}}o.nodeType!==9&&r(o)&&e.push(o)}}return e}static getHiddenElementOuterHeight(t){t.style.visibility="hidden",t.style.display="block";let e=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",e}static getHiddenElementOuterWidth(t){t.style.visibility="hidden",t.style.display="block";let e=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",e}static getHiddenElementDimensions(t){let e={};return t.style.visibility="hidden",t.style.display="block",e.width=t.offsetWidth,e.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible",e}static scrollInView(t,e){let s=getComputedStyle(t).getPropertyValue("borderTopWidth"),n=s?parseFloat(s):0,r=getComputedStyle(t).getPropertyValue("paddingTop"),o=r?parseFloat(r):0,l=t.getBoundingClientRect(),c=e.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-n-o,u=t.scrollTop,p=t.clientHeight,h=this.getOuterHeight(e);c<0?t.scrollTop=u+c:c+h>p&&(t.scrollTop=u+c-p+h)}static fadeIn(t,e){t.style.opacity=0;let s=+new Date,n=0,r=function(){n=+t.style.opacity.replace(",",".")+(new Date().getTime()-s)/e,t.style.opacity=n,s=+new Date,+n<1&&(window.requestAnimationFrame&&requestAnimationFrame(r)||setTimeout(r,16))};r()}static fadeOut(t,e){var s=1,n=50,r=e,o=n/r;let l=setInterval(()=>{s=s-o,s<=0&&(s=0,clearInterval(l)),t.style.opacity=s},n)}static getWindowScrollTop(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}static getWindowScrollLeft(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}static matches(t,e){var s=Element.prototype,n=s.matches||s.webkitMatchesSelector||s.mozMatchesSelector||s.msMatchesSelector||function(r){return[].indexOf.call(document.querySelectorAll(r),this)!==-1};return n.call(t,e)}static getOuterWidth(t,e){let s=t.offsetWidth;if(e){let n=getComputedStyle(t);s+=parseFloat(n.marginLeft)+parseFloat(n.marginRight)}return s}static getHorizontalPadding(t){let e=getComputedStyle(t);return parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)}static getHorizontalMargin(t){let e=getComputedStyle(t);return parseFloat(e.marginLeft)+parseFloat(e.marginRight)}static innerWidth(t){let e=t.offsetWidth,s=getComputedStyle(t);return e+=parseFloat(s.paddingLeft)+parseFloat(s.paddingRight),e}static width(t){let e=t.offsetWidth,s=getComputedStyle(t);return e-=parseFloat(s.paddingLeft)+parseFloat(s.paddingRight),e}static getInnerHeight(t){let e=t.offsetHeight,s=getComputedStyle(t);return e+=parseFloat(s.paddingTop)+parseFloat(s.paddingBottom),e}static getOuterHeight(t,e){let s=t.offsetHeight;if(e){let n=getComputedStyle(t);s+=parseFloat(n.marginTop)+parseFloat(n.marginBottom)}return s}static getHeight(t){let e=t.offsetHeight,s=getComputedStyle(t);return e-=parseFloat(s.paddingTop)+parseFloat(s.paddingBottom)+parseFloat(s.borderTopWidth)+parseFloat(s.borderBottomWidth),e}static getWidth(t){let e=t.offsetWidth,s=getComputedStyle(t);return e-=parseFloat(s.paddingLeft)+parseFloat(s.paddingRight)+parseFloat(s.borderLeftWidth)+parseFloat(s.borderRightWidth),e}static getViewport(){let t=window,e=document,s=e.documentElement,n=e.getElementsByTagName("body")[0],r=t.innerWidth||s.clientWidth||n.clientWidth,o=t.innerHeight||s.clientHeight||n.clientHeight;return{width:r,height:o}}static getOffset(t){var e=t.getBoundingClientRect();return{top:e.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:e.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(t,e){let s=t.parentNode;if(!s)throw"Can't replace element";return s.replaceChild(e,t)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var t=window.navigator.userAgent,e=t.indexOf("MSIE ");if(e>0)return!0;var s=t.indexOf("Trident/");if(s>0){var n=t.indexOf("rv:");return!0}var r=t.indexOf("Edge/");return r>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(t,e){if(this.isElement(e))e.appendChild(t);else if(e&&e.el&&e.el.nativeElement)e.el.nativeElement.appendChild(t);else throw"Cannot append "+e+" to "+t}static removeChild(t,e){if(this.isElement(e))e.removeChild(t);else if(e.el&&e.el.nativeElement)e.el.nativeElement.removeChild(t);else throw"Cannot remove "+t+" from "+e}static removeElement(t){"remove"in Element.prototype?t.remove():t.parentNode.removeChild(t)}static isElement(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}static calculateScrollbarWidth(t){if(t){let e=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(e.borderLeftWidth)-parseFloat(e.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let s=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),this.calculatedScrollbarWidth=s,s}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);let e=t.offsetHeight-t.clientHeight;return document.body.removeChild(t),this.calculatedScrollbarWidth=e,e}static invokeElementMethod(t,e,s){t[e].apply(t,s)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let t=navigator.userAgent.toLowerCase(),e=/(chrome)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:e[1]||"",version:e[2]||"0"}}static isInteger(t){return Number.isInteger?Number.isInteger(t):typeof t=="number"&&isFinite(t)&&Math.floor(t)===t}static isHidden(t){return!t||t.offsetParent===null}static isVisible(t){return t&&t.offsetParent!=null}static isExist(t){return t!==null&&typeof t<"u"&&t.nodeName&&t.parentNode}static focus(t,e){t&&document.activeElement!==t&&t.focus(e)}static getFocusableElements(t,e=""){let s=this.find(t,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`),n=[];for(let r of s)getComputedStyle(r).display!="none"&&getComputedStyle(r).visibility!="hidden"&&n.push(r);return n}static getFirstFocusableElement(t,e){let s=this.getFocusableElements(t,e);return s.length>0?s[0]:null}static getLastFocusableElement(t,e){let s=this.getFocusableElements(t,e);return s.length>0?s[s.length-1]:null}static getNextFocusableElement(t,e=!1){let s=a.getFocusableElements(t),n=0;if(s&&s.length>0){let r=s.indexOf(s[0].ownerDocument.activeElement);e?r==-1||r===0?n=s.length-1:n=r-1:r!=-1&&r!==s.length-1&&(n=r+1)}return s[n]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(t,e){if(!t)return null;switch(t){case"document":return document;case"window":return window;case"@next":return e?.nextElementSibling;case"@prev":return e?.previousElementSibling;case"@parent":return e?.parentElement;case"@grandparent":return e?.parentElement.parentElement;default:let s=typeof t;if(s==="string")return document.querySelector(t);if(s==="object"&&t.hasOwnProperty("nativeElement"))return this.isExist(t.nativeElement)?t.nativeElement:void 0;let r=(o=>!!(o&&o.constructor&&o.call&&o.apply))(t)?t():t;return r&&r.nodeType===9||this.isExist(r)?r:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(t,e){if(t){let s=t.getAttribute(e);return isNaN(s)?s==="true"||s==="false"?s==="true":s:+s}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(t="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,t)}static unblockBodyScroll(t="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,t)}}return a})();var U=["*"],ft=(()=>{class a{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){this.getAttributes()}getAttributes(){let t=A.isEmpty(this.label);this.role=t?void 0:"img",this.ariaLabel=t?void 0:this.label,this.ariaHidden=t}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=S({type:a,selectors:[["ng-component"]],hostAttrs:[1,"p-element","p-icon-wrapper"],inputs:{label:"label",spin:"spin",styleClass:"styleClass"},standalone:!0,features:[N],ngContentSelectors:U,decls:1,vars:0,template:function(e,s){e&1&&(T(),_(0))},encapsulation:2,changeDetection:0})}return a})();export{A as a,B as b,G as c,Y as d,z as e,$ as f,Q as g,Z as h,j as i,tt as j,et as k,it as l,st as m,nt as n,rt as o,at as p,ot as q,F as r,M as s,lt as t,ft as u,pt as v};