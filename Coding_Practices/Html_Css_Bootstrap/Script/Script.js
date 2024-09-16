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
movie.Cast.forEach(function(item,index){
    var trdata = document.createElement('tr');
    trdata.append(`${++index}. ${tddata.innerText = item}`);
    table.append(trdata);
    console.log(item);
});

const myArray = [1, 2, 3, 4]
myArray.forEach( (item, index) => {
    myArray[index] = ++item;
    console.info(`index: ${index}`);
    console.info(item);
});

function myfunc(x,y) {
    return(x+y);
   }
   console.log("answer: ",myfunc(2,myfunc(5,-2)));

