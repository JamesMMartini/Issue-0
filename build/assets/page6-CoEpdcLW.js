import{S as d,P as s,W as w,E as c,R as m,a as h,B as u,M as p,T as l,b as f,c as g}from"./RenderPass-DKVN8-Vw.js";/* empty css                   */import{Q as x}from"./quantizeShader-DiOmuulp.js";const r=new d,n=new s(75,window.innerWidth/window.innerHeight,.1,1e3),e=new w;e.setSize(window.innerWidth,window.innerHeight);e.setAnimationLoop(z);document.body.appendChild(e.domElement);window.addEventListener("resize",y,!1);const t=new c(e),S=new m(r,n),P=new h(x);t.addPass(S);t.addPass(P);t.setSize(window.innerWidth,window.innerHeight);const W=new u(1,1,1);new p({color:65280});var i=new l;r.background=i.load("Textures/portland.jpg");const v=new f({uniforms:{texture1:{type:"t",value:i.load("Textures/battle ui.jpg")}},vertexShader:document.getElementById("vertexShader").textContent,fragmentShader:document.getElementById("fragmentShader").textContent}),a=new g(W,v);r.add(a);n.position.z=2;var o=.01;function y(){n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),e.setSize(window.innerWidth,window.innerHeight)}function z(){a.rotation.x+=o,a.rotation.y+=o,t.render()}