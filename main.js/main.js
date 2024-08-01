(()=>{"use strict";function t(t,e,n){const o=document.documentElement,c="data-outside";function s(i){t.contains(i.target)||(t.removeAttribute(c),e.forEach((t=>{o.removeEventListener(t,s)})),n())}t.hasAttribute(c)||(e.forEach((t=>{setTimeout((()=>{o.addEventListener(t,s)}))})),t.setAttribute(c,""))}!async function(){try{const e="https://blockchain.info/ticker";t=(100/(await(await fetch(e)).json()).BRL.sell).toFixed(4),document.querySelector(".btc-rate").innerText=t}catch(t){console.log(t)}var t}(),new class{constructor(t,e){this.links=document.querySelectorAll(t),this.options=void 0===e?{behavior:"smooth",block:"start"}:e,this.scrollToSection=this.scrollToSection.bind(this)}scrollToSection(t){t.preventDefault();const e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)}addLinkEvent(){this.links.forEach((t=>{t.addEventListener("click",this.scrollToSection)}))}init(){return this.links.length&&this.addLinkEvent(),this}}('a[href^="#"]').init(),function(){const t=document.querySelectorAll("[data-anime='scroll']"),e=.75*window.innerHeight,n=()=>{t.forEach((t=>{t.getBoundingClientRect().top-e<0?t.classList.add("active"):t.classList.contains("active")&&t.classList.remove("active")}))};t.length&&(n(),window.addEventListener("scroll",n))}(),function(){const t=document.querySelectorAll("[data-tab='menu'] li"),e=document.querySelectorAll("[data-tab='content'] section"),n="active";t.length&&e.length&&(e[0].classList.add(n),t.forEach(((t,o)=>{t.addEventListener("click",(()=>{!function(t){const o=e[t].dataset.anime;e.forEach((t=>{t.classList.remove(n)})),e[t].classList.add(n,o)}(o)}))})))}(),function(){const t=document.querySelectorAll("[data-anime='accordion'] dt"),e="active";t.length&&(t[0].classList.add(e),t[0].nextElementSibling.classList.add(e),t.forEach((t=>{t.addEventListener("click",(t=>{t.currentTarget.classList.toggle(e),t.currentTarget.nextElementSibling.classList.toggle(e)}))})))}(),function(){const t=document.querySelector('[data-modal="open"]'),e=document.querySelector('[data-modal="close"]'),n=document.querySelector('[data-modal="container"]');function o(t){"[object HTMLAnchorElement]"===Object.prototype.toString.call(this)&&t.preventDefault(),n.classList.toggle("active")}t&&e&&n&&(t.addEventListener("click",o),e.addEventListener("click",o),n.addEventListener("click",(function(t){t.target===this&&o()})))}(),function(){const t=document.querySelectorAll("[data-tooltip]"),e={handleEvent(t){this.tooltipBox.style.top=t.pageY+20+"px",this.tooltipBox.style.left=t.pageX+20+"px"}},n={handleEvent(){this.tooltipBox.remove(),this.element.removeEventListener("mouseleave",n),this.element.removeEventListener("mousemove",e)}};function o({pageY:t,pageX:o}){const c=(t=>{const e=document.createElement("div"),n=t.getAttribute("aria-label");return e.classList.add("tooltip"),e.innerText=n,document.body.appendChild(e),e})(this);c.style.top=`${t}px`,c.style.left=`${o}px`,e.tooltipBox=c,e.element=this,n.tooltipBox=c,n.element=this,this.addEventListener("mouseleave",n),this.addEventListener("mousemove",e)}t.forEach((t=>{t.addEventListener("mouseover",o)}))}(),function(){function e(e){e.preventDefault(),"About"===e.target.innerHTML&&this.classList.toggle("active"),t(this,["touchstart","click"],(()=>{this.classList.remove("active")}))}document.querySelectorAll("[data-dropdown]").forEach((t=>{["touchstart","click"].forEach((n=>{t.addEventListener(n,e)}))}))}(),function(){const e=document.querySelector('[data-menu="button"]'),n=document.querySelector('[data-menu="list"]');e&&e.addEventListener("click",(function(){n.classList.toggle("active"),e.classList.toggle("active"),t(n,["click"],(()=>{n.classList.remove("active"),e.classList.remove("active")}))}))}(),function(){const t=document.querySelector("[data-week]"),e=t.dataset.week.split(",").map(Number),n=t.dataset.hours.split(",").map(Number),o=new Date,c=o.getDay(),s=o.getHours();!function(){const o=-1!==e.indexOf(c),i=s>=n[0]&&s<n[1];o&&i?t.classList.add("open"):t.classList.add("closed")}()}(),async function(){try{const t=await(await fetch("./animals-api.json")).json(),e=document.querySelector(".numbers-grid");t.forEach((t=>{const n=function(t){const e=document.createElement("div");return e.classList.add("animal-number"),e.innerHTML=`<h3>${t.species}</h3><span data-number>${t.total}</span>`,e}(t);e.appendChild(n)})),function(){const t=document.querySelectorAll("[data-number]");let e;e=new MutationObserver((function(n){n[0].target.classList.contains("active")&&(t.forEach((t=>{const e=+t.innerText,n=Math.floor(e/100);let o=0;const c=setInterval((()=>{o+=n,t.innerText=o,o>e&&(t.innerText=e,clearInterval(c))}),25*Math.random())})),e.disconnect())}));const n=document.querySelector(".numbers");e.observe(n,{attributes:!0})}()}catch(t){console.log(t)}}()})();