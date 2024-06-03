export default function initFetchBc() {}

async function getBitcoinRate() {
  try {
    const url = "https://blockchain.info/ticker";
    const bcObject = await (await fetch(url)).json();
    const bcRate = (100 / bcObject.BRL.sell).toFixed(4);

    displayRate(bcRate);
  } catch (error) {
    console.log(error);
  }
}

function displayRate(rate) {
  const rateSpan = document.querySelector(".btc-rate");

  rateSpan.innerText = rate;
}

getBitcoinRate();
