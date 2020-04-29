# CODE QUIZ

For this assignment, I was able to create an online quiz that includes 5 questions with a 50 second time limit. If a question is answered correctly, the user gains one point. If a question is answered incorrectly, the user loses one point (with a negative score as a possibility) and 10 seconds are deducted from the timer. The highest score possible is 5 and the lowest score possible is -5.

First, I created a basic html file and completed most of the styling with css properties. I then proceeded to create a javascript file to make the quiz functioning.

Once the user clicks on the Start button, the time begins and the first question appears with four choices. The Start function is initiated which leads to the following questions to be rendered. I organized the quiz questions and answers as objects in an array so that I was able to refer back to them with the minimal use of functions.

On the second-to-last page, the user is able to save their score along with the initials to be displayed on the Highscores page and stored in local storage. The user also has the option to clear all scores. By clearing all scores, the local Storage is cleared thus leaving no past scores to be displayed.