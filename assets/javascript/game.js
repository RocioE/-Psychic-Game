var anser= 5;
var guess;


alert("What is the name of this Tottally 80's Band?");

var numberOfGuesses= 5;
var computerAnswer= 5;
var answer= prompt("What's your Guess?");



    if(answer===computerAnswer ){
        alert("You are Totally Correctly");
       // break;
    }

    else{
        guess= prompt("Sorry, You are Totally Wrong");
    }

///////////////////////////
    alert("You have 5 guesses. Guess 1-5");

    var anser= 5;
    var guess= prompt ("Whats Your Guess?");

     for (i=0;i<5;i++){
        if(answer == guess) {
            alert("You are Totally Correct!");
            break;
         } else{
        alert("Sorry, You are Totally Wrong");
        guess= prompt("Please Try Again")
        }

//!hangman using htm css js//! 
//! create an array of words
//!choose words randomly
//!

const word= ["Devo", "The Cure", "The Smiths", "Depeche Mode", "rem" ];
var randNum= Math.floor(Math.random() * words.length);
let choosenWord= word[randNum]
let rightWord= [];
let wrongWord= [];
let underScore= [];

///dom manipulation//
let docUnderScore= document.getElementsByTagName("underscore"); 
let docRightGuess= document.getElementsByTagName("rightGuess"); 
let docWrongGuess= document.getElementsByTagName("wrongGuess");


let generateUnderscore= () => {s
    for(let i= 0; i< choosenWord.length; i++) {
        underScore.push("_");
        underScore.join("");
    }
    return underScore;
}

//!capture users guess!//  var x, var y
document.addEventListener("keypress",function(event) {
    let keyWord= String.fromCharCode(event.keycode);  //!var x
    //!if player guessed right
    if(choosenWord.indexOf(keyword) > -1) { 
        //add to right words array//
        rightWord.push(keyWord);
        //replace underscore with right word//
        underScore[choosenWord.indexOf(keyword)] = keyWord;
        docUnderScore[0].innerHTML= underScore.join("");  ////think code beginning is not complete??????????
        docRightGuess[0].innerHTML= rightWord.join("");  ////think code beginning is not complete?


        if(underScore.join("") == choosenWord) {
            alert("You Totally Win");
        }
    }
    else{
        wrongeWord.push(keyWord);
        rightGuess[0].indexHTML;
    }

    [0].innerHTML= generateUnderscore().join("");
      

})