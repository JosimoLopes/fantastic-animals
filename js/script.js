import SubtleScroll from "./modules/subtle-scroll.js";
import Accordion from "./modules/accordion-list.js";
import initScrollAnimation from "./modules/scroll-anima.js";
import initTabNav from "./modules/tabnav.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initBusinessHours from "./modules/business-hours.js";
import initFetchAnimals from "./modules/fetch-animals.js";
import initFetchBc from "./modules/fetch-bc.js";

const subtleScroll = new SubtleScroll('a[href^="#"]');
subtleScroll.init();

const accordion = new Accordion("[data-anime='accordion'] dt");
accordion.init();

initScrollAnimation();
initTabNav();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initBusinessHours();
initFetchAnimals();
initFetchBc();
