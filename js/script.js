import SubtleScroll from "./modules/subtle-scroll.js";
import Accordion from "./modules/accordion-list.js";
import TabNav from "./modules/tab-nav.js";
import ScrollAnimation from "./modules/scroll-animation.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initBusinessHours from "./modules/business-hours.js";
import fetchAnimals from "./modules/fetch-animals.js";
import fetchBc from "./modules/fetch-bc.js";

const subtleScroll = new SubtleScroll('a[href^="#"]');
subtleScroll.init();

const accordion = new Accordion("[data-anime='accordion'] dt");
accordion.init();

const tabNav = new TabNav("[data-tab='menu'] li", "[data-tab='content'] section");
tabNav.init();

const modal = new Modal('[data-modal="open"]', '[data-modal="close"]', '[data-modal="container"]');
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

const scrollAnimation = new ScrollAnimation("[data-anime='scroll']");
scrollAnimation.init();

initDropdownMenu();
initMenuMobile();
initBusinessHours();
fetchAnimals("./animals-api.json", ".numbers-grid");
fetchBc("https://blockchain.info/ticker", ".btc-rate");
