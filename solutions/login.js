var prompt = require('../tools/prompt-sync')();

console.log("running login.js...");

var userLogin = {
  userName: "octocat_rules",
  password: "abracadabra"
};

var passwordInput;

var loggedIn = false;

while (!loggedIn){
  passwordInput = prompt("Enter password for user " + userLogin.userName + ".");
  if (passwordInput === userLogin.password){
    console.log("Passwords match!");
    loggedIn = true;
  } else {
    console.log("Passwords do not match. Try Again!");
  }
}
