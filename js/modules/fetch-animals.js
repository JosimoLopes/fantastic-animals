import AnimaNumbers from "./numbers-animation.js";

export default function fetchAnimals(url, target) {
  const sectionNumbers = document.querySelector(target);

  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("animal-number");
    div.innerHTML = `<h3>${animal.species}</h3><span data-number>${animal.total}</span>`;
    return div;
  }

  function fillAnimals(animal) {
    const divAnimal = createAnimal(animal);
    sectionNumbers.appendChild(divAnimal);
  }

  function animaAnimalNumbers() {
    const animaNumbers = new AnimaNumbers("[data-number]", ".numbers", "active");
    animaNumbers.init();
  }

  async function createAnimals() {
    try {
      const animalsJSON = await (await fetch(url)).json();
      animaAnimalNumbers();
      animalsJSON.forEach((a) => {
        fillAnimals(a);
      });
    } catch (error) {
      console.log(error);
    }
  }

  return createAnimals();
}
