import initAnimaNumbers from "./anima-numbers.js";

export default function initFetchAnimals() {
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("animal-number");
    div.innerHTML = `<h3>${animal.species}</h3><span data-number>${animal.total}</span>`;
    return div;
  }

  async function fetchAnimals(url) {
    try {
      const animalsJSON = await (await fetch(url)).json();
      const sectionNumbers = document.querySelector(".numbers-grid");

      animalsJSON.forEach((a) => {
        const divAnimal = createAnimal(a);

        sectionNumbers.appendChild(divAnimal);
      });

      initAnimaNumbers();
    } catch (error) {
      console.log(error);
    }
  }

  fetchAnimals("./animals-api.json");
}
