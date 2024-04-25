import outsideClick from "./outside-click.js";

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');

  if (menuButton) {
    function openMenu(e) {
      menuList.classList.toggle("active");
      menuButton.classList.toggle("active");
      outsideClick(menuList, ["click"], () => {
        menuList.classList.remove("active");
        menuButton.classList.remove("active");
      });
    }

    menuButton.addEventListener("click", openMenu);
  }
}
