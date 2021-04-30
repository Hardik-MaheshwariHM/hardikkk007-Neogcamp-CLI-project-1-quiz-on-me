var readlinesync = require("readline-sync");
var username = readlinesync.question("Hi! what's your name?");
console.log(" Hi," + username + " Let's start the game ");
var score= 0 ;

function play (question,answer){
  var useranswer = readlinesync.question(question);
  if (useranswer===answer){
    console.log("You are right!")
    score = score + 1 ;
  }
else {
  console.log("You are wrong")
}
 console.log(" Your score is "+ score);
}
 

 var questions =[{
   question:"where do i live?",
   answer:"saharanpur"
 },
 {
   question:"Do i like ice cream?",
   answer:"yes"

 },
 {
   question:"Have i been to Delhi?",
   answer:"yes"

 },
 {
   question:"who is my fav super hero?",
   answer:"iron man"

 }
 ]
 for (var i=0; i<questions.length ; i++){
   var currentquestion = questions[i];
   play(currentquestion.question,currentquestion.answer)
 }
 console.log("THANK YOU FOR PLAYING")
