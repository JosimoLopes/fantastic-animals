import outsideClick from "./outside-click.js";

export default class DropdownMenu {
  constructor(dropMenus) {
    this.dropMenus = document.querySelectorAll(dropMenus);
    this.activeClass = "active";
    this.events = ["touchstart", "click"];

    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  activeDropdownMenu(e) {
    e.preventDefault();
    const element = e.currentTarget;

    e.target.innerHTML === "About" ? element.classList.toggle(this.activeClass) : null;
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  addEvent() {
    this.dropMenus.forEach((menu) => {
      ["touchstart", "click"].forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    this.addEvent();
  }
}
