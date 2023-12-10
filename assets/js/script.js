//////////////// SOURCE CODE BEGINS HERE ////////////////

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

///////////////// SOURCE CODE ENDS HERE /////////////////

// Create function that will generate and display a password
function generatePassword() {
  
// Create strings for the four character types: lowercase, uppercase, numeric, special characters
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numeric = '0123456789';
var special = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

// Create empty array for password generator
var generator = [];

// Create empty string for password
var password = '';

// Prompt for password length
var lengthInput = prompt('Password length must be between 8 and 128 characters. Please enter your password length:');

// Validate password length
if (lengthInput >= 8 && lengthInput <= 128) {
  console.log('Password length meets requirement and is ' + lengthInput + ' characters.');
}
// Alert user when password validation fails and stop function execution
else {
  alert('Please try again. Password length must be between 8 and 128 characters.');
  return password = 'Please try again.';
}

// Confirm use of lowercase characters
var lowercaseInput = confirm('Click OK to use lowercase characters.');
// Add lowercase letters to generator array
if (lowercaseInput){
  for (let i = 0; i < lowercase.length; i++) {
    generator += lowercase[i];
  }
}

// Confirm use of uppercase characters
var uppercaseInput = confirm('Click OK to use uppercase characters.');
// Add uppercase letters to generator array
if (uppercaseInput){
  for (let i = 0; i < uppercase.length; i++) {
    generator += uppercase[i];
  }
}

// Confirm use of numbers
var numericInput = confirm('Click OK to use numbers.');
// Add numbers to generator array
if (numericInput){
  for (let i = 0; i < numeric.length; i++) {
    generator += numeric[i];
  }
}

// Confirm use of special characters
var specialInput = confirm('Click OK to use special characters (!, #, $, %, @, +, -, etc.).');
// Add special characters to generator array
if (specialInput){
  for (let i = 0; i < special.length; i++) {
    generator += special[i];
  }
}

// Validate at least one character type is confirmed/true
if (lowercaseInput || uppercaseInput || numericInput || specialInput) {
  console.log('At least one character type is confirmed:');
  console.log('Lowercase is ' + lowercaseInput + '.');
  console.log('Uppercase is ' + uppercaseInput + '.');
  console.log('Numbers is ' + numericInput + '.');
  console.log('Special characters is ' + specialInput + '.');
  console.log('These characters were used to generate a password: ' + generator);
}
// Alert user when character type validation fails and stop function execution
else {
  alert('Please try again. At least one character type must be confirmed.');
  return password = 'Please try again.';
}

/* Randomly select a confirmed character from the generator array x, or lengthInput, amount of times 
   and add each character to the password */
for (let i = 0; i < lengthInput; i++) {
  password += generator[Math.floor(Math.random() * generator.length)];
  console.log(password);
}

// Return the generated password
return password;
}