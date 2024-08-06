export default class AnimaNumbers {
  constructor(numbers, observeTarget, observerClass) {
    this.numbers = document.querySelectorAll(numbers);
    this.observeTarget = document.querySelector(observeTarget);
    this.observerClass = observerClass;

    this.handleMutation = this.handleMutation.bind(this);
  }

  static incrementNumber(number) {
    const total = +number.innerText;
    const increment = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      start += increment;
      number.innerText = start;
      if (start > total) {
        number.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  animaNumbers() {
    this.numbers.forEach((n) => {
      this.constructor.incrementNumber(n);
    });
  }

  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.animaNumbers();
      this.observer.disconnect();
    }
  }

  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observeTarget, {
      attributes: true,
    });
  }

  init() {
    if (this.numbers.length && this.observeTarget) {
      this.addMutationObserver();
    }

    return this;
  }
}
