import outsideClick from "./outside-click.js";

export default class MobileMenu {
  constructor(menuButton, menuList) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.activeClass = "active";
    this.events = ["click", "touchstart"];

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.menuList.classList.toggle(this.activeClass);
    this.menuButton.classList.toggle(this.activeClass);
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
    });
  }

  addEvent() {
    this.menuButton.addEventListener("click", this.openMenu);
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addEvent();
    }

    return this;
  }
}
