import{_ as h,w as g,d as v,o as i,c as n,a as s,t as e,i as x,F as p,r as a,b as d,h as y,n as b,j as u,e as w,g as _}from"./app.0afedf10.js";const T={data(){return{config:{},selectedDeployOption:0,base:null}},mounted(){this.base=g,v(()=>import("./chunks/config.ddba8e9b.js"),["assets/chunks/config.ddba8e9b.js","assets/app.0afedf10.js"]).then(c=>{this.config=c.default.pagesConfig.landing}),window.location.hash&&setTimeout(()=>{window.scrollTo(0,this.$refs.roadmap.offsetTop)},100)}},k={key:0,class:"landing w-100 f-left"},S={class:"w-100 f-left mb-18 landing-main-title"},L={class:"w-55 f-left mt-5 pl-130"},A={class:"shotover-title w-100 f-left"},V={class:"shotover-subtitle w-100 f-left"},N={style:{color:"#91AAE5"}},B={style:{color:"#AADEF6"}},C={class:"shotover-motto w-100 f-left"},D=["href"],E={class:"landing-action-btn-text"},P={class:"w-45 f-left"},F=["src"],H={class:"w-100 f-left p-130 mb-24"},I={class:"w-43 f-left pr-2"},M={class:"landing-description-title mb-sm-1"},O={class:"w-57 f-left"},j={class:"landing-description mt-1"},z={class:"w-100 f-left mb-22"},R=["innerHTML"],J={class:"docs-container w-100 f-left p-105"},q=["href"],G={class:"w-100 f-left doc-name mb-2"},K={class:"text-left doc-desc"},Q={class:"f-left doc-action-btn mb-2"},U=s("p",{class:"f-left"},"Learn more",-1),W=["src"],X={class:"w-100 f-left p-130 landing-problems"},Y=["innerHTML"],Z={class:"w-65 mb-8 problems-description"},$={class:"w-100 f-left p-90 mb-2"},ss={class:"f-left w-80"},ts=["src"],es={class:"w-50 problems-description"},os=y('<div class="w-100 f-left mb-8 p-130 landing-proxy"><h2 class="landing-proxy-title"> Shotover Proxy </h2><div class="proxy-item" style="top:280px;left:-109px;">pscale connect</div><div class="proxy-item" style="top:280px;left:160px;">pscale disconnect</div><div class="proxy-item" style="top:375px;left:-7px;">pscale service token</div><div class="proxy-item" style="top:460px;left:-7px;">pscale connect</div><div class="proxy-item" style="top:555px;left:-109px;">pscale connect</div><div class="proxy-item" style="top:555px;left:155px;">pscale connect</div><div class="proxy-item" style="top:260px;right:140px;">pscale disconnect</div><div class="proxy-item" style="top:260px;right:-120px;">pscale connect</div><div class="proxy-item" style="top:355px;right:-17px;">pscale service token</div><div class="proxy-item" style="top:440px;right:-17px;">pscale connect</div><div class="proxy-item" style="top:535px;right:150px;">pscale connect</div><div class="proxy-item" style="top:535px;right:-120px;">pscale connect</div></div>',1),is={class:"name-description w-100 f-left"},ns={class:"p-130"},cs={class:"landing-title w-50 f-left"},ls={class:"landing-description w-50 mt-1 mb-1 f-left"},rs=["src"];function ps(c,f,m,r,t,_s){return t.config.title&&t.base?(i(),n("div",k,[s("div",S,[s("div",L,[s("h1",A,e(t.config.title),1),s("h2",V,[s("span",N,e(t.config.subtitle1),1),x(),s("span",B,e(t.config.subtitle2),1)]),s("h3",C,e(t.config.motto),1),s("a",{class:"landing-action-btn",href:t.base(t.config.actionBtnLink)},[s("span",E,e(t.config.actionBtnText),1)],8,D)]),s("div",P,[s("img",{class:"landing-title-img ml-20",src:t.base(t.config.titleImg)},null,8,F)])]),s("div",H,[s("div",I,[s("h2",M,e(t.config.description.title),1)]),s("div",O,[s("p",j,e(t.config.description.text),1)])]),s("div",z,[s("h2",{class:"landing-docs-title pl-130",innerHTML:t.config.documentation.title},null,8,R),s("div",J,[(i(!0),n(p,null,a(t.config.documentation.items,o=>(i(),n("a",{key:o.link,href:t.base(o.link),class:"docs-block"},[s("h3",G,e(o.name),1),s("p",K,e(o.description),1),s("div",Q,[U,s("img",{class:"f-left doc-arrow",src:t.base("/landing/arrow_right.png")},null,8,W)])],8,q))),128))])]),s("div",X,[s("h2",{class:"landing-problems-title mb-6",innerHTML:t.config.problemsSection.title},null,8,Y),s("p",Z,e(t.config.problemsSection.description1),1),s("div",$,[(i(!0),n(p,null,a(t.config.problemsSection.items,(o,l)=>(i(),n("div",{key:l,class:b(["f-left problem-card",{"mt-15":l===1}]),style:u(`background-color: ${o.color}; ${l===2?"margin-top: -150px":""}`)},[s("span",ss,e(o.description),1),o.image?(i(),n("img",{key:0,class:"f-right problem-img",src:t.base(o.image)},null,8,ts)):d("",!0)],6))),128))]),s("p",es,e(t.config.problemsSection.description2),1)]),os,s("div",is,[s("div",ns,[s("h2",cs,e(t.config.name.title),1),s("p",ls,e(t.config.name.description),1)]),s("img",{src:t.base(t.config.name.image)},null,8,rs)])])):d("",!0)}const as=h(T,[["render",ps]]),ms=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home"},"headers":[],"relativePath":"index.md"}'),ds={name:"index.md"},hs=Object.assign(ds,{setup(c){return(f,m)=>{const r=w("Footer");return i(),n("div",null,[_(as),_(r,{class:"p-130"})])}}});export{ms as __pageData,hs as default};
