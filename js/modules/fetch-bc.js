export default function fetchBc(url, target) {
  async function fetchBitcoinRate() {
    try {
      const bcObject = await (await fetch(url)).json();
      const bcRate = (100 / bcObject.BRL.sell).toFixed(4);

      displayRate(bcRate);
    } catch (error) {
      console.log(error);
    }
  }

  function displayRate(rate) {
    const rateSpan = document.querySelector(target);

    rateSpan.innerText = rate;
  }

  fetchBitcoinRate();
}
