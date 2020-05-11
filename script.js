// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
//quiz container
const quizContainer = document.querySelector('.quiz-container');
// variables for the current question number and total questions in the quiz
const currentQuestion = document.querySelector('.current-question');
const totalQuestions = document.querySelector('.total-questions');
// Questions container
const questionText = document.querySelector('.questions');
// Options container
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const option4 = document.querySelector('.option4');
const options = document.querySelector('.options').children;
// Variables for the points obtained in the end
const finalScore = document.querySelector('.final-score');
const obtainablePoints = document.querySelector('.possible-score');
// End of the quiz
const quizEnd = document.querySelector('.quizover');
//score counter
const currentScore = document.querySelector('.current-score');
//Error Message
const errorMessage = document.querySelector('.error-message');

let questionCount = 0;
let questionNumber;
let index = 0;
let questionsArray = [];
let myArray = [];
let score = 0;
let count = 0;

// array containing questions, options and answers
const questions = [
    {
        question: 'Which club has the highest number of UEFA Champions League Trophies?',
        options: ['Barcelona', 'Liverpool', 'Juventus', 'Real Madrid'],
        answer: [3]
    }, 
    {
        question: 'Which football player has the highest number of trophies?',
        options: ['Lionel Messi', 'Dani Alves', 'Christiano Ronaldo', 'Neymar Jr'],
        answer: [1]
    },
    {
        question: 'Which country won the 2006 world cup?',
        options: ['Spain', 'Italy', 'France', 'Nigeria'],
        answer: [1]
    },
    {
        question: 'Who was the highest goal scorer in the 2010 world cup?',
        options: ['Thomas Muller', 'Andres Iniesta', 'David Villa', 'Yakubu Ayegbeni'],
        answer: [2]
    },
    {
        question: 'Which team has the highest English premier league trophies?',
        options: ['Manchester United', 'Chelsea', 'Arsenal', 'Liverpool'],
        answer: [0]
    }
];
//Shows the total number of questions to the DOM
totalQuestions.innerText = questions.length;
// Display questions, identify current question and total question number
const loadQuestions = () => {
    currentQuestion.innerHTML = index+1;
    questionText.innerHTML = questions[questionNumber].question;
    option1.innerHTML = questions[questionNumber].options[0];
    option2.innerHTML = questions[questionNumber].options[1];
    option3.innerHTML = questions[questionNumber].options[2];
    option4.innerHTML = questions[questionNumber].options[3];
    index++;
   
};
// Shows each question
const allQuestions = () =>{
    if (index == questions.length){
        endGame();
    }
    else if (questionsArray.length == 0){
            questionNumber = index
            loadQuestions();
            myArray.push(questionNumber);  
        }
}
// Validate answer correct or wrong
const validate = (element) =>{
    if (element.id == questions[questionNumber].answer){
       element.classList.add('correct'); 
        counter();
       score++;
    }
    else {
        element.classList.add('wrong');
    }
    disabledOptions();
}
// Disable other options after user selects one option
const disabledOptions = () =>{
    for (let i = 0; i < options.length; i++){
    options[i].classList.add('disabled');
    if (options[i].id == questions[questionNumber].answer){
        options[i].classList.add('correct');
    }
}
}
// enable other options in the next question
const enableOptions = () =>{
    for (let i = 0; i < options.length; i++) {
        options[i].classList.remove('disabled', 'correct', 'wrong');
}
}
// Checks if an option has been selected
const check = () =>{
    if (!options[0].classList.contains('disabled')){
        errorMessage.classList.remove('remove');
    }
        else {
        allQuestions();
        enableOptions();
        errorMessage.classList.add('remove')
        }
    }
// Goes to the next question
const next = () =>{
    check();
}
// Increases the score when a correct option is selected
const counter = () =>{
    count++;
    currentScore.innerHTML = count;
}
//show score of the user
const endGame = () =>{
        quizContainer.classList.add('remove');
        quizEnd.classList.remove('remove');
        obtainablePoints.innerText = questions.length;
        finalScore.innerText = count;
}
//start the game again
const tryAgain = () =>{
    location.reload()
}
window.onload = function(){
    allQuestions();
}
