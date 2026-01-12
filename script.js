console.log("js console");
let data;
let grid = document.querySelector(".grid-container");
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) 
        data = JSON.parse(xhttp.responseText);
    console.log(data);
    data.forEach(function(game)
}
