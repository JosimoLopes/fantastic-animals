export default function initTooltip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");

  tooltips.forEach((t) => {
    t.addEventListener("mouseover", onMouseOver);
  });

  function onMouseOver(e) {
    const tooltipBox = createTooltipBox(this);
    tooltipBox.style.top = e.pageY + "px";
    tooltipBox.style.left = e.pageX + "px";

    onMouseMove.tooltipBox = tooltipBox;
    onMouseMove.element = this;

    onMouseLeave.tooltipBox = tooltipBox; // Here I'm assigning a value to the onMouseLeave.tooltipBox, which i can access from inside onMouseOver function.
    onMouseLeave.element = this;

    this.addEventListener("mouseleave", onMouseLeave);
    this.addEventListener("mousemove", onMouseMove);
  }

  // This is an object, and if it has a handleEvent() method, it can be passed as a EventListener callback
  const onMouseLeave = {
    // tooltipBox: "", // Here tooltipBox is empty. And I don't need it here inside, as long as I'm assigning it from outside.
    handleEvent() {
      this.tooltipBox.remove(); // this refers to the object itself.
      this.element.removeEventListener("mouseleave", onMouseLeave);
      this.element.removeEventListener("mousemove", onMouseMove);
    },
  };

  const onMouseMove = {
    handleEvent(e) {
      this.tooltipBox.style.top = e.pageY + 20 + "px";
      this.tooltipBox.style.left = e.pageX + 20 + "px";
    },
  };

  const createTooltipBox = (element) => {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  };
}
