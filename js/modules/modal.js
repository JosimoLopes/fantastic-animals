export default function initModal() {
  const openButton = document.querySelector('[data-modal="open"]');
  const closeButton = document.querySelector('[data-modal="close"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  function toggleModal(e) {
    Object.prototype.toString.call(this) === "[object HTMLAnchorElement]" ? e.preventDefault() : null;
    containerModal.classList.toggle("active");
  }

  function clickOut(e) {
    e.target === this ? toggleModal() : "";
  }

  if (openButton && closeButton && containerModal) {
    openButton.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    containerModal.addEventListener("click", clickOut);
  }
}
