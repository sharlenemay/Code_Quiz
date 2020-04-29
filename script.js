// set variables for HTML elements
var questions = [
    {
        question: "Commonly used data types do NOT include:",
        choice1: "1. strings",
        choice2: "2. booleans",
        choice3: "3. alerts",
        choice4: "4. numbers",
        correct: "3. alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed within _____.",
        choice1: "1. quotes",
        choice2: "2. curly brackets",
        choice3: "3. parentheses",
        choice4: "4. square brackets",
        correct: "3. parentheses"
    },
    {
        question: "Arrays in Javascript can be used to store _____.",
        choice1: "1. numbers and strings",
        choice2: "2. other arrays",
        choice3: "3. booleans",
        choice4: "4. all of the above",
        correct: "4. all of the above"
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        choice1: "1. commas",
        choice2: "2. curly brackets",
        choice3: "3. quotes",
        choice4: "4. parentheses",
        correct: "3. quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choice1: "1. JavaScript",
        choice2: "2. terminal/bash",
        choice3: "3. for loops",
        choice4: "4. console.log",
        correct: "4. console.log"
    },
]

var runningQIndex = 0;
var lastQIndex = questions.length-1;

var start = document.getElementById("start");
start.textContent="Start!"

var startText = document.getElementById("text");
var title = document.getElementById("title");

startText.textContent="Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
title.textContent="Coding Quiz Challenge";

var question = document.getElementById("question");
var a = document.getElementById("choice1");
var b = document.getElementById("choice2");
var c = document.getElementById("choice3");
var d = document.getElementById("choice4");
var timer = document.getElementById("timer");

// function to begin quiz
function startQuiz (){
    title.style.display="none";
    startText.style.display="none";
    start.style.display="none";
    setTime();
    renderQuestion();
}

// TIMER
var secondsLeft = 50;
function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = "Timer: " + secondsLeft;
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            scores();
        };
  }, 1000);
}

// function to display questions and choices
function renderQuestion (){
    var q = questions[runningQIndex];
    var choices = document.getElementById("choices");
    choices.style.display = "block";
    question.style.display = "block";
    question.innerHTML = "<p>" + q.question + "</p>";
    a.textContent = q.choice1;
    b.textContent = q.choice2;
    c.textContent = q.choice3;
    d.textContent = q.choice4;

    a.addEventListener("click", nextQuestion);
    b.addEventListener("click", nextQuestion);
    c.addEventListener("click", nextQuestion);
    d.addEventListener("click", nextQuestion);

};

// function to progress the quiz
var score = 0;
function nextQuestion() {
    if (questions[runningQIndex].correct == event.target.textContent){
        score++;
    }
    else {
        score--;
        secondsLeft -= 10;
    }

    console.log(score);
    if (runningQIndex<lastQIndex){
        runningQIndex++;
        renderQuestion();
    }
    // else {redirect to scores page}
    else {
        scores();
    }
}


// submit scores page
var submit  = document.getElementById("scores-save");
function scores (){
    title.style.display="block";
    startText.style.display="block";
    title.textContent="All done!";
    startText.textContent="Your final score is "+ score + ".";
    question.style.display="none";
    choices.style.display="none";

    submit.style.display="block";
    submit.addEventListener("submit", function(event) {
        event.preventDefault();
        var nameInput = document.querySelector("#name-input");
        var name = nameInput.value.trim();

        if(name === "") {
            return;
        }
        highscores.push(name);
        nameInput = "";

        final(name);

    })
};

var viewScores = document.getElementById("highscores");
viewScores.addEventListener("click",final);
var highscores = [];

// if (!localStorage.getItem("scores")){
//     localStorage.setItem("scores",{});
// };

// highscores page
function final (name){

    title.textContent="Highscores: ";
    title.setAttribute("float","left");
    startText.style.display="none";
    submit.style.display = "none";
    start.style.display = "none";

    var goBack = document.getElementById("go-back");
    var clear = document.getElementById("clear");
    goBack.style.display = "inline-block";
    clear.style.display = "inline-block";
    goBack.addEventListener("click",function returnToStart(){
        location.replace("https://sharlenemay.github.io/code_quiz/");
    });
    goBack.textContent = "Go Back";
    clear.textContent = "Clear Scores";
    clear.addEventListener("click", function clearScores(){
        localStorage.clear();
        final.style.display = "none";
    })

    var final = document.getElementById("final");
    final.style.display="block";
    var userScore = document.getElementById("final-score");


    userScore.textContent = name + " : " + score;

};


// sTART
start.addEventListener("click", startQuiz);