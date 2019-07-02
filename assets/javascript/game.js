var wordGameArray= ["devo", "omd", "eurythmics", "madness", "squeeze"];
var wordTry=5; //thisis the max of tries////
var winCount = 5;
var loseCount = 0;
var winUser = []; //initial an array to store user's correct letter input
var loseUser = []; //initial an array to store user's wrong letter input
var match = false;
var letter= [""]


// alert("What is the name of this Tottally 80's Band?");


// var answer= prompt("What's your Guess?");


var wordGame = wordGameArray[Math.floor(Math.random() * wordGameArray.length)]; //Choosing random array or string 
var wonGame = 'You Totally Won!'; 
var lostGame = 'You Totally Lost!';
var lettersGuessed = '';
// for (i = 0; i < wordGameArray.length; i++) {
//     winUserTemp.push('-')
// }
// document.getElementById("blanks").innerHTML = winUserTemp.join(' ');
    var x = document.createElement("IMG");
    x.setAttribute("src", "assets/images/"+wordGame+".jpg");
    x.setAttribute("alt", wordGame);
    // document.getElementById("images").appendChild(x);  
    console.log(wordGame);
document.onkeyup = function (event) {
    console.log(event)
    let keyPressed = event.key;
    lettersGuessed += keyPressed;
    console.log(keyPressed);
    if (wordGame.indexOf(keyPressed) > -1) {
        console.log('found the letter on this string.. at this index:',wordGame.indexOf(keyPressed) );
    }
}


//????? do you set it as computer anser or as below ///////
//     if(answer===computerAnswer ){
//         alert("You are Totally Correctly");
//        // break;
//     } else {
//         guess= prompt("Sorry, You are Totally Wrong");
//     }

// ///////////////////////////
//     alert("You have 5 guesses. Guess 1-5");

//     var answer= 5;
//     var guess= prompt ("Whats Your Guess?");

//      for (i=0;i<5;i++){
//         if(answer == guess) {
//             alert("You are Totally Correct!");
//             break;
//          } else{
//         alert("Sorry, You are Totally Wrong");
//         guess= prompt("Please Try Again")
//         }
//         console.log(guess)
//     }

//!hangman using htm css js//! 
//! create an array of words
//!choose words randomly
//!
// var randNum= Math.floor(Math.random() * words.length);
// let choosenWord= word[randNum]

// let rightWord= [];
// let wrongWord= [];
// let underScore= [];

// ///dom manipulation//
// let docUnderScore= document.getElementsByTagName("underscore"); 
// let docRightGuess= document.getElementsByTagName("rightGuess"); 
// let docWrongGuess= document.getElementsByTagName("wrongGuess");


// let generateUnderscore= () => {
//     for(let i= 0; i< choosenWord.length; i++) {
//         underScore.push("_");
//         underScore.join("");
//     }
//     return underScore;
// }


//!capture users guess!//  var x, var y
// document.addEventListener("keypress",function(event) {
    
//     let keyWord= String.fromCharCode(event.keycode);  //!var x
//     //!if player guessed right
//     if(choosenWord.indexOf(keyword) > -1) { 
//         //add to right words array//
//         rightWord.push(keyWord);
//         //replace underscore with right word//
//         underScore[choosenWord.indexOf(keyword)] = keyWord;
//         docUnderScore[0].innerHTML= underScore.join("");  ////think code beginning is not complete??????????
//         docRightGuess[0].innerHTML= rightWord.join("");  ////think code beginning is not complete?


//         if(underScore.join("") == choosenWord) {
//             alert("You Totally Win");
//         }
//     } else {
//         wrongeWord.push(keyWord);
//         rightGuess[0].indexHTML;
//     }

//     // [0].innerHTML = generateUnderscore().join("");
      

// });