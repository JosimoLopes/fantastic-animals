export default function initSubtleScroll() {
  const internalLinks = document.querySelectorAll('a[href^="#"]');

  internalLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const href = event.currentTarget.getAttribute("href");
      const section = document.querySelector(href);

      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Alternative way
      // const section = document.querySelector(href).offsetTop;
      // window.scrollTo({
      //   top: section,
      //   behavior: "smooth",
      // });
    });
  });
}
