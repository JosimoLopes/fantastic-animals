import SubtleScroll from "./modules/subtle-scroll.js";
import Accordion from "./modules/accordion-list.js";
import TabNav from "./modules/tab-nav.js";
import ScrollAnimation from "./modules/scroll-animation.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import DropdownMenu from "./modules/dropdown-menu.js";
import MobileMenu from "./modules/mobile-menu.js";
import BusinessHours from "./modules/business-hours.js";
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

const dropdownMenu = new DropdownMenu("[data-dropdown]");
dropdownMenu.init();

const mobileMenu = new MobileMenu('[data-menu="button"]', '[data-menu="list"]');
mobileMenu.init();

const businessHours = new BusinessHours("[data-week]");
businessHours.init();

fetchAnimals("./animals-api.json", ".numbers-grid");
fetchBc("https://blockchain.info/ticker", ".btc-rate");
