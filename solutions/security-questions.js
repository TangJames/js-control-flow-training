var prompt = require('../tools/prompt-sync')();

console.log("running security-questions.js...");

var securityQuestions = [
  {
    question: "What was your first pet's name?",
    expectedAnswer: "FlufferNutter"
  },
  {
    question: "What was the model year of your first car?",
    expectedAnswer: "1985"
  },
  {
    question: "What city were you born in?",
    expectedAnswer: "NYC"
  }
]

var userAnswer = "";
var hacker = false;

for (var i=0; i < securityQuestions.length; i++){
  userAnswer = prompt(securityQuestions[i].question);
  if (userAnswer !== securityQuestions[i].expectedAnswer){
    console.log("Incorrect security question response!");
    hacker = true;
    break;
  }
}

console.log(); //empty line
if (hacker){
  console.log("Access denied!");
} else {
  console.log("Thank you for confirming your identity.")
}
