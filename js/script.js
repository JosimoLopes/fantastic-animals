import SubtleScroll from "./modules/subtle-scroll.js";
import Accordion from "./modules/accordion-list.js";
import TabNav from "./modules/tabnav.js";
import initScrollAnimation from "./modules/scroll-anima.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initBusinessHours from "./modules/business-hours.js";
import fetchAnimals from "./modules/fetch-animals.js";
import initFetchBc from "./modules/fetch-bc.js";

const subtleScroll = new SubtleScroll('a[href^="#"]');
subtleScroll.init();

const accordion = new Accordion("[data-anime='accordion'] dt");
accordion.init();

const tabnav = new TabNav("[data-tab='menu'] li", "[data-tab='content'] section");
tabnav.init();

const modal = new Modal('[data-modal="open"]', '[data-modal="close"]', '[data-modal="container"]');
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

initScrollAnimation();
initDropdownMenu();
initMenuMobile();
initBusinessHours();
initFetchBc();
fetchAnimals("./animals-api.json", ".numbers-grid");
