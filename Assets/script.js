// On click - prompt user to enter password criteria
//display list of criteria upppercase,lowercase,special characters and numbers.

//ask user to specifity length of password between 8 and 128 characters
//ask user to select which criteria to include or not include in password
//validate atlest one character type is selected

//generate password to fit selected criteria
//display password as alert





var charAll = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*+=-_`~?><}{";
var alphaNum = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
var alphaSym = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*+=-_`~?><}{";
var uppLowCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

var uppCaseNum = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
var lowCaseNum = "abcdefghijklmnopqrstuvwxyz0123456789";

var lowCaseSym = "abcdefghijklmnopqrstuvwxyz!@#$%^&*+=-_`~?><}{";


var pass = "";
var passLength = 0;



var passType = function () {

  var charUppType = confirm("Would you like your password to contain uppercase letters?");
  var charNumType = confirm("Would you like your password to contain numbers letters?");
  var charSpecType = confirm("Would you like your password to contain special characters?");

  for (i = 0; i <= passLength; i++) 
     if (charUppType == true && charNumType == true && charSpecType == true) {
      pass = pass + charAll.charAt(Math.floor(Math.random() * Math.floor(charAll.length - 1)));
      
     }

 else if(charUppType == true && charNumType == true && charSpecType == false){

    pass = pass + alphaNum.charAt(Math.floor(Math.random() * Math.floor(alphaNum.length - 1)));
   }
else if(charUppType == true && charNumType == false && charSpecType == false){
  pass = pass + uppLowCase.charAt(Math.floor(Math.random() * Math.floor(uppLowCase.length - 1)));
} 
else if(charUppType == false && charNumType == true && charSpecType == false){
  pass = pass + lowCaseNum.charAt(Math.floor(Math.random() * Math.floor(lowCaseNum.length - 1)));
} 
else if(charUppType == false && charNumType == false && charSpecType == true){
  pass = pass + lowCaseSym.charAt(Math.floor(Math.random() * Math.floor(lowCaseSym.length - 1)));
} 
else if(charUppType == true && charNumType == false && charSpecType == true){
  pass = pass + alphaSym.charAt(Math.floor(Math.random() * Math.floor(alphaSym.length - 1)));
}
else if(charUppType == true && charNumType == true && charSpecType == false){
  pass = pass + lowCaseSym.charAt(Math.floor(Math.random() * Math.floor(lowCaseSym.length - 1)));
}
else {
  alert("You need to select at least one chartacter type")
  return passType();

}

alert ("You new password is " + pass);


console.log(pass);
}




var generatePassword = function () {

  passLength = parseInt(prompt("Please enter your desired number characters"));

  if (passLength <= 7 || passLength >= 129) {
    alert("Your password must have min 8 characters and max 128, Please Re-enter!");
    return passTerms();
  }
  else {
    alert("Your password contains " + passLength + " characters!");
  }
  passType();
}



generatePassword()
//Get password criteria from user
// et references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");
passwordText.value = pass;

}

 //Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);


