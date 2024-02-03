import{a as w}from"./chunk-LQTEY6K6.js";import{c as y,j as k,r as T,t as B,z as E}from"./chunk-3SSGEZZX.js";import{Ab as a,Bb as m,Cb as b,Gb as P,Ha as C,Ib as f,Ra as r,W as d,Y as v,ab as g,gb as x,hb as M,ib as p,jb as u,kb as h,lb as e,mb as i,nb as S,ub as D,vb as _,yb as O}from"./chunk-GUQ5ZOSL.js";function F(t,o){if(t&1&&S(0,"img",15),t&2){let l=_().$implicit;O("src",l.visuals,C)}}var I=t=>({lightMode:t});function A(t,o){if(t&1&&(e(0,"div",11),x(1,F,1,1,"img",12),e(2,"div")(3,"h3",13),a(4),i(),e(5,"p",14),a(6),i()()()),t&2){let l=o.$implicit,s=_();g("ngClass",f(4,I,s.currThemeDark.theme.currThemeDark)),r(1),M(1,l!=null&&l.visuals?1:-1),r(3),m(l.section),r(2),m(l.description)}}function R(t,o){t&1&&(e(0,"div"),a(1,"No Content Updated"),i())}function $(t,o){if(t&1&&(e(0,"li",16),a(1),i()),t&2){let l=o.$implicit;r(1),m(l)}}var J=(()=>{let o=class o{constructor(){this._blogService=d(w),this._themeService=d(E),this._activatedRoute=d(T),this._router=d(B),this.currThemeDark=this._themeService.signalThemeDark()}onAccess(){this._activatedRoute.params.subscribe(s=>{let c=s.id;this._blogService.getBlogList(),this._blogService.getBlog(c),this.selectedDataSub=this._blogService.$selectedBlog.subscribe(n=>{this.selectedData=n}),this.selectedData||this._router.navigate(["**"])})}onBack(){this._router.navigate(["/blog"])}ngOnInit(){this.onAccess()}ngOnDestroy(){this.selectedDataSub&&this.selectedDataSub.unsubscribe()}};o.\u0275fac=function(c){return new(c||o)},o.\u0275cmp=v({type:o,selectors:[["app-blogdetail"]],standalone:!0,features:[P],decls:26,vars:7,consts:[[1,"container"],[1,"container-intro"],[1,"container-intro-title"],[1,"container-intro-sub"],[1,"container-intro-sub-title"],[1,"container-intro-sub-content"],[1,"container-content"],[1,"container-tags"],[1,"container-tags-title"],[1,"container-tags-list"],[1,"container-btn",3,"ngClass","click"],[1,"container-content-detail",3,"ngClass"],["alt","visuals","class","container-content-detail-img",3,"src"],[1,"container-content-detail-title"],[1,"container-content-detail-info"],["alt","visuals",1,"container-content-detail-img",3,"src"],[1,"container-tags-list-item"],["class","container-content-detail",3,"ngClass"],["class","container-tags-list-item"]],template:function(c,n){c&1&&(e(0,"div",0)(1,"div",1)(2,"h2",2),a(3),i(),e(4,"div",3)(5,"span",4),a(6,"Author"),i(),e(7,"span",5),a(8),i()(),e(9,"div",3)(10,"span",4),a(11,"Date"),i(),e(12,"span",5),a(13),i()()(),e(14,"div",6),u(15,A,7,6,"div",17,p,!1,R,2,0),i(),e(18,"div",7)(19,"h4",8),a(20,"Tags"),i(),e(21,"ul",9),u(22,$,2,1,"li",18,p),i()(),e(24,"button",10),D("click",function(){return n.onBack()}),a(25," Back "),i()()),c&2&&(r(3),m(n.selectedData==null?null:n.selectedData.blogTitle),r(5),b(" ",n.selectedData==null?null:n.selectedData.author,""),r(5),b(" ",n.selectedData==null?null:n.selectedData.date,""),r(2),h(n.selectedData==null?null:n.selectedData.content),r(7),h(n.selectedData==null?null:n.selectedData.tags),r(2),g("ngClass",f(5,I,n.currThemeDark.theme.currThemeDark)))},dependencies:[k,y],styles:[".container-intro[_ngcontent-%COMP%]{margin-bottom:1rem}.container-intro-title[_ngcontent-%COMP%]{letter-spacing:.5px;margin-bottom:.5rem}.container-intro-sub[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.container-intro-sub-title[_ngcontent-%COMP%]{font-weight:700;letter-spacing:1px}.container-intro-sub-content[_ngcontent-%COMP%]{letter-spacing:1px}.container-content-detail[_ngcontent-%COMP%]{border:1px solid;padding-bottom:1rem;border:1px solid #2c3e50;padding:20px;margin-bottom:20px;box-shadow:0 2px 4px #0000001a}.container-content-detail[_ngcontent-%COMP%]:nth-child(odd){background-color:#34495e}.container-content-detail-img[_ngcontent-%COMP%]{width:100%;height:auto;margin-bottom:.5rem}.container-content-detail-title[_ngcontent-%COMP%]{margin-bottom:.25rem}.container-content-detail-info[_ngcontent-%COMP%]{letter-spacing:.5px}.container-content-detail.lightMode[_ngcontent-%COMP%]{border:1px solid #ddd}.container-content-detail.lightMode[_ngcontent-%COMP%]:nth-child(odd){background-color:#f4f4f4}.container-content-detail.lightMode[_ngcontent-%COMP%]:nth-child(2n){background-color:#e2f4ff}.container-tags[_ngcontent-%COMP%]{margin-bottom:1rem}.container-tags-title[_ngcontent-%COMP%]{margin-bottom:.5rem}.container-tags-list[_ngcontent-%COMP%]{list-style:none;display:flex}.container-tags-list-item[_ngcontent-%COMP%]{font-size:.9rem;border-radius:5px;margin-right:.5rem;border:1px solid;padding:.25rem .5rem}.container-btn[_ngcontent-%COMP%]{font-family:Nunito Sans,sans-serif;letter-spacing:1px;padding:.25rem .5rem;outline:none;border:none;cursor:pointer;position:relative;width:5rem;font-weight:700;transform:translateY(0);box-shadow:0 3px #fff;font-size:.8rem}.container-btn[_ngcontent-%COMP%]:active{box-shadow:0 0;transform:translateY(3px)}.container-btn.lightMode[_ngcontent-%COMP%]{box-shadow:0 3px #000}.container-btn.lightMode[_ngcontent-%COMP%]:active{box-shadow:0 0;transform:translateY(3px)}"]});let t=o;return t})();export{J as BlogdetailComponent};
