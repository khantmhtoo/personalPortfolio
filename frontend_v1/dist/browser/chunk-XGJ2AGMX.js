import{a as _}from"./chunk-2WHG3L7G.js";import"./chunk-LQTEY6K6.js";import{c as g,j as u,t as b,z as C}from"./chunk-3SSGEZZX.js";import{Ab as d,Gb as h,Ib as f,Ra as a,W as o,Y as i,ab as s,lb as c,mb as m,nb as l,ub as p}from"./chunk-GUQ5ZOSL.js";var M=t=>({lightMode:t}),v=(()=>{let e=class e{constructor(){this._router=o(b),this._themeService=o(C),this.currThemeDark=this._themeService.signalThemeDark()}onBack(){this._router.navigate(["/dashboard"])}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=i({type:e,selectors:[["app-blog"]],standalone:!0,features:[h],decls:3,vars:3,consts:[[1,"container-btn",3,"ngClass","click"]],template:function(n,r){n&1&&(l(0,"app-bloglist"),c(1,"button",0),p("click",function(){return r.onBack()}),d(2,` Back
`),m()),n&2&&(a(1),s("ngClass",f(1,M,r.currThemeDark.theme.currThemeDark)))},dependencies:[u,g,_],styles:[".container-btn[_ngcontent-%COMP%]{font-family:Nunito Sans,sans-serif;letter-spacing:1px;padding:.25rem .5rem;outline:none;border:none;cursor:pointer;position:relative;width:5rem;font-weight:700;transform:translateY(0);box-shadow:0 3px #fff;font-size:.8rem;margin-bottom:.5rem}.container-btn[_ngcontent-%COMP%]:active{box-shadow:0 0;transform:translateY(3px)}.container-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:inherit;text-decoration:none}.container-btn.lightMode[_ngcontent-%COMP%]{box-shadow:0 3px #000}.container-btn.lightMode[_ngcontent-%COMP%]:active{box-shadow:0 0;transform:translateY(3px)}"]});let t=e;return t})();var E=[{path:"",component:v},{path:"details/:id",loadComponent:()=>import("./chunk-UNDT7K5W.js").then(t=>t.BlogdetailComponent)}];export{E as BLOG_ROUTES};