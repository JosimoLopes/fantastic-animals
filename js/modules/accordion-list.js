export default function initAccordion() {
  const accordionList = document.querySelectorAll("[data-anime='accordion'] dt");
  const activeClass = "active";

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    accordionList.forEach((item) => {
      item.addEventListener("click", (event) => {
        event.currentTarget.classList.toggle(activeClass);
        event.currentTarget.nextElementSibling.classList.toggle(activeClass);
      });
    });
  }
}
