const chemicals = [
  {
    name: "3M Scotch-Brite Surface Conditioning Disc",
    signal: "Not Classified as Hazardous",
    pictograms: [],
    sds: "https://multimedia.3m.com/mws/mediawebserver?mwsId=SSSSSuUn_zu8l00xM82xn8_vMv70k17zHvu9lxtD7SSSSSS--"
  },
  {
    name: "Brakleen Brake Parts Cleaner",
    signal: "Danger",
    pictograms: ["flame", "gas-cylinder", "exclamation"],
    sds: "https://www.crcindustries.com/media/msdsen/msds_en-1008009.pdf"
  },
  {
    name: "CRC Power Lube with PTFE",
    signal: "Danger",
    pictograms: ["flame", "gas-cylinder", "health-hazard"],
    sds: "https://www.crcindustries.com/media/msdsen/msds_en-1003623.pdf"
  },
  {
    name: "DAP Dynaflex 230 Sealant",
    signal: "Not Classified as Hazardous",
    pictograms: [],
    sds: "https://www.antiseize.com/Content/Images/sds/m27108.pdf"
  },
  {
    name: "Marvel Mystery Oil – Air Tool Oil",
    signal: "Danger",
    pictograms: ["flame", "exclamation", "health-hazard"],
    sds: "https://beta.lakeland.edu/AboutUs/MSDS/PDFs/3579/Marvel-Air-Tool-Oil-Marvel-Oil-1-26-2017.pdf"
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
  },
  {
    name: "WD‑40 Penetrant and Lubricant",
    signal: "Not Classified as Hazardous",
    pictograms: [],
    sds: "https://itdoesthetrick.com/wp-content/uploads/2023/11/SDS-STAAR-Lubricants-Trick-Shot-PL-Liquid-Rev-2.23.2.pdf"
  }
];

// SORT A–Z (like contact list)
chemicals.sort((a, b) => a.name.localeCompare(b.name));

const list = document.getElementById("list");
const search = document.getElementById("search");

function render(filter = "") {
  list.innerHTML = "";

  chemicals
    .filter(c => c.name.toLowerCase().includes(filter.toLowerCase()))
    .forEach(c => {
      const div = document.createElement("div");
      div.className = "item";

      const pics = c.pictograms
        .map(p => `pictograms/${p}.png`)
        .join("");

      div.innerHTML = `
        <h2>${c.name}</h2>
        <p class="signal">${c.signal}</p>
        <div class="pics">${pics}</div>
        <a href="${c.sds}" target="_blank">View Safety Data Sheet</a>
      `;

      list.appendChild(div);
    });
}

search.addEventListener("input", e => render(e.target.value));
render();
