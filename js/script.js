const links = document.querySelectorAll("nav a");
const current = window.location.pathname.split("/").pop();

links.forEach(link => {
  if (link.getAttribute("href") === current) {
    link.style.fontWeight = "bold";
    link.style.color = "#EA0599";
  }
});

const data = [
  { title: "Historija digitalne televizije", content: "historija digitalne televizije prelazak sa analognog", url: "history.html" },
  { title: "Vrste digitalne televizije", content: "satelitska kablovska IPTV zemaljska", url: "types.html" },
  { title: "Tranzicija", content: "prelazak gašenje pretvarači", url: "transition.html" },
  { title: "Prednosti digitalne televizije", content: "bolji kvalitet više kanala", url: "benefits.html" },
  { title: "Kako funkcioniše", content: "kompresija kodiranje dekodiranje MPEG signal", url: "how-it-works.html" },
  { title: "Standardi digitalne televizije", content: "DVB ATSC ISDB DTMB", url: "standards.html" },
  { title: "Budućnost digitalne televizije", content: "4K 8K ATSC 3.0 pametni TV AI", url: "future.html" },
  { title: "Resursi", content: "FCC BBC Wikipedia izvori", url: "resources.html" }
];
const searchInput = document.getElementById("site-search");
const searchResults = document.getElementById("search-results");

searchInput.addEventListener("keyup", function () {
  const query = this.value.toLowerCase();
  searchResults.innerHTML = "";

  if (query.length < 2) return;

  const results = data.filter(item =>
    item.title.toLowerCase().includes(query) ||
    item.content.toLowerCase().includes(query)
  );

  if (results.length === 0) {
    searchResults.innerHTML = "<div>No results found</div>";
  } else {
    results.forEach(item => {
      const link = document.createElement("a");
      link.href = item.url;
      link.textContent = item.title;
      link.style.display = "block";
      searchResults.appendChild(link);
      searchResults.style.position = "absolute";
      searchResults.style.top = "100%";
      searchResults.style.left = "0";
      searchResults.style.right = "0";
      searchResults.style.backgroundColor = "#222";
      searchResults.style.borderRadius = "8px";
      searchResults.style.maxHeight = "200px";
      searchResults.style.overflowY = "auto";
      searchResults.style.zIndex = "100";
      searchResults.style.padding = "5px";
      searchResults.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.5)";
      searchResults.style.whiteSpace = "normal";
      searchResults.style.backgroundColor = "rgb(60, 59, 60)";
    });
  }
});