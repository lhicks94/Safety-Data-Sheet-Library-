document.addEventListener("DOMContentLoaded", () => {

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
    }
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

        // ✅ THIS IS THE CRITICAL FIX
        const pictosHTML = c.pictograms
          .map(p => `<img src="pictograms/${p}.png" alt="${p} pictogram" height="40">`)
          .join(" ");

        div.innerHTML = `
          <h2>${c.name}</h2>
          <p class="signal">${c.signal}</p>
          <div class="pics">${pictosHTML}</div>
          <a href="${c.sds}" target="_blank">View Safety Data Sheet</a>
        `;

        list.appendChild(div);
      });
  }

  search.addEventListener("input", e => render(e.target.value));
  render();
});
