System.register(["./main-legacy-BEP8B0aF.bundle.js","./VBtn-legacy-B61vri9v.bundle.js","./index-legacy-BtD6u1dA.bundle.js","./layout-legacy-C_03g7A3.bundle.js","./ssrBoot-legacy-BZm9uH21.bundle.js","./utils-legacy-Bx-uGak_.bundle.js"],(function(t,e){"use strict";var o,a,n,i,l,s,r,v,u,d,c,b,m,g,f,h,p,y,_,x,w,k,C,j,S,V,z,B,N,I,L,A,P,Y,q,E,F,K,R,U,$,D,G,H,J,M,O,Q,T,W,X;return{setters:[t=>{o=t.p,a=t.m,n=t.j,i=t.k,l=t.t,s=t.l,r=t.n,v=t.f,u=t.q,d=t.d,c=t.s,b=t.v,m=t.x,g=t.r,f=t.o,h=t.c,p=t.w,y=t.a,_=t.y,x=t.F,w=t.z,k=t.i,C=t.e,j=t.A,S=t.u,V=t.S,z=t.K,B=t.g,N=t.h},t=>{I=t.m,L=t.u,A=t.V,P=t.a},t=>{Y=t.m,q=t.a,E=t.b,F=t.c,K=t.d,R=t.e,U=t.u,$=t.f,D=t.g,G=t.h,H=t.i,J=t.j},t=>{M=t.m,O=t.u,Q=t.a,T=t.c},t=>{W=t.u},t=>{X=t.r}],execute:function(){var e=document.createElement("style");e.textContent=".v-bottom-navigation{display:flex;max-width:100%;overflow:hidden;position:absolute;transition:transform,color .2s,.2s cubic-bezier(.4,0,.2,1);border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0;border-radius:0;background:rgb(var(--v-theme-surface));color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-bottom-navigation--border{border-width:thin;box-shadow:none}.v-bottom-navigation--active{box-shadow:0 2px 4px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 4px 5px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 10px 0 var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, .12))}.v-bottom-navigation__content{display:flex;flex:none;font-size:.75rem;justify-content:center;transition:inherit;width:100%}.v-bottom-navigation .v-bottom-navigation__content>.v-btn{font-size:inherit;height:100%;max-width:168px;min-width:80px;text-transform:none;transition:inherit;width:auto;border-radius:0}.v-bottom-navigation .v-bottom-navigation__content>.v-btn .v-btn__content,.v-bottom-navigation .v-bottom-navigation__content>.v-btn .v-btn__icon{transition:inherit}.v-bottom-navigation .v-bottom-navigation__content>.v-btn .v-btn__icon{font-size:1.5rem}.v-bottom-navigation--grow .v-bottom-navigation__content>.v-btn{flex-grow:1}.v-bottom-navigation--shift .v-bottom-navigation__content .v-btn:not(.v-btn--selected) .v-btn__content>span{transition:inherit;opacity:0}.v-bottom-navigation--shift .v-bottom-navigation__content .v-btn:not(.v-btn--selected) .v-btn__content{transform:translateY(.5rem)}.v-layout{--v-scrollbar-offset: 0px;display:flex;flex:1 1 auto}.v-layout--full-height{--v-scrollbar-offset: inherit;height:100%}\n",document.head.appendChild(e);const Z=o({bgColor:String,color:String,grow:Boolean,mode:{type:String,validator:t=>!t||["horizontal","shift"].includes(t)},height:{type:[Number,String],default:56},active:{type:Boolean,default:!0},...Y(),...q(),...E(),...F(),...K(),...M({name:"bottom-navigation"}),...R({tag:"header"}),...I({modelValue:!0,selectedClass:"v-btn--selected"}),...a()},"VBottomNavigation"),tt=n()({name:"VBottomNavigation",props:Z(),emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:o}=e;const{themeClasses:a}=i(),{borderClasses:n}=U(t),{backgroundColorClasses:d,backgroundColorStyles:c}=$(l(t,"bgColor")),{densityClasses:b}=D(t),{elevationClasses:m}=G(t),{roundedClasses:g}=H(t),{ssrBootStyles:f}=W(),h=s((()=>Number(t.height)-("comfortable"===t.density?8:0)-("compact"===t.density?16:0))),p=l(t,"active"),{layoutItemStyles:y}=O({id:t.name,order:s((()=>parseInt(t.order,10))),position:s((()=>"bottom")),layoutSize:s((()=>p.value?h.value:0)),elementSize:h,active:p,absolute:l(t,"absolute")});return L(t,A),r({VBtn:{color:l(t,"color"),density:l(t,"density"),stacked:s((()=>"horizontal"!==t.mode)),variant:"text"}},{scoped:!0}),J((()=>v(t.tag,{class:["v-bottom-navigation",{"v-bottom-navigation--active":p.value,"v-bottom-navigation--grow":t.grow,"v-bottom-navigation--shift":"shift"===t.mode},a.value,d.value,n.value,b.value,m.value,g.value,t.class],style:[c.value,y.value,{height:u(h.value),transform:`translateY(${u(p.value?0:100,"%")})`},f.value,t.style]},{default:()=>[o.default&&v("div",{class:"v-bottom-navigation__content"},[o.default()])]}))),{}}}),et=d({__name:"Navigation",props:{items:{}},setup(t){const e=t,o=c(),a=b(0);return m((()=>o),((t,o)=>{a.value=e.items.findIndex((e=>e.path===(null==t?void 0:t.path)))}),{immediate:!0,deep:!0}),(t,e)=>{const o=g("router-link");return f(),h(tt,{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=t=>a.value=t),grow:"",mode:"shift",mandatory:""},{default:p((()=>[(f(!0),y(x,null,_(t.items,((t,e)=>(f(),h(o,{key:e,to:t.path,custom:""},{default:p((({isActive:e,navigate:o})=>[v(P,{color:"primary",onClick:o},{default:p((()=>[t.icon?(f(),y("i",{key:0,class:w([t.icon,"mb-1"])},null,2)):k("",!0),C("span",null,j(t.label),1)])),_:2},1032,["onClick"])])),_:2},1032,["to"])))),128))])),_:1},8,["modelValue"])}}}),ot=o({...q(),...Q()},"VLayout"),at=n()({name:"VLayout",props:ot(),setup(t,e){let{slots:o}=e;const{layoutClasses:a,layoutStyles:n,getLayoutItem:i,items:l,layoutRef:s}=T(t);return J((()=>{var e;return v("div",{ref:s,class:[a.value,t.class],style:[n.value,t.style]},[null===(e=o.default)||void 0===e?void 0:e.call(o)])})),{getLayoutItem:i,items:l}}}),nt={class:"d-flex flex-column vh-100 justify-content-between pb-16"};t("default",d({__name:"sb",setup(t){const e=S(),o=[{path:"/sb/workathons",label:"作业",icon:"fa-2x far fa-file-check"},{path:"/sb/study/subjects",label:"自学",icon:"fa-2x far fa-pencil"},{path:"/sb/errorbag",label:"纠错",icon:"fa-2x far fa-shopping-bag"},{path:"/sb/profile/basic",label:"我的",icon:"fa-2x far fa-user-alt"}];return(t,a)=>{const n=g("router-view");return f(),h(V,{timeout:"0"},{default:p((()=>[C("div",nt,[v(at,null,{default:p((()=>[v(n,{class:"w-100"},{default:p((({Component:t,route:a})=>[(f(),h(z,null,[t?(f(),h(B(t),{key:{fullPath:X(a.fullPath),id:N(e).id}})):k("",!0)],1024)),a.meta.hideNavigation?k("",!0):(f(),h(et,{key:0,items:o}))])),_:1})])),_:1})])])),_:1})}}}))}}}));