// Define All variables & Capture document elements
var h2     =  document.querySelector("h2");
var red    =  document.querySelector("#red");
var blue   =  document.querySelector("#blue");
var green  =  document.querySelector("#green");
var yellow =  document.querySelector("#yellow");
var list   =  [yellow, green, red, blue];

var target = 0;
var level = 0;
var pattern = [];

// Choose a random element
function random_element(){
   return list[Math.floor(Math.random()*list.length)]
};

// Add event listener to wrong elements
function listen_to_wrong_elements(correct_element){
   list.forEach(e => e.addEventListener("click", gamer_over));
   correct_element.removeEventListener("click", gamer_over);
}

// Remove event listener from wrong elements
function stop_listening(){
   list.forEach(e => e.removeEventListener("click", gamer_over));
}