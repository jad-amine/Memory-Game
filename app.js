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


document.addEventListener("click", start_game);

// Start Game
function start_game(){
   document.removeEventListener("click", start_game);
   add_an_element();
}

// Levels
function add_an_element(){
   console.log(`pushed ${level} element`)
   pattern.push(random_element());
   highlight(pattern[level]);
   level += 1;
   setTimeout(() => h2.innerHTML = `Level ${level}`, 300); 
   wait_for_user_input();
}

// Listen for user input 
function wait_for_user_input(){
   if(pattern[target]){
      console.log('waiting for user input')
      listen_to_wrong_elements(pattern[target]);
      pattern[target].addEventListener("click", correct)
   } else {
      console.log("no more elements => add element")
      target = 0;
      add_an_element();
   }
}

// Correct answer 
function correct(){
   console.log("user clicked the right color")
   blink(pattern[target]);
   pattern[target].removeEventListener("click", correct)
   stop_listening();
   target+=1;
   wait_for_user_input();
}