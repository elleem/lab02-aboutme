'use strict';

function Questions(answer) {
 answer=answer.toLowerCase();
 if (answer==="yes" || answer==="y"){
     return true;
 } else {
     return false;
 }
}

let answer1 = prompt("Do I want a farm?");
console.log(Questions(answer1));
let answer2 = prompt("Do I want to live in Seattle forever?");
console.log(Questions(answer2));
let answer3 = prompt ("Can I cook?");
console.log(Questions(answer3));
let answer4 = prompt ("Is my favorite color red?");
console.log(Questions(answer4));
let answer5 = prompt ("Do I currently own any animals?");
console.log(Questions(answer5));



// let userName = prompt("What is your name?");
// document.write ("Hello " + userName + ", welcome to my page!");

// let farm = prompt("Do I want a farm?")?.toLowerCase();
// if (farm === "yes" || farm === "y") {
//     alert("Correct!");
// } else if (farm === "no" || farm === "n") {
//     alert("FALSE!! I said it like 3 times...");
// } else {
//   alert("(Y)es or (N)o");
// }

// let favColor = prompt("Is my favorite color purple?")?.toLowerCase();
// if (favColor === "yes" || favColor ==="y") {
//     alert("Nope I fooled you!"); 
// } else if (favColor === "no" || favColor === "n") {
//     alert("My favorite color is Red!");
// }

// let cows = prompt("Do I want cows on my farm?")?.toLowerCase();
// if (cows === "yes" || cows === "n") {
//     alert("Of course!");
// }else if(cows === "no" || cows === "n") {
//     alert("Why wouldn't I want those cuties?");
// }

// let travel = prompt("Do I only want to stay in Seattle?")?.toLowerCase();
// if (travel === "yes"|| travel === "y") {
//     alert("That sounds miserable");
// } else if (travel === "no" || travel === "n") {
//     alert("I want to see the world through my own eyes!");
// }

// let cook = prompt("Can I cook");
// switch (cook ?.toLowercase() ) {
//     case "y":
//     case "yes":
//         alert("Yes, I love to cook");
//         break;
//     case "n":
//     case "no":
//         alert("Incorrect, I love to cook") ;
//         break;   
// }