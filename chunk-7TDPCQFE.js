import{Ba as m,J as v,K as w,M as y,Ma as x,Oa as M,Pa as r,Qa as s,R as l,Va as u,Xa as k,Ya as S,_a as h,e as b,ha as d,ma as P,ua as p,v as C}from"./chunk-TQKIZM3B.js";function g(o){o||(P(g),o=d(m));let t=new b(c=>o.onDestroy(c.next.bind(c)));return c=>c.pipe(v(t))}var E=(()=>{let t=class t{constructor(){this.childComponentPositionEmit=new y,this.componentPosition="left: 20px; top: 20px",this.rectWidth=100,this.rectHeight=50,this.subscription=null,this.destroyRef=d(m),this.color="red"}handleClickRect(){this.subscription?(this.subscription.unsubscribe(),this.subscription=null):this.subscription=C(1e3).pipe(w(()=>{this.componentPosition=this.randomizePosition(),this.color=this.randomizeColor()}),g(this.destroyRef)).subscribe(()=>{this.childComponentPositionEmit.emit(this.componentPosition)})}randomizePosition(){let i=window.innerWidth,e=window.innerHeight,n=this.rectWidth,a=this.rectHeight,f=Math.round(Math.random()*(i-n))-(n/2+50),D=Math.round(Math.random()*(e-a))-(a/2+100);return`left: ${f}px; top: ${D}px`}randomizeColor(){let i=Math.floor(Math.random()*256),e=Math.floor(Math.random()*256),n=Math.floor(Math.random()*256);return"#"+((1<<24)+(i<<16)+(e<<8)+n).toString(16).slice(1)}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l({type:t,selectors:[["app-rectangle"]],outputs:{childComponentPositionEmit:"childComponentPositionEmit"},standalone:!0,features:[h],decls:2,vars:8,consts:[[1,"wrapper"],[1,"rectangle",3,"click"]],template:function(e,n){e&1&&(r(0,"div",0)(1,"div",1),u("click",function(){return n.handleClickRect()}),s()()),e&2&&(p(),M(n.componentPosition),x("width",n.rectWidth+"px")("height",n.rectHeight+"px")("background-color",n.color))},styles:["[_nghost-%COMP%]{position:relative;height:100%;width:100%}.wrapper[_ngcontent-%COMP%]{width:100%;height:100%;background-color:#f5f5f5}.rectangle[_ngcontent-%COMP%]{box-sizing:border-box;border:1px solid red;background-color:red;position:absolute;cursor:pointer;transition:left .5s ease,top .5s ease}"]});let o=t;return o})();var L=(()=>{let t=class t{constructor(){this.childComponentPosition="left: 20px; top: 20px"}onChildComponentChangedPosition(i){this.childComponentPosition=i}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l({type:t,selectors:[["app-entertainment"]],standalone:!0,features:[h],decls:4,vars:1,consts:[[1,"main-component"],[3,"childComponentPositionEmit"]],template:function(e,n){e&1&&(r(0,"div",0)(1,"p"),k(2),s(),r(3,"app-rectangle",1),u("childComponentPositionEmit",function(f){return n.onChildComponentChangedPosition(f)}),s()()),e&2&&(p(2),S("Child Component Position: ",n.childComponentPosition,""))},dependencies:[E],styles:[".main-component[_ngcontent-%COMP%]{width:100%;height:100%;box-sizing:border-box;position:relative;display:flex;flex-direction:column}.main-component[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:600;padding:20px}"]});let o=t;return o})();export{L as EntertainmentComponent};