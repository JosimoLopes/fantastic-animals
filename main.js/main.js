(()=>{"use strict";function t(t,e,o){const i=document.documentElement,n="data-outside";function s(a){t.contains(a.target)||(t.removeAttribute(n),e.forEach((t=>{i.removeEventListener(t,s)})),o())}t.hasAttribute(n)||(e.forEach((t=>{setTimeout((()=>{i.addEventListener(t,s)}))})),t.setAttribute(n,""))}!async function(){try{const e="https://blockchain.info/ticker";t=(100/(await(await fetch(e)).json()).BRL.sell).toFixed(4),document.querySelector(".btc-rate").innerText=t}catch(t){console.log(t)}var t}(),new class{constructor(t,e){this.links=document.querySelectorAll(t),this.options=void 0===e?{behavior:"smooth",block:"start"}:e,this.scrollToSection=this.scrollToSection.bind(this)}scrollToSection(t){t.preventDefault();const e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)}addLinkEvent(){this.links.forEach((t=>{t.addEventListener("click",this.scrollToSection)}))}init(){return this.links.length&&this.addLinkEvent(),this}}('a[href^="#"]').init(),new class{constructor(t){this.accordionList=document.querySelectorAll(t),this.activeClass="active"}toggleAccordion(t){t.classList.toggle(this.activeClass),t.nextElementSibling.classList.toggle(this.activeClass)}addAccordionEvent(){this.accordionList.forEach((t=>{t.addEventListener("click",(()=>this.toggleAccordion(t)))}))}init(){return this.accordionList.length&&(this.toggleAccordion(this.accordionList[0]),this.addAccordionEvent()),this}}("[data-anime='accordion'] dt").init(),new class{constructor(t,e){this.tabMenu=document.querySelectorAll(t),this.tabContent=document.querySelectorAll(e),this.activeClass="active"}activeTab(t){const e=this.tabContent[t].dataset.anime;this.tabContent.forEach((t=>{t.classList.remove(this.activeClass)})),this.tabContent[t].classList.add(this.activeClass,e)}addTabNavEvent(){this.tabMenu.forEach(((t,e)=>{t.addEventListener("click",(()=>{this.activeTab(e)}))}))}init(){return this.tabMenu.length&&this.tabContent.length&&(this.activeTab(0),this.addTabNavEvent()),this}}("[data-tab='menu'] li","[data-tab='content'] section").init(),new class{constructor(t,e,o){this.openButton=document.querySelector(t),this.closeButton=document.querySelector(e),this.containerModal=document.querySelector(o),this.activeClass="active",this.eventToggleModal=this.eventToggleModal.bind(this),this.clickOut=this.clickOut.bind(this)}toggleModal(){this.containerModal.classList.toggle(this.activeClass)}eventToggleModal(t){t.preventDefault(),this.toggleModal()}clickOut({target:t,currentTarget:e}){t===e&&this.toggleModal()}addEventModal(){this.openButton.addEventListener("click",this.eventToggleModal),this.closeButton.addEventListener("click",this.eventToggleModal),this.containerModal.addEventListener("click",this.clickOut)}init(){return this.openButton&&this.closeButton&&this.containerModal&&this.addEventModal(),this}}('[data-modal="open"]','[data-modal="close"]','[data-modal="container"]').init(),new class{constructor(t){this.tooltips=document.querySelectorAll(t),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseLeave=this.onMouseLeave.bind(this),this.onMouseOver=this.onMouseOver.bind(this)}createTooltipBox(t){const e=document.createElement("div"),o=t.getAttribute("aria-label");e.classList.add("tooltip"),e.innerText=o,document.body.appendChild(e),this.tooltipBox=e}onMouseMove({pageY:t,pageX:e}){this.tooltipBox.style.top=`${t+20}px`,e+240>window.innerWidth?this.tooltipBox.style.left=e-160+"px":this.tooltipBox.style.left=`${e+20}px`}onMouseOver({currentTarget:t}){this.createTooltipBox(t),t.addEventListener("mouseleave",this.onMouseLeave),t.addEventListener("mousemove",this.onMouseMove)}onMouseLeave({currentTarget:t}){this.tooltipBox.remove(),t.removeEventListener("mouseleave",this.onMouseLeave),t.removeEventListener("mousemove",this.onMouseMove)}addTooltipEvent(){this.tooltips.forEach((t=>{t.addEventListener("mouseover",this.onMouseOver)}))}init(){return this.tooltips.length&&this.addTooltipEvent(),this}}("[data-tooltip]").init(),function(){const t=document.querySelectorAll("[data-anime='scroll']"),e=.75*window.innerHeight,o=()=>{t.forEach((t=>{t.getBoundingClientRect().top-e<0?t.classList.add("active"):t.classList.contains("active")&&t.classList.remove("active")}))};t.length&&(o(),window.addEventListener("scroll",o))}(),function(){function e(e){e.preventDefault(),"About"===e.target.innerHTML&&this.classList.toggle("active"),t(this,["touchstart","click"],(()=>{this.classList.remove("active")}))}document.querySelectorAll("[data-dropdown]").forEach((t=>{["touchstart","click"].forEach((o=>{t.addEventListener(o,e)}))}))}(),function(){const e=document.querySelector('[data-menu="button"]'),o=document.querySelector('[data-menu="list"]');e&&e.addEventListener("click",(function(){o.classList.toggle("active"),e.classList.toggle("active"),t(o,["click"],(()=>{o.classList.remove("active"),e.classList.remove("active")}))}))}(),function(){const t=document.querySelector("[data-week]"),e=t.dataset.week.split(",").map(Number),o=t.dataset.hours.split(",").map(Number),i=new Date,n=i.getDay(),s=i.getHours();!function(){const i=-1!==e.indexOf(n),a=s>=o[0]&&s<o[1];i&&a?t.classList.add("open"):t.classList.add("closed")}()}(),async function(){try{const t=await(await fetch("./animals-api.json")).json(),e=document.querySelector(".numbers-grid");t.forEach((t=>{const o=function(t){const e=document.createElement("div");return e.classList.add("animal-number"),e.innerHTML=`<h3>${t.species}</h3><span data-number>${t.total}</span>`,e}(t);e.appendChild(o)})),function(){const t=document.querySelectorAll("[data-number]");let e;e=new MutationObserver((function(o){o[0].target.classList.contains("active")&&(t.forEach((t=>{const e=+t.innerText,o=Math.floor(e/100);let i=0;const n=setInterval((()=>{i+=o,t.innerText=i,i>e&&(t.innerText=e,clearInterval(n))}),25*Math.random())})),e.disconnect())}));const o=document.querySelector(".numbers");e.observe(o,{attributes:!0})}()}catch(t){console.log(t)}}()})();