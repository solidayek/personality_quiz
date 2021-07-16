//variables
var questionCount = 0;

var healthyScore = 0;
var unhealthyScore = 0;
/*Add your JavaScript here*/
var restart = document.getElementById("restart");

var result == document.getElementById("result");




//storing elements using DOM

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

//listen for click on answer buttons
q1a1.addEventListener("click", unhealthy);
q1a2.addEventListener("click", healthy);

q2a1.addEventListener("click", unhealthy);
q2a2.addEventListener("click", healthy);

q3a1.addEventListener("click", healthy);
q3a2.addEventListener("click", unhealthy);

restart.addEventListener("click", restart);

function healthy() {
  healthyScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + "healthyScore = " + healthyScore);

  if (questionCount == 3) {
  console.log ("The quiz is done!")
  updateResult();
}

}


function unhealthy() {
  unhealthyScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + "unhealthyScore = " + unhealthyScore);

  if (questionCount == 3) {
  console.log ("The quiz is done!")
  updateResult();
}
}
function restart(){
result.innerHTML = "You are a ...";
questionCount = 0;
healthyScore = 0;
unhealthyScore = 0;
console.log("questionCount = " + questionCount + " /t" + "unhealthyScore = " + unhealthyScore + "healthyScore = " + healthyScore );
}

//udate quiz result
function updateResult() {
 if (healthy >= 2) {
  result.innerHTML = "You are a healthy Person!";
  console.log("You are a healthy Person!");
} else if (unhealthy >= 2) {
  result.innerHTML = "You are an unhealthy Person!";
  console.log("You are an unhealthy Person!");
}
}

restart.addEventListener("click", )
function healthy (){
  healthyScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + " healthy = " + healthyScore);
}

function unhealthy (){
  unhealthyScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + " unhealthy = " + unhealthyScore);
}



}




