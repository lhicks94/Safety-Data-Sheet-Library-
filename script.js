// ===============================
// SDS LIBRARY – FULL DATASET
// ===============================

const chemicals = [
  {
    name: "3M Scotch-Brite Surface Conditioning Disc",
    signal: "Not Classified as Hazardous",
    pictograms: [],
    sds: "https://multimedia.3m.com/mws/mediawebserver?mwsId=SSSSSuUn_zu8l00xM82xn8_vMv70k17zHvu9lxtD7SSSSSS--"
  },
  {
    name: "3M Scotch-Brite General Purpose Pads",
    signal: "Not Classified as Hazardous",
    pictograms: [],
    sds: "https://cdmsweb.3m.com/ingredientcommunication/file/Media/8luAsFKZ2po"
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
    name: "HydroForce Glass Cleaner (Aerosol)",
    signal: "Danger",
    pictograms: ["flame", "corrosion", "health-hazard"],
    sds: "https://cdmsweb.3m.com/ingredientcommunication/file/Media/35J1_tODZTw"
  },
  {
    name: "WD-40 Penetrant and Lubricant",
    signal: "Not Classified as Hazardous",
    pictograms: [],
    sds: "https://itdoesthetrick.com/wp-content/uploads/2023/11/SDS-STAAR-Lubricants-Trick-Shot-PL-Liquid-Rev-2.23.2.pdf"
  },
  {
    name: "Simple Green Industrial Cleaner (Gallon)",
    signal: "Not Classified as Hazardous",
    pictograms: [],
    sds: "https://cdn.simplegreen.com/downloads/SDS_EN-US_SimpleGreenIndustrialCleanerDegreaser.pdf"
  },
  {
    name: "Lenox Lube Tube Cutting Lubricant",
    signal: "Warning",
    pictograms: ["exclamation"],
    sds: "https://assetcloud.roccommerce.net/files/_kljack/7/7/8/lenox-lube-tube-cutting-lubricant-stick-sds.pdf"
  },
  {
    name: "TremPro 644 RTV Silicone (Black)",
    signal: "Danger",
    pictograms: ["exclamation", "health-hazard"],
    sds: "https://www.buildsite.com/pdf/tremco/TremPro-644-RTV-SDS-2551293.pdf"
  },
  {
    name: "ASI 502 100% Silicone Sealant",
    signal: "Not Classified as Hazardous",
    pictograms: [],
    sds: "https://products.meridianadhesives.com/storage/downloads/mj9u5d1bi0fkv1tdrje93btish9n2pzm/asi-502-clear-2022.pdf"
  },
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
  {
    name: "Ultratane Butane Fuel",
    signal: "Danger",
    pictograms: ["flame", "gas-cylinder"],
    sds: "https://www.masterappliance.com/content/sites/default/files/simple_products/downloads/2024-SDS-Ultratane-Butane-English.pdf"
  },
  {
    name: "HoldFast 70 Spray Adhesive",
    signal: "Danger",
    pictograms: ["flame", "exclamation", "health-hazard"],
    sds: "https://multimedia.3m.com/mws/mediawebserver?mwsId=SSSSSuUn_zu8l00xMx2UN82Glv70k17zHvu9lxtD7SSSSSS--"
  },
  {
    name: "Marvel Mystery Oil – Air Tool Oil",
    signal: "Danger",
    pictograms: ["flame", "exclamation", "health-hazard"],
