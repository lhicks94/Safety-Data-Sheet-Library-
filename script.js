document.addEventListener("DOMContentLoaded", () => {

  const chemicals = [

    { name: "3M Scotch Brite Surface Conditioning Disc", signal: "Not Classified as Hazardous", sds: "https://multimedia.3m.com/mws/mediawebserver?mwsId=SSSSSuUn_zu8l00xM82xn8_vMv70k17zHvu9lxtD7SSSSSS--" },
    { name: "3M Scotch Brite General Purpose Pads", signal: "Not Classified as Hazardous", sds: "https://cdmsweb.3m.com/ingredientcommunication/file/Media/8luAsFKZ2po" },
    { name: "40+ 967A TY27 Flap Disc", signal: "Not Classified as Hazardous", sds: "https://www.weilerabrasives.com/hubfs/products/Original-10013-WSDS-002%20Abrasive%20Flap%20Disc%20-%20Glass%20Fibre%20Backed%20SDS%20(EN)%20Rev.%20B.pdf" },
    { name: "60+ 967A TY27 Flap Disc", signal: "Not Classified as Hazardous", sds: "https://www.weilerabrasives.com/hubfs/products/Original-10013-WSDS-002%20Abrasive%20Flap%20Disc%20-%20Glass%20Fibre%20Backed%20SDS%20(EN)%20Rev.%20B.pdf" },

    { name: "Power Lube Multi-Purpose", signal: "Danger", sds: "https://www.crcindustries.com/media/msdsen/msds_en-1003623.pdf" },
    { name: "Brakleen Brake Parts Cleaner 20 oz", signal: "Danger", sds: "https://www.crcindustries.com/media/msdsen/msds_en-1008009.pdf" },
    { name: "HydroForce Glass Cleaner (Aerosol)", signal: "Danger", sds: "https://cdmsweb.3m.com/ingredientcommunication/file/Media/35J1_tODZTw" },
    { name: "WD‑40 Penetrating Lubricant", signal: "Not Classified as Hazardous", sds: "https://itdoesthetrick.com/wp-content/uploads/2023/11/SDS-STAAR-Lubricants-Trick-Shot-PL-Liquid-Rev-2.23.2.pdf" },
    { name: "HydroForce Glass Cleaner (Spray Bottle)", signal: "Not Classified as Hazardous", sds: "https://d10jeql2ox25hq.cloudfront.net/userfiles/ad/documents/idw_document_04c41d875808c7a6696c78d16bc2f7c8d1a2424b2ffc3b1eeddacd4ab4b514d1.pdf" },
    { name: "Simple Green Industrial Cleaner", signal: "Not Classified as Hazardous", sds: "https://cdn.simplegreen.com/downloads/SDS_EN-US_SimpleGreenIndustrialCleanerDegreaser.pdf" },

    { name: "Lenox Lube Tube", signal: "Warning", sds: "https://assetcloud.roccommerce.net/files/_kljack/7/7/8/lenox-lube-tube-cutting-lubricant-stick-sds.pdf" },
    { name: "Tempro 644 RTV Silicone – Aluminum", signal: "Danger", sds: "https://www.antiseize.com/Content/Images/sds/m27109.pdf" },
    { name: "TremPro 644 RTV Silicone – Black", signal: "Danger", sds: "https://www.buildsite.com/pdf/tremco/TremPro-644-RTV-SDS-2551293.pdf" },
    { name: "ASI 502 Clear Silicone", signal: "Not Classified as Hazardous", sds: "https://products.meridianadhesives.com/storage/downloads/mj9u5d1bi0fkv1tdrje93btish9n2pzm/asi-502-clear-2022.pdf" },
    { name: "Rapid Tap Cutting Fluid", signal: "Warning", sds: "https://www.relton.com/_files/ugd/1ddeb7_7fb7e6e1096546a4afdbb28192349493.pdf" },

    { name: "DAP Dynaflex 230 Sealant", signal: "Not Classified as Hazardous", sds: "https://www.antiseize.com/Content/Images/sds/m27108.pdf" },
    { name: "Rust‑Oleum Painter’s Touch – Gloss White", signal: "Danger", sds: "https://www.rustoleum.com/MSDS/ENGLISH/249090.pdf" },
    { name: "Rust‑Oleum Painter’s Touch – Aluminum", signal: "Danger", sds: "https://www.rustoleum.com/MSDS/ENGLISH/249128.pdf" },
    { name: "Rust‑Oleum Painter’s Touch 2X – Gloss Black", signal: "Danger", sds: "https://www.rustoleum.com/MSDS/ENGLISH/334026.pdf" },

    { name: "Polyurethane Sealant 540", signal: "Danger", sds: "https://img1.fastenal.com/infp360pmm/medias/docus/1378/$v7/0604449_sds_eng.pdf" },
    { name: "Sikaflex‑227", signal: "Danger", sds: "https://usa.sika.com/dam/dms/us01/r/Sikaflex-227-US.pdf" },
    { name: "Poly Sealant 540 (400 ml)", signal: "Danger", sds: "https://img1.fastenal.com/infp360pmm/medias/docus/1378/$v7/0604449_sds_eng.pdf" },
    { name: "Manus Bond 75‑AM – 10 oz", signal: "Danger", sds: "https://www.manus.net/dp/path=/asset/sds/man-002-manus-bond-75-am-industrial-grade-sds.pdf" },
    { name: "Manus Bond 75‑AM – 20 oz", signal: "Danger", sds: "https://www.manus.net/dp/path=/asset/sds/man-002-manus-bond-75-am-industrial-grade-sds.pdf" },
    { name: "Hybrid Adhesive Sealant", signal: "Danger", sds: "https://multimedia.3m.com/mws/mediawebserver?mwsId=SSSSSuUn_zu8l00xMYt1oYtvov70k17zHvu9lxtD7SSSSSS--" },

    { name: "Scotch‑Weld Acrylic Adhesive", signal: "Warning", sds: "https://multimedia.3m.com/mws/mediawebserver?mwsId=SSSSSuUn_zu8l00xm82U4xtvov70k17zHvu9lxtD7SSSSSS--" },
    { name: "Ultratane Butane Fuel", signal: "Danger", sds: "https://www.masterappliance.com/content/sites/default/files/simple_products/downloads/2024-SDS-Ultratane-Butane-English.pdf" },
    { name: "HoldFast 70 Spray Adhesive", signal: "Danger", sds: "https://multimedia.3m.com/mws/mediawebserver?mwsId=SSSSSuUn_zu8l00xMx2UN82Glv70k17zHvu9lxtD7SSSSSS--" },
    { name: "Marvel Mystery Oil – Air Tool Oil", signal: "Danger", sds: "https://beta.lakeland.edu/AboutUs/MSDS/PDFs/3579/Marvel-Air-Tool-Oil-Marvel-Oil-1-26-2017.pdf" },
    { name: "TremPro 644 RTV Silicone – White", signal: "Danger", sds: "https://www.buildsite.com/pdf/tremco/TremPro-644-RTV-SDS-2551293.pdf" },
    { name: "Scotch‑Weld Epoxy Adhesive", signal: "Danger", sds: "https://cdmsweb.3m.com/ingredientcommunication/file/Media/v5hvMUIBDkw" },

    { name: "PVC Foam Sheet", signal: "Not Classified as Hazardous", sds: "https://plaskolite.com/docs/default-source/sds/sds044_psk_pvc.pdf" },
    { name: "VHB GPH‑110GF Tape", signal: "Not Classified as Hazardous", sds: "https://docs.rs-online.com/313b/A700000008615487.pdf" },
    { name: "Windex Glass Cleaner", signal: "Not Classified as Hazardous", sds: "https://www.scjp.com/sites/default/files/2025-05/328049%20-%20Windex%20Original%20Glass%20Cleaner_0.pdf" },

    { name: "Valve Action Paint Marker – Orange", signal: "Not Classified as Hazardous", sds: "https://www.jbind.com/wp-content/uploads/2021/05/Valve-Action-Paint-Marker-SDS.pdf" },
    { name: "Valve Action Paint Marker – Light Blue", signal: "Not Classified as Hazardous", sds: "https://www.jbind.com/wp-content/uploads/2021/05/Valve-Action-Paint-Marker-SDS.pdf" },
    { name: "Valve Action Paint Marker – Pink", signal: "Not Classified as Hazardous", sds: "https://www.jbind.com/wp-content/uploads/2021/05/Valve-Action-Paint-Marker-SDS.pdf" },
    { name: "Valve Action Paint Marker – Light Green", signal: "Not Classified as Hazardous", sds: "https://www.jbind.com/wp-content/uploads/2021/05/Valve-Action-Paint-Marker-SDS.pdf" },

    { name: "ABC Fire Extinguisher – 5 lb", signal: "Danger", sds: "https://www.firesafetysupply.net/content/uploads/2024/MSDS-Ansul-ABC-ext.pdf" },
    { name: "Waterproof Patch & Seal Tape", signal: "Not Classified as Hazardous", sds: "https://pdf.lowes.com/productdocuments/564c8a36-51f0-44c6-9424-4d30ddd3c091/64759043.pdf" },
    { name: "Antiseptic Spray", signal: "Danger", sds: "https://www.medline.com/media/catalog/Docs/MSDS/MSD_SDSD15856.pdf" },
    { name: "Antiseptic Wipes", signal: "Not Classified as Hazardous", sds: "https://assets.pim.ecolab.com/media/Original/10001/AU-EN-919771-04-ASEPTI%20DISINFECTANT%201%20WIPES.PDF" },
    { name: "70% Isopropyl Alcohol Wipes", signal: "Warning", sds: "https://imgcdn.mckesson.com/CumulusWeb/Click_and_learn/SDS_KLNTST_WIPE_WET_PHARMA_C_ISOPROPYL_ALCOHOL_70_PERCENT_2025.pdf" },

    { name: "Masking Tape – 2 inch", signal: "Not Classified as Hazardous", sds: "https://univpack.com/products/tapes/masking-tape/Masking%20Tape%20Safety%20Data%20Sheet.pdf" },
    { name: "Polyester Film Tape", signal: "Not Classified as Hazardous", sds: "https://multimedia.3m.com/mws/mediawebserver?mwsId=SSSSSu9n_zu8l00xM82xnYtBlv70k17zHvu9lxtD7xt1evSSSSSS-" },
    { name: "Temflex Vinyl Electrical Tape", signal: "Not Classified as Hazardous", sds: "https://multimedia.3m.com/mws/media/1879716O/3m-temflex-vinyl-electrical-tape-165-data-sheet.pdf" },
    { name: "EternaBond RoofSeal Tape", signal: "Not Classified as Hazardous", sds: "https://acumatica.titansc.com/documents/sds/RA-RoofSeal%20SDS%202-2015.pdf" },
    { name: "Diamond Grade Conspicuity Markings", signal: "Not Classified as Hazardous", sds: "https://multimedia.3m.com/mws/media/282921O/3m-diamond-grade-conspicuity-markings-series-983.pdf" }

  ];

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
          <a href="${c.sds}" target="_blank">View Safety Data Sheet</a>
        `;
        list.appendChild(div);
      });
  }

  search.addEventListener("input", e => render(e.target.value));
  render();

});
``
