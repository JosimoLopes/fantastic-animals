export default class Modal {
  constructor(openButton, closeButton, containerModal) {
    this.openButton = document.querySelector(openButton);
    this.closeButton = document.querySelector(closeButton);
    this.containerModal = document.querySelector(containerModal);
    this.activeClass = "active";

    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickOut = this.clickOut.bind(this);
  }

  toggleModal() {
    this.containerModal.classList.toggle(this.activeClass);
  }

  eventToggleModal(e) {
    e.preventDefault();
    this.toggleModal();
  }

  clickOut({ target, currentTarget }) {
    target === currentTarget ? this.toggleModal() : "";
  }

  addEventModal() {
    this.openButton.addEventListener("click", this.eventToggleModal);
    this.closeButton.addEventListener("click", this.eventToggleModal);
    this.containerModal.addEventListener("click", this.clickOut);
  }

  init() {
    if (this.openButton && this.closeButton && this.containerModal) {
      this.addEventModal();
    }

    return this;
  }
}
