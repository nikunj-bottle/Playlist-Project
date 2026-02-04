console.log("js console");
var data;
let grid = document.querySelector(".grid-container");
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) {
        data = JSON.parse(xhttp.responseText);
    console.log(data);
    data.forEach(function(game){
    let card = document.createElement("div");
    card.classList.add("card");

    let textData =
    "<div class='game-title'>" + game.Game + "</div>" + "<span>" +
    "Publisher:" + game.Publisher + "<br>" +
    "Release Date:" + game.Platform + "<br>" +
    "Needs Research:" +
    "</span>";
    
    card.innerHTML = textData;

    if(game.imgSrc){
        card.style.backgroundImage = "url(" + game.imgSrc +")";
    }

    grid.appendChild(card);

});
}
}
xhttp.open("GET", "games.json", true);
xhttp.send();

var form = document.querySelector("form");
var titleInput = document.querySelector("#title-input");
var pubInput = document.querySelector("#publisher-input");
var dateInput = document.querySelector("#release-date-input");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  var newObj = {
    title: titleInput.value,
    publisher: pubInput.value,
    releaseDate: dateInput.value
  };

  data.push(newObj);
  localStorage.setItem("datalist", JSON.stringify(data));
  console.log("Saved new item to localStorage");

  
  if (document.querySelector(".grid-container")) {
    makeCards();
  }

  form.reset();
});
