//go to a website
function gotoWebsite(url) {
  window.open(url, "_blank");
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



