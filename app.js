
const searchInput = document.getElementById("siteSearch");
const searchButton = document.getElementById("searchButton");
const searchMessage = document.getElementById("searchMessage");

function searchWebsite() {
  const query = searchInput.value.trim().toLowerCase();

  const cards = document.querySelectorAll(
    ".category-card, .tool-card"
  );

  let found = 0;

  cards.forEach(card => {
    const matches = card.textContent.toLowerCase().includes(query);

    card.style.display = (!query || matches) ? "" : "none";

    if (!query || matches) {
      found++;
    }
  });

  if (!query) {
    searchMessage.textContent = "";
    return;
  }

  searchMessage.textContent = found > 0
    ? `${found} matching results found.`
    : "No results found. Try another keyword.";

  const target = document.getElementById("marketplace");
  target.scrollIntoView({ behavior: "smooth" });
}

searchButton.addEventListener("click", searchWebsite);

searchInput.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    searchWebsite();
  }
});
