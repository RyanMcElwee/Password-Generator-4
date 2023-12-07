// Assignment code here

// starting variable
var generateBtn = document.querySelector("#generate");


// prompt to spesify password length
function generatePassword() {
  var passLength = prompt("How long would you like your password to be? (rang: 8-128)");
  // if function to select valid password length
  if (passLength < 8 || passLength > 128 ) {
    alert("Please enter a character length that is between 8 and 128!");
    return generatePassword();
  }
  if (passLength >=8 && passLength <= 128) {
  // prompts to spesify password requirements
  var lowerChar = confirm("Would you like to include lowercase letters?");
  var upperChar = confirm("Would you like to include uppercase letters?");
  var num = confirm("Would you like to include numbers?");
  var speChar = confirm("Would you like to include special characters?");
  }
  // if function that ensures that the user selects one of every criteria
  if (speChar===false && num===false && lowerChar===false && upperChar===false) {
    alert("Please confirm a set of criteria!");
    return generatePassword();
  }
  // if functions that give all possible values of the variables
  if (lowerChar) {
    var lowerChar = ["abcdefghijklmnopqrstuvwxyz"]
  }
  if (lowerChar===false) {
    var lowerChar = [""]
  }
  if (upperChar) {
    var upperChar = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
  }
  if (upperChar===false) {
    var upperChar = [""]
  }
  if (num) {
    var num = ["0123456789"]
  }
  if (num===false) {
    var num = [""]
  }
  if (speChar) {
    var speChar = ["!@#$%^&*()"];
  }
  if (speChar===false) {
    var speChar = [""];
  }
  // this variable is created by the user and the decided criteria
  var randomChar = lowerChar + upperChar + num + speChar
  // for loop that generates the password that is the length chosen by the user
  var password = "";
  for (var i =0; i < passLength; i++) {
    var trueRandom = randomChar[Math.floor(Math.random() * randomChar.length)];
    password += trueRandom;
  }
  // this finishes off the generatePassword function
  return password
}


// connects the new password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// causes everything to kick off with event listener to create a button
generateBtn.addEventListener("click", writePassword);


