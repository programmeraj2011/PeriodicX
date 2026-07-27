/* ======================================================
   PeriodicX v1
   Quiz Engine
====================================================== */

const quizContainer = document.getElementById("quizContainer");

let quizQuestions = [

{
question:"What is the symbol of Hydrogen?",
options:["H","He","Hy","Hg"],
answer:0
},

{
question:"Which element has Atomic Number 8?",
options:["Nitrogen","Carbon","Oxygen","Fluorine"],
answer:2
},

{
question:"Which is a Noble Gas?",
options:["Oxygen","Neon","Carbon","Sodium"],
answer:1
},

{
question:"Which element is Liquid at Room Temperature?",
options:["Mercury","Iron","Gold","Calcium"],
answer:0
},

{
question:"Which element is used in Pencil?",
options:["Graphite","Iron","Silver","Copper"],
answer:0
},

{
question:"What is the Symbol of Gold?",
options:["Go","Ag","Au","Gd"],
answer:2
},

{
question:"Which Element is the Lightest?",
options:["Hydrogen","Helium","Lithium","Carbon"],
answer:0
},

{
question:"Which Metal reacts violently with Water?",
options:["Copper","Sodium","Gold","Silver"],
answer:1
}

];

let quizIndex=0;
let score=0;

function loadQuiz(){

if(!quizContainer) return;

const q=quizQuestions[quizIndex];

quizContainer.innerHTML=`

<div class="quiz-card">

<h2>Question ${quizIndex+1}/${quizQuestions.length}</h2>

<h3>${q.question}</h3>

<div class="options">

${q.options.map((option,index)=>`

<button onclick="answerQuestion(${index})">

${option}

</button>

`).join("")}

</div>

<div class="quiz-footer">

<p>Score : ${score}</p>

</div>

</div>

`;

}

function answerQuestion(index){

const q=quizQuestions[quizIndex];

if(index===q.answer){

score++;

showToast("✅ Correct!");

}else{

showToast("❌ Wrong!");

}

quizIndex++;

if(quizIndex>=quizQuestions.length){

finishQuiz();

return;

}

loadQuiz();

}

function finishQuiz(){

const percent=Math.round((score/quizQuestions.length)*100);

quizContainer.innerHTML=`

<div class="quiz-card">

<h1>🎉 Quiz Finished</h1>

<h2>${score}/${quizQuestions.length}</h2>

<h3>${percent}%</h3>

<button onclick="restartQuiz()">

Restart Quiz

</button>

</div>

`;

localStorage.setItem("quizScore",percent);

}

function restartQuiz(){

quizIndex=0;

score=0;

loadQuiz();

}

window.addEventListener("load",loadQuiz);