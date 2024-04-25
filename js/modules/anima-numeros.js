export default function initAnimaNumbers() {
  const numbers = document.querySelectorAll("[data-number]");

  function animaNumbers() {
    numbers.forEach((n) => {
      const total = +n.innerText;
      const increment = Math.floor(total / 100);
      let start = 0;
      const timer = setInterval(() => {
        start = start + increment;
        n.innerText = start;
        if (start > total) {
          n.innerText = total;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  }

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("active")) {
      animaNumbers();
      observer.disconnect();
    }
  }

  const observeTarget = document.querySelector(".numbers");
  const observer = new MutationObserver(handleMutation);

  observer.observe(observeTarget, {
    attributes: true,
  });
}
