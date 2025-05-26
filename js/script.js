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
      link.style.padding = "5px";
      link.style.background = "rgba(46, 46, 46, 0.74)";
      link.style.color = "#fff";
      link.style.borderRadius = "10px";
      searchResults.appendChild(link);
    });
  }
});