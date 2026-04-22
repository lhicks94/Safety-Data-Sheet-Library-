const chemicals = [
  {
    name: "Brakleen Brake Parts Cleaner",
    signal: "Danger",
    pictograms: ["flame", "gas-cylinder", "exclamation"],
    sds: "https://www.crcindustries.com/media/msdsen/msds_en-1008009.pdf"
  },
  {
    name: "Simple Green Industrial Cleaner",
    signal: "Not Classified as Hazardous",
    pictograms: [],
    sds: "https://cdn.simplegreen.com/downloads/SDS_EN-US_SimpleGreenIndustrialCleanerDegreaser.pdf"
  },
  {
    name: "Ultratane Butane Fuel",
    signal: "Danger",
    pictograms: ["flame", "gas-cylinder"],
    sds: "https://www.masterappliance.com/content/sites/default/files/simple_products/downloads/2024-SDS-Ultratane-Butane-English.pdf"
  }
];

// Alphabetical
chemicals.sort((a, b) => a.name.localeCompare(b.name));

const list = document.getElementById("list");
const search = document.getElementById("search");

function render(filter = "") {
  list.innerHTML = "";

  chemicals
    .filter(c => c.name.toLowerCase().includes(filter.toLowerCase()))
    .forEach(c => {
      const item = document.createElement("div");
      item.className = "item";

      const pics = c.pictograms
        .map(p => `<img src="pictograms/${p}.png">`)
        .join("");

      item.innerHTML = `
        <h2>${c.name}</h2>
        <p class="signal">${c.signal}</p>
        <div class="pics">${pics}</div>
        <a href="${c.sds}" target="_blank">View SDS</a>
      `;

      list.appendChild(item);
    });
}

search.addEventListener("input", e => render(e.target.value));
render();
