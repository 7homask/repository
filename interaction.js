// interactive recipe

// get HTML elements

var cat_img = document.getElementById("cat_img");


// add an event listener (ie. do something on click)

cat_img.addEventListener("click", meow);

function meow(){
	alert("Meow");
} 

var button = document.getElementById("button");

button.addEventListener("click", purr);
function purr(){
	alert("Purr")
}


// manipulate HTML element