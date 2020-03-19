var viewHighEl = document.getElementById("viewHighscore");
var timerDisplayEl = document.getElementById("timerDisplay");
var scoreDisplayEl = document.getElementById("scoreDisplay");
var startScreenEl = document.getElementById("startScreen");
var startButtonEl = document.getElementById("startButton");
var questionsEl = document.getElementById("questions");
var answerChoicesEl = document.getElementById("answerChoices")
var feedbackEl = document.getElementById("feedback");
var nextQuestionEl = document.getElementById("nextQuestion");
var doneEl = document.getElementById("doneScreen");
var timesUpDiv = document.getElementById("timesUpDiv");
var userInitialsInput = document.getElementById("userInitials");
var highscoreScreenEl = document.getElementById("highscoreScreen");
var highscoreResultsDisplay = document.getElementById("highscoreResults");


var timeLeft = 30;
 
document.addEventListener("DOMContentLoaded", function(){

    startButtonEl.addEventListener("click", startQuiz);
    startButtonEl.addEventListener("click", startTimer);
    
    function startQuiz(event) {
        event.preventDefault();
        startScreenEl.style.display = "none";
        questionsEl.removeAttribute("style");

        getQuestion();
    }

    var scoreCount = 0;
    var currentIndex = 0;

    function getQuestion() {
        if (currentIndex < 5) {
            var currentQuestion = question[currentIndex];
            var title = document.getElementById("questionTitle");
            title.textContent = currentQuestion.questionTitle;
            // console.log(title);
            
            for (var i = 0; i < answerChoices.length; i++) {
                var choiceButton = document.createElement("input");
                choiceButton.setAttribute("type", "button");
                choiceButton.setAttribute("value", answerChoices[i]);
                answerChoicesEl.append(choiceButton);
                questionsEl.removeAttribute("style");
            }
            
        

            
        
        }

        
        
    }

    function startTimer() {
        var timeInterval = setInterval(function() {
            timerDisplayEl.textContent = timeLeft + "seconds";
            timeLeft--;

            if (timeLeft === 0) {
                timesUp();
            }
        }, 1000);
    }

    function timesUp() {
        if (currentIndex < 4) {
            alert("You ran out of time. Refresh page to restart.")
        }
        
    }
});