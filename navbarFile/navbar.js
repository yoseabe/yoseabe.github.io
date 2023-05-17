try{
  if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  //console.log("PHONE");
  var a = document.getElementById("phone");
  //a.style.backgroundColor = "red";
  a.style.width = "545px";
  a.style.backgroundColor = "white";
  
}
else{
  console.log("LAPTOP OR PC DETECTED!")
  var humburger = document.getElementById("humburger");
  //humburger.style.backgroundColor = "red";
}

}
catch{
  ;
}


function toggleNav() {
  var navCliked = false;
  var nav = document.getElementById("myNav");
  const body = document.querySelector("body");
  const burger = document.getElementById("humburger");
  const showallAIsbtn = document.getElementById("showAIs");
  const opacityBody = document.getElementById("theRestbody");
  if (nav.style.left == "-100%") {
    nav.style.left = "0";
    opacityBody.style.opacity = ".3";
    opacityBody.style.backgroundColor = "red";
    opacityBody.style.pointerEvents = "none";
    body.style.overflow = "hidden";
  } else {
    nav.style.left = "-100%";
    opacityBody.style.opacity = "1";
    opacityBody.style.pointerEvents = "auto";
    body.style.overflow = "auto";
  }
  body.addEventListener("click", () => {
    if (
      body.contains(event.target) &&
      !nav.contains(event.target) &&
      !burger.contains(event.target)
    ) {
      try {
        if (!showallAIsbtn.contains(event.target)) {
          nav.style.left = "-100%";
          opacityBody.style.opacity = "1";
          opacityBody.style.pointerEvents = "auto";
          body.style.overflow = "auto";
        }
      } catch (error) {
        nav.style.left = "-100%";
        opacityBody.style.opacity = "1";
        opacityBody.style.pointerEvents = "auto";
        body.style.overflow = "auto";
      }
    }
  });
}
function sortAlphabeticallyWithFirstItem(array, firstItem) {
  return array.sort(function (a, b) {
    if (a === firstItem) {
      return -1; // "a" should come before "b"
    } else if (b === firstItem) {
      return 1; // "b" should come before "a"
    } else {
      return a.localeCompare(b); // sort alphabetically
    }
  });
}
function displayAiTypes() {
  // Fetch the JSON data from the file
  fetch("../ais.json")
    .then((response) => response.json())
    .then((data) => {
      // Access the first category in the categories array
      const aiTypesList = document.getElementById("myNav");
      const unsortedCategories = [];
      for (let i = 0; i < data.categories.length; i++){
        unsortedCategories.push(data.categories[i].type);
        //console.log(hello)
      }
      const categories = sortAlphabeticallyWithFirstItem(unsortedCategories, "Home");
      //console.log(categories);
        for (let i = 0; i < categories.length; i++) {
          const li = document.createElement("a");
          li.classList.add("navbarText");
          li.textContent = categories[i];
          aiTypesList.appendChild(li);
          li.addEventListener("click", function () {
            if (categories[i] == "Art & Creativity") {
              window.location.href =
                "../artandcreativityPage/artandcreativity.html";
            } else if (categories[i] == "Chatbot") {
              window.location.href = "../chatbotPage/chatbot.html";
            } else if (categories[i] == "Photo Editing") {
              window.location.href = "../photoEditingPage/photoEditing.html";
            } else if (categories[i] == "Business") {
              window.location.href = "../businessPage/business.html";
            } else if (categories[i] == "School") {
              window.location.href = "../schoolPage/school.html";
            } else if (categories[i] == "Home") {
              window.location.href = "../index.html";
            }
          });
        }
      // Print the first category
    });
}
displayAiTypes();
