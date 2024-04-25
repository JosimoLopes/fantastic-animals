export default function initScrollAnimation() {
  const sections = document.querySelectorAll("[data-anime='scroll']");
  const viewMid = window.innerHeight * 0.75;
  // sections[0].classList.add("active");

  if (sections.length) {
    const scrollAnimation = () => {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - viewMid < 0;

        if (isSectionVisible) {
          section.classList.add("active");
        } else if (section.classList.contains("active")) {
          section.classList.remove("active");
        }
      });
    };

    scrollAnimation();

    window.addEventListener("scroll", scrollAnimation);
  }
}
