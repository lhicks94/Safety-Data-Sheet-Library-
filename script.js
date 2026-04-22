const listEl = document.getElementById("chemicalList");
const searchInput = document.getElementById("searchInput");

const sortedChemicals = chemicals.sort((a, b) =>
  a.name.localeCompare(b.name)
);

function renderList(filter = "") {
  listEl.innerHTML = "";

  sortedChemicals
    .filter(c =>
      c.name.toLowerCase().includes(filter.toLowerCase())
    )
    .forEach(c => {
      const div = document.createElement("div");
      div.className = "chemical";

      div.innerHTML = `
        <h2>${c.name}</h2>
        <p class="signal">${c.signalWord}</p>
        <div class="pictograms">
          ${c.pictograms
            .map(p => `pictograms/${p}.png`)
            .join("")}
        </div>
        ${c.sdsUrl}
          View SDS
        </a>
      `;

      listEl.appendChild(div);
    });
}

searchInput.addEventListener("input", e => {
  renderList(e.target.value);
});

renderList();
