import Movie from "../Script/Practice.js";

const movie = new Movie("Avatar 1","James Cameron", ["Sam Worthington","Zoe Saldaña","Stephen Lang","Michelle Rodriguez"]);

console.log("Title of the Movie: ",movie.Title);
document.getElementById("PracticeDiv").innerText = movie.Title;

console.log("Director of the Movie: ", movie.Director);
document.getElementById("directorTxt").innerText = "Director of the Movie: " + movie.Director; 

console.log("Cast Member of the Movie:");
var table = document.getElementById("castMember");
table.replaceChildren();

var tddata = document.createElement('td');
movie.Cast.forEach(function(item){
    var trdata = document.createElement('tr');
    trdata.append(tddata.innerText = item);
    table.append(trdata);
    console.log(item);
});

