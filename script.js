const chemicals = [

  // --- A ---
  {
    name: "3M EPX Mixing Nozzle Helical Orange",
    signal: "Danger",
    pictograms: ["exclamation", "health-hazard"],
    sds: "https://cdmsweb.3m.com/ingredientcommunication/file/Media/v5hvMUIBDkw"
  },
  {
    name: "3M Scotch-Brite General Purpose Pads",
    signal: "Not Classified as Hazardous",
    pictograms: [],
    sds: "https://cdmsweb.3m.com/ingredientcommunication/file/Media/8luAsFKZ2po"
  },
  {
    name: "3M Scotch-Brite Surface Conditioning Disc",
    signal: "Not Classified as Hazardous",
    pictograms: [],
    sds: "https://multimedia.3m.com/mws/mediawebserver?mwsId=SSSSSuUn_zu8l00xM82xn8_vMv70k17zHvu9lxtD7SSSSSS--"
  },
  {
    name: "40+ 967A TY27 Flap Disc (40 Grit)",
    signal: "Not Classified as Hazardous",
    pictograms: [],
    sds: "https://www.weilerabrasives.com/hubfs/products/Original-10013-WSDS-002%20Abrasive%20Flap%20Disc%20-%20Glass%20Fibre%20Backed%20SDS%20(EN)%20Rev.%20B.pdf"
  },
  {
    name: "40+ 967A TY27 Flap Disc (60 Grit)",
    signal: "Not Classified as Hazardous",
    pictograms: [],
    sds: "https://www.weilerabrasives.com/hubfs/products/Original-10013-WSDS-002%20Abrasive%20Flap%20Disc%20-%20Glass%20Fibre%20Backed%20SDS%20(EN)%20Rev.%20B.pdf"
  },

  // --- B ---
  {
    name: "Brakleen Brake Parts Cleaner",
    signal: "Danger",
    pictograms: ["flame", "gas-cylinder", "exclamation"],
    sds: "https://www.crcindustries.com/media/msdsen/msds_en-1008009.pdf"
  },

  // --- C ---
  {
    name: "CRC Power Lube with PTFE",
    signal: "Danger",
    pictograms: ["flame", "gas-cylinder", "health-hazard"],
    sds: "https://www.crcindustries.com/media/msdsen/msds_en-1003623.pdf"
  },

  // --- D ---
  {
    name: "DAP Dynaflex 230 Sealant",
    signal: "Not Classified as Hazardous",
    pictograms: [],
    sds: "https://www.antiseize.com/Content/Images/sds/m27108.pdf"
  },

  // --- E ---
  {
    name: "EternaBond RoofSeal Tape",
    signal: "Not Classified as Hazardous",
    pictograms: [],
    sds: "https://acumatica.titansc.com/documents/sds/RA-RoofSeal%20SDS%202-2015.pdf"
  },

  // --- H ---
  {
    name: "HoldFast 70 Spray Adhesive",
    signal: "Danger",
    pictograms: ["flame", "exclamation", "health-hazard"],
    sds: "https://multimedia.3m.com/mws/mediawebserver?mwsId=SSSSSuUn_zu8l00xMx2UN82Glv70k17zHvu9lxtD7SSSSSS--"
  },
  {
    name: "HydroForce Glass Cleaner (Aerosol)",
    signal: "Danger",
    pictograms: ["flame", "corrosion", "health-hazard"],
    sds: "https://cdmsweb.3m.com/ingredientcommunication/file/Media/35J1_tODZTw"
  },

  // --- L ---
  {
    name: "Lenox Lube Tube Cutting Lubricant",
    signal: "Warning",
    pictograms: ["exclamation"],
    sds: "https://assetcloud.roccommerce.net/files/_kljack/7/7/8/lenox-lube-tube-cutting-lubricant-stick-sds.pdf"
  },

  // --- M ---
  {
    name: "Marvel Mystery Oil – Air Tool Oil",
    signal: "Danger",
    pictograms: ["flame", "exclamation", "health-hazard"],
    sds: "https://beta.lakeland.edu/AboutUs/MSDS/PDFs/3579/Marvel-Air-Tool-Oil-Marvel-Oil-1-26-2017.pdf"
  },

  // --- R ---
  {
    name: "Rapid Tap Cutting Fluid",
    signal: "Warning",
    pictograms: ["environment"],
    sds: "https://www.relton.com/_files/ugd/1ddeb7_7fb7e6e1096546a4afdbb28192349493.pdf"
  },
  {
    name: "Rust-Oleum Painter’s Touch Aerosol",
    signal: "Danger",
    pictograms: ["flame", "exclamation", "health-hazard", "gas-cylinder"],
    sds: "https://www.rustoleum.com/MSDS/ENGLISH/249090.pdf"
  },

  // --- S ---
  {
    name: "Simple Green Industrial Cleaner",
    signal: "Not Classified as Hazardous",
    pictograms: [],
    sds: "https://cdn.simplegreen.com/downloads/SDS_EN-US_SimpleGreenIndustrialCleanerDegreaser.pdf"
  },

  // --- T ---
  {
    name: "TremPro 644 RTV Silicone (Black)",
    signal: "Danger",
    pictograms: ["exclamation", "health-hazard"],
    sds: "https://www.buildsite.com/pdf/tremco/TremPro-644-RTV-SDS-2551293.pdf"
  },

  // --- U ---
  {
    name: "Ultratane Butane Fuel",
    signal: "Danger",
    pictograms: ["flame", "gas-cylinder"],
    sds: "https://www.masterappliance.com/content/sites/default/files/simple_products/downloads/2024-SDS-Ultratane-Butane-English.pdf"
  },

  // --- W ---
  {
    name: "WD-40 Penetrant and Lubricant",
    signal: "Not Classified as Hazardous",
    pictograms: [],
    sds: "https://itdoesthetrick.com/wp-content/uploads/2023/11/SDS-STAAR-Lubricants-Trick-Shot-PL-Liquid-Rev-2.23.2.pdf"
  },
  {
    name: "Windex Glass Cleaner",
    signal: "Not Classified as Hazardous",
    pictograms: [],
    sds: "https://www.scjp.com/sites/default/files/2025-05/328049%20-%20Windex%20Original%20Glass%20Cleaner_0.pdf"
  }
];

// ===============================
// RENDER LOGIC (Contact‑List Style)
// ===============================

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

      const pictos = c.pictograms
        .map(p => `<img src="pictograms/${p}.png" alt="${p} pictogram">`)
        .join("");

      div.innerHTML = `
        <h2>${c.name}</h2>
        <p class="signal">${c.signal}</p>
        <div class="pics">${pictos}</div>
        <a href="${c.sds}" target="_blank">View Safety Data Sheet</a>
      `;

      list.appendChild(div);
    });
}

search.addEventListener("input", e => render(e.target.value));
render();
``
