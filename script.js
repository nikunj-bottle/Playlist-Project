console.log("js console");
var data;
let grid = document.querySelector(".grid-container");
// LOAD DATA (localStorage first, otherwise XHR)
if (localStorage.getItem("datalist")) {
  data = JSON.parse(localStorage.getItem("datalist"));
  console.log("Loaded from localStorage");
  if (grid) {
    makeCards();
  }
} else {

var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      data = JSON.parse(this.responseText);
      console.log("Loaded from gameData.json");

      localStorage.setItem("datalist", JSON.stringify(data));
      console.log("Saved starter data to localStorage");

      if (grid) {
        makeCards();
      }
    }
  };

  xhttp.open("GET", "games.json", true);
  xhttp.send();
}

// RENDER CARDS
function makeCards() {
  grid.innerHTML = "";

  data.forEach(function (game) {
    let card = document.createElement("div");
    card.classList.add("card");

    let textData =
    "<div class='game-title'>" + game.Game + "</div>" + "<span>" +
    "Publisher:" + game.Publisher + "<br>" +
    "Release Date:" + game.Year + "<br>" +
  
    "</span>";
    card.innerHTML = textData;
    grid.appendChild(card);
  });

  console.log("cards refreshed");
}









var form = document.querySelector("form");
var titleInput = document.querySelector("#title");
var dateInput = document.querySelector("#release-date");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  var newObj = {
    Game: titleInput.value,
  
    Year: dateInput.value
  };

  data.push(newObj);
  localStorage.setItem("datalist", JSON.stringify(data));
  console.log("Saved new item to localStorage");

  
  if (document.querySelector(".grid-container")) {
    makeCards();
  }

  form.reset();
});

// if(game.imgSrc){
//         card.style.backgroundImage = "url(" + game.imgSrc +")";
//     }

    // let textData =
    // "<div class='game-title'>" + game.Game + "</div>" + "<span>" +
    // "Publisher:" + game.Publisher + "<br>" +
    // "Release Date:" + game.Platform + "<br>" +
    // "Needs Research:" +
    // "</span>";