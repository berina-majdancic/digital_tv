  const links = document.querySelectorAll("nav a");
  const current = window.location.pathname.split("/").pop();

  links.forEach(link => {
    if (link.getAttribute("href") === current) {
      link.style.fontWeight = "bold";
        link.style.color = "#EA0599";
    }
  });

 const data = [
    { title: "History of Digital TV", content: "digital television history analog switch", url: "history.html" },
    { title: "Types of Digital TV", content: "satellite cable IPTV terrestrial", url: "types.html" },
    { title: "Analog to Digital Transition", content: "transition shutdown converter boxes", url: "transition.html" },
    { title: "Benefits of Digital TV", content: "better quality more channels", url: "benefits.html" },
    { title: "How It Works", content: "compression encoding decoding MPEG signal", url: "how-it-works.html" },
    { title: "Digital TV Standards", content: "DVB ATSC ISDB DTMB", url: "standards.html" },
    { title: "Future of Digital TV", content: "4K 8K ATSC 3.0 smart TV AI", url: "future.html" },
    { title: "Resources", content: "FCC BBC Wikipedia sources", url: "resources.html" }
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