//go to a website
function gotoWebsite(url) {
  window.open(url, "_blank");
}

//open and close Navbar
function toggleNav() {
  var nav = document.getElementById("myNav");
  const body = document.querySelector("body");
  const burger = document.getElementById("humburger");
  if (nav.style.left == "-100%") {
    nav.style.left = "0";
    body.addEventListener("click", (event) => {
      if (!nav.contains(event.target)) {
        body.style.overflow = "hidden";
      }
    });
  } else {
    nav.style.left = "-100%";
    body.style.overflow = "auto";
  }
  body.addEventListener("click", (event) => {
    if (!nav.contains(event.target) && !burger.contains(event.target)) {
      console.log("Close Nav");
      nav.style.left = "-100%";
      body.style.overflow = "auto";
    }
  });
}
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

