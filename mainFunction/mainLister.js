
function mainLister(type) {
  //document.addEventListener("DOMContentLoaded", function () {
    fetch("../ais.json")
    .then((response) => response.json())
    .then((data) => {
    //console.log(data.categories[2].items[0].link);
    for (i = 0; i < data.categories[type].items.length; i++) {
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        td.style.paddingBottom = "30px";

        const table = document.createElement("table");
        table.setAttribute("role", "presentation");
        table.setAttribute("border", "0");
        table.setAttribute("cellpadding", "0");
        table.setAttribute("cellspacing", "0");
        table.setAttribute("width", "100%");

        const leftTd = document.createElement("td");
        leftTd.setAttribute("valign", "middle");
        leftTd.setAttribute("width", "50%");

        const img = document.createElement("img");
        //image------------------------------------
        img.setAttribute("src", data.categories[type].items[i].image);
        img.setAttribute("alt", "");
        img.style.width = "100%";
        img.style.maxWidth = "600px";
        img.style.height = "auto";
        img.style.margin = "auto";
        img.style.display = "block";
        img.style.border = "3px solid black";
        img.style.cursor = "pointer";
        img.style.marginBottom = "20px";
        var link = data.categories[type].items[i].link;
        img.onclick = (function (link) {
          return function () {
            gotoWebsite(link);
          };
        })(link);
        leftTd.appendChild(img);

        const rightTd = document.createElement("td");
        rightTd.setAttribute("valign", "middle");
        rightTd.setAttribute("width", "50%");

        const div = document.createElement("div");
        div.classList.add("testing");
        const p1 = document.createElement("p");
        p1.classList.add("meta");
        
        //Companyname-------------------------------name---------------------------
        
        const h2 = document.createElement("h2");
        //name---------------------------
        h2.textContent = "By " + data.categories[type].items[i].Company;
        h2.classList.add("companyName");


        //AIname---------------------------
      const span1 = document.createElement("span");
      span1.textContent = data.categories[type].items[i].name;
      span1.classList.add("aiName");
      p1.appendChild(span1);
      p1.appendChild(h2);

        
        //description--------------------
        const p2 = document.createElement("p");
        p2.textContent = data.categories[type].items[i].description;
        p2.classList.add("aiDescription")
        p2.style.marginTop = "-15px";
        //p1.appendChild(p2);
        //END description
        const p3 = document.createElement("p");
        const a = document.createElement("a");
        a.setAttribute("href", "#");
        a.classList.add("btn", "btn-primary");
        //button--------------
        a.textContent = "Visit " + data.categories[type].items[i].name;
        //link----------------
        //console.log(link);
        a.onclick = (function (link) {
          return function () {
            gotoWebsite(link);
          };
        })(link);

        p3.appendChild(a);
        div.appendChild(p1);
        //div.appendChild(h2);
        div.appendChild(p2);
        div.appendChild(p3);

        rightTd.appendChild(div);

        table.appendChild(leftTd);
        table.appendChild(rightTd);

        td.appendChild(table);
        tr.appendChild(td);
        const myTable = document.getElementById("table-row");
        myTable.appendChild(tr);
    }
    });
  //});
}

