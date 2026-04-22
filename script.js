document.addEventListener("DOMContentLoaded", () => {

  const chemicals = [

    { name: "3M EPX Mixing Nozzle Helical Orange", signal: "Danger", sds: "https://cdmsweb.3m.com/ingredientcommunication/file/Media/v5hvMUIBDkw" },
    { name: "3M Scotch-Brite General Purpose Pads", signal: "Not Classified as Hazardous", sds: "https://cdmsweb.3m.com/ingredientcommunication/file/Media/8luAsFKZ2po" },
    { name: "3M Scotch-Brite Surface Conditioning Disc", signal: "Not Classified as Hazardous", sds: "https://multimedia.3m.com/mws/mediawebserver?mwsId=SSSSSuUn_zu8l00xM82xn8_vMv70k17zHvu9lxtD7SSSSSS--" },
    { name: "40+ 967A TY27 Flap Disc – 40 Grit", signal: "Not Classified as Hazardous", sds: "https://www.weilerabrasives.com/hubfs/products/Original-10013-WSDS-002%20Abrasive%20Flap%20Disc%20-%20Glass%20Fibre%20Backed%20SDS%20(EN)%20Rev.%20B.pdf" },
    { name: "40+ 967A TY27 Flap Disc – 60 Grit", signal: "Not Classified as Hazardous", sds: "https://www.weilerabrasives.com/hubfs/products/Original-10013-WSDS-002%20Abrasive%20Flap%20Disc%20-%20Glass%20Fibre%20Backed%20SDS%20(EN)%20Rev.%20B.pdf" },

    { name: "Antiseptic Spray", signal: "Danger", sds: "https://www.medline.com/media/catalog/Docs/MSDS/MSD_SDSD15856.pdf" },
    { name: "Antiseptic Wipes", signal: "Not Classified as Hazardous", sds: "https://assets.pim.ecolab.com/media/Original/10001/AU-EN-919771-04-ASEPTI%20DISINFECTANT%201%20WIPES.PDF" },

    { name: "ASI 502 100% Silicone Sealant", signal: "Not Classified as Hazardous", sds: "https://products.meridianadhesives.com/storage/downloads/mj9u5d1bi0fkv1tdrje93btish9n2pzm/asi-502-clear-2022.pdf" },

    { name: "ABC Fire Extinguisher – 5 lb", signal: "Danger", sds: "https://www.firesafetysupply.net/content/uploads/2024/MSDS-Ansul-ABC-ext.pdf" },

    { name: "Brakleen Brake Parts Cleaner", signal: "Danger", sds: "https://www.crcindustries.com/media/msdsen/msds_en-1008009.pdf" },

    { name: "CRC Power Lube with PTFE", signal: "Danger", sds: "https://www.crcindustries.com/media/msdsen/msds_en-1003623.pdf" },

    { name: "DAP Dynaflex 230 Sealant", signal: "Not Classified as Hazardous", sds: "https://www.antiseize.com/Content/Images/sds/m27108.pdf" },

    { name: "EternaBond RoofSeal Tape", signal: "Not Classified as Hazardous", sds: "https://acumatica.titansc.com/documents/sds/RA-RoofSeal%20SDS%202-2015.pdf" },

    { name: "Green Scapes Ice Melt", signal: "Not Classified as Hazardous", sds: "https://scotwoodindustries.com/wp-content/uploads/2021/01/Green-Scapes-SDS.pdf" },

    { name: "HoldFast 70 Spray Adhesive", signal: "Danger", sds: "https://multimedia.3m.com/mws/mediawebserver?mwsId=SSSSSuUn_zu8l00xMx2UN82Glv70k17zHvu9lxtD7SSSSSS--" },

    { name: "HydroForce Glass Cleaner – Aerosol", signal: "Danger", sds: "https://cdmsweb.3m.com/ingredientcommunication/file/Media/35J1_tODZTw" },

    { name: "HydroForce Glass Cleaner – Spray Bottle", signal: "Not Classified as Hazardous", sds: "https://d10jeql2ox25hq.cloudfront.net/userfiles/ad/documents/idw_document_04c41d875808c7a6696c78d16bc2f7c8d1a2424b2ffc3b1eeddacd4ab4b514d1.pdf" },

    { name: "Lenox Lube Tube Cutting Lubricant", signal: "Warning", sds: "https://assetcloud.roccommerce.net/files/_kljack/7/7/8/lenox-lube-tube-cutting-lubricant-stick-sds.pdf" },

    { name: "Manus Bond 75‑AM – 10 oz", signal: "Danger", sds: "https://www.manus.net/dp/path=/asset/sds/man-002-manus-bond-75-am-industrial-grade-sds.pdf" },
    { name: "Manus Bond 75‑AM – 20 oz", signal: "Danger", sds: "https://www.manus.net/dp/path=/asset/sds/man-002-manus-bond-75-am-industrial-grade-sds.pdf" },

    { name: "Marvel Mystery Oil – Air Tool Oil", signal: "Danger", sds: "https://beta.lakeland.edu/AboutUs/MSDS/PDFs/3579/Marvel-Air-Tool-Oil-Marvel-Oil-1-26-2017.pdf" },

    { name: "Painter’s Touch 2X Aerosol Paint", signal: "Danger", sds: "https://www.rustoleum.com/MSDS/ENGLISH/334026.pdf" },

    { name: "PVC Foam Sheet", signal: "Not Classified as Hazardous", sds: "https://plaskolite.com/docs/default-source/sds/sds044_psk_pvc.pdf" },

    { name: "Rapid Tap Cutting Fluid", signal: "Warning", sds: "https://www.relton.com/_files/ugd/1ddeb7_7fb7e6e1096546a4afdbb28192349493.pdf" },

    { name: "Simple Green Industrial Cleaner", signal: "Not Classified as Hazardous", sds: "https://cdn.simplegreen.com/downloads/SDS_EN-US_SimpleGreenIndustrialCleanerDegreaser.pdf" },

    { name: "Sikaflex‑227", signal: "Danger", sds: "https://usa.sika.com/dam/dms/us01/r/Sikaflex-227-US.pdf" },

    { name: "Temflex Vinyl Electrical Tape", signal: "Not Classified as Hazardous", sds: "https://multimedia.3m.com/mws/media/1879716O/3m-temflex-vinyl-electrical-tape-165-data-sheet.pdf" },

    { name: "TremPro 644 RTV Silicone – Black", signal: "Danger", sds: "https://www.buildsite.com/pdf/tremco/TremPro-644-RTV-SDS-2551293.pdf" },
    { name: "TremPro 644 RTV Silicone – White", signal: "Danger", sds: "https://www.buildsite.com/pdf/tremco/TremPro-644-RTV-SDS-2551293.pdf" },

    { name: "Ultratane Butane Fuel", signal: "Danger", sds: "https://www.masterappliance.com/content/sites/default/files/simple_products/downloads/2024-SDS-Ultratane-Butane-English.pdf" },

    { name: "Windex Glass Cleaner", signal: "Not Classified as Hazardous", sds: "https://www.scjp.com/sites/default/files/2025-05/328049%20-%20Windex%20Original%20Glass%20Cleaner_0.pdf" },

    { name: "WD‑40 Penetrant and Lubricant", signal: "Not Classified as Hazardous", sds: "https://itdoesthetrick.com/wp-content/uploads/2023/11/SDS-STAAR-Lubricants-Trick-Shot-PL-Liquid-Rev-2.23.2.pdf" }

  ];

  // Alphabetize
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
        div.innerHTML = `
          <h2>${c.name}</h2>
          <p class="signal">${c.signal}</p>
          <a href="${c.sds}" target="_blank" rel="noopener">View Safety Data Sheet</a>
        `;
        list.appendChild(div);
      });
  }

  search.addEventListener("input", e => render(e.target.value));
  render();
});
``
