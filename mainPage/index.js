//go to a website
function gotoWebsite(url) {
  window.open(url, "_blank");
}
//
function gotoPage(){
  window.location.href = "../privacyPolicy/privacyPolicy.html";
}
//open and close Navbar

function displayFrontPage() {
  fetch("../ais.json")
    .then((response) => response.json())
    .then((data) => {
      const trendingAis = document.getElementById("frontpageTrending");
      const trendingAis2 = document.getElementById("frontpageTrending2");
      const ais = [trendingAis, trendingAis2];
      b = 0;
      for (i = 1; i < 3; i++) {
        const image = document.createElement("img");
        image.classList.add("aiImages");
        image.src = data.categories[i].items[0].image;
        ais[b].appendChild(image);
        b++;
      }

      // Add a CSS class
    });
}
// displayFrontPage()

var xhr = new XMLHttpRequest();
xhr.open("GET", "../navbarFile/navbar.html");
xhr.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    // insert the navbar HTML into the navbar div
    document.getElementById("navbar").innerHTML = this.responseText;

    // load navbar.js using another AJAX request
    var script = document.createElement("script");
    script.src = "../navbarFile/navbar.js";
    document.body.appendChild(script);

    // load navbar.css using a link element
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "../navbarFile/navbar.css";
    document.head.appendChild(link);
  }
};
xhr.send();
