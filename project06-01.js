"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-01

      Project to validate a form used for setting up a new account
      Author: Rebecca Mehling
      Date:  04/23/2023 

      Filename: project06-01.js
*/
let submitButton = document.getElementById("submitButton"); // declare submitButton variable 
let pwd = document.getElementById("pwd"); // declare pwd variable 
let pwd2 = document.getElementById("pwd2"); //declare pwd2 variable 

//validate the passord once you click save
submitButton.addEventListener("click", function () {
      //test if password matches pattern
      if (pwd.validity.patternMismatch) {
            pwd.setCustomValidity("Your password must be at least 8 characters with one letter and one number"); //if it does not match patter display this message

            //test if password 1 matches password 2 
      } else if (pwd.value != pwd2.value) {
                  pwd.setCustomValidity("Your password must match"); //if it does not match each other, display this message 
            } else {
            pwd.setCustomValidity(""); //all other, display this message
      } 
});