import{f as m,o as s,b as c,e,t as r,a as h,F as d,r as _,c as w,h as u,w as x,i as g,j as v,s as b,k as y,d as D,_ as p}from"./entry.2d6b108f.mjs";import{_ as I}from"./PrimaryButton.66271918.mjs";const $={class:"flex flex-col justify-center text-center p-4 transition transition-duration-500 cursor-pointer hover:scale-110"},q=["src"],N={class:"text-white text-2xl mt-6 mb-0 uppercase"},j={class:"m-0 text-sm font-bold uppercase font-sans"},k=m({__name:"NewsItem",props:{newsItem:Object},setup(t){return(n,o)=>(s(),c("div",$,[e("img",{src:`/img/${t.newsItem.img}.webp`,class:"rounded-full w-min self-center img-shadow",alt:""},null,8,q),e("h3",N,r(t.newsItem.title),1),e("p",j,r(t.newsItem.date),1)]))}}),O=h(k,[["__scopeId","data-v-9d0d96e0"]]),P={class:"grid grid-cols-4 justify-around m-block-10 w-full h-33% overflow-hidden"},T=m({__name:"NewsPreviewSlider",props:{news:Array},setup(t){return(n,o)=>{const i=O;return s(),c("div",P,[(s(!0),c(d,null,_(t.news,(a,l)=>(s(),w(i,{key:l,newsItem:a},null,8,["newsItem"]))),128))])}}}),M={id:"slider-1",class:"absolute top-0 left-0 w-full h-full"},V={class:"bg-base_light relative flex w-full h-max p-24 rounded-xl shadow-black/20 shadow-md"},E={class:"left-col"},L={class:"flex justify-between mb-2"},A={class:"flex gap-4"},C={class:"uppercase font-bold text-sm m-0 tracking-1px"},R={class:"text-white m-0 uppercase text-3xl"},S={class:"max-w-65ch"},B={class:"text-sm m-0 mt-8 leading-6 font-sans"},Q={class:"text-sm m-0 mt-4 leading-6 font-sans"},F=g(" Read More "),U={class:"absolute top-50% right--15 translate-y--50% z-10"},z=["src"],H=m({__name:"NewsView",props:{newsObject:Object},setup(t){return(n,o)=>{const i=I;return s(),c("div",M,[e("div",V,[e("div",E,[e("div",L,[e("div",A,[(s(!0),c(d,null,_(t.newsObject.tags,(a,l)=>(s(),c("p",{class:"m-0 text-sm uppercase font-bold text-primary font-sans",key:l},r(a),1))),128))]),e("div",null,[e("p",C,r(t.newsObject.date),1)])]),e("h2",R,r(t.newsObject.title),1),e("div",S,[e("p",B,r(t.newsObject.content),1),e("p",Q,r(t.newsObject.content),1)]),u(i,{class:"mt-16"},{default:x(()=>[F]),_:1})]),e("div",U,[e("img",{src:t.newsObject.contentImg,alt:"",class:"rounded-10px shadow-lg shadow-black/20"},null,8,z)])])])}}}),G=h(H,[["__scopeId","data-v-881720c8"]]),J={class:"relative h-67% w-full"},K=m({__name:"NewsViewSlider",props:{news:Array},setup(t){return(n,o)=>{const i=G;return s(),c("div",J,[(s(!0),c(d,null,_(t.news,(a,l)=>(s(),w(i,{key:l,newsObject:a},null,8,["newsObject"]))),128))])}}}),W={class:"container w-1140px m-auto pb-100px"},X=e("h1",{class:"text-5xl text-center m-0 text-white uppercase"},"News",-1),Y={class:"flex flex-col h-100vh"},Z=m({__name:"News",setup(t){const n=[{title:"Sommer Event 2022 (Deutsch)",date:"28. Mar 2022",img:"News1",tags:["Event","Patchlog"],content:`
     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam eos dolore
            impedit eveniet. Deleniti sed, quia et sit, facilis magnam eos vero neque
            dolor obcaecati cumque sint quod minus beatae.
    `,contentImg:"https://via.placeholder.com/575x450/7c3aed/808080?Text=Digital.com"},{title:"Patchlog #2",date:"26. Mar 2022",img:"News2",tags:["Patchlog"],content:`
     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam eos dolore
            impedit eveniet. Deleniti sed, quia et sit, facilis magnam eos vero neque
            dolor obcaecati cumque sint quod minus beatae.
    `,contentImg:"https://via.placeholder.com/575x450/5c14d8/808080?Text=Digital.com"},{title:"Maintenance 25. Mar 2022",date:"20. Mar 2022",img:"News3",tags:["Maintenance"],content:`
     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam eos dolore
            impedit eveniet. Deleniti sed, quia et sit, facilis magnam eos vero neque
            dolor obcaecati cumque sint quod minus beatae.
    `,contentImg:"https://via.placeholder.com/575x450/8a2be2/808080?Text=Digital.com"},{title:"Patchlog #1",date:"15. Mar 2022",img:"News4",tags:["Patchlog"],content:`
     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam eos dolore
            impedit eveniet. Deleniti sed, quia et sit, facilis magnam eos vero neque
            dolor obcaecati cumque sint quod minus beatae.
    `,contentImg:"https://via.placeholder.com/575x450/0000ff/808080?Text=Digital.com"}];return(o,i)=>{const a=T,l=K;return s(),c("div",W,[X,e("div",Y,[u(a,{news:n}),u(l,{news:n})])])}}}),ee=(t,n)=>{const o=t[n];return o?typeof o=="function"?o():Promise.resolve(o):new Promise((i,a)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(a.bind(null,new Error("Unknown variable dynamic import: "+n)))})},te=""+globalThis.__publicAssetsURL("img/hero.webp"),se=e("img",{src:te,alt:"",width:"1920",height:"800"},null,-1),ne={class:"bg-base flex flex-col justify-center pt-8rem"},ce={__name:"index",setup(t){const n=v("default"),o=b(null);function i(){o.value=D(()=>ee(Object.assign({"../components/default/Tester.vue":()=>p(()=>import("./Tester.cfdceb32.mjs"),["_nuxt/Tester.cfdceb32.mjs","_nuxt/entry.2d6b108f.mjs","_nuxt/entry.6fada19f.css"]),"../components/testComp/Tester.vue":()=>p(()=>import("./Tester.9150aed1.mjs"),["_nuxt/Tester.9150aed1.mjs","_nuxt/entry.2d6b108f.mjs","_nuxt/entry.6fada19f.css"])}),`../components/${n.value}/Tester.vue`))}return y(()=>{i()}),(a,l)=>{const f=Z;return s(),c("div",null,[se,e("main",ne,[u(f)])])}}};export{ce as default};
