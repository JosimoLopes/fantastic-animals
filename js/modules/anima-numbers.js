export default function initAnimaNumbers() {
  const numbers = document.querySelectorAll("[data-number]");

  function animaNumbers() {
    numbers.forEach((n) => {
      const total = +n.innerText;
      const increment = Math.floor(total / 100);
      let start = 0;
      const timer = setInterval(() => {
        start += increment;
        n.innerText = start;
        if (start > total) {
          n.innerText = total;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  }

  let observer;

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("active")) {
      animaNumbers();
      observer.disconnect();
    }
  }

  observer = new MutationObserver(handleMutation);

  const observeTarget = document.querySelector(".numbers");

  observer.observe(observeTarget, {
    attributes: true,
  });
}
