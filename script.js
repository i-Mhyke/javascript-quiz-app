// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

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

// to store variables, highlighting the target elements, classes and id's

// current question number and total question number
const questionNumber = document.querySelector('.current-question');
const totalQuestion = document.querySelector('.total-question');
// Question
const question = document.querySelector('.question')
// options
const opt1 = document.querySelector('.option1');
const opt2 = document.querySelector('.option2');
const opt3 = document.querySelector('.option3');
const opt4 = document.querySelector('.option4');
const options = document.querySelector('.option-container').children;
// results
const currentScore = document.querySelector('.correct-answers');
const totalObtainable = document.querySelector('.possible-score');
const end = document.querySelector('.game-over');
//score counter
const scoreCount = document.querySelector('.current-score');

let count = 0;
let questionIndex;
let index = 0;
let myArray = [];
let myArr = [];
let score = 0;

// array containing questions, options and answers
const questions = [
    {
        q: 'Which of these options is not a "form tag attribute"?',
        options: ['action', 'method', 'enctype', 'label'],
        answer: [3]
    }, {
        q: 'How do you write an if statement in "Javascript"?',
        options: ['if a == 5', 'if (a == 5)', 'if a = 5', 'if (a = 5)'],
        answer: [1]
    },
    {
        q: 'How do you call a function in "Javascript"?',
        options: ['name(parameter)', 'function(name)', 'parameter(name)', 'none of the above'],
        answer: [0]
    },
    {
        q: 'Which City did Covid-19 originate from?',
        options: ['Beijing', 'Wuhan', 'Yuhan', 'Wuan'],
        answer: [1]
    },
    {
        q: 'Which language is used for styling web pages?',
        options: ['XML', 'JQUERY', 'HTML', 'CSS'],
        answer: [3]
    }
]

// write functions to display questions, current question, total question number
totalQuestion.innerHTML = questions.length;
function load() {
    questionNumber.innerHTML = index+1;
    question.innerHTML = questions[questionIndex].q;
    opt1.innerHTML = questions[questionIndex].options[0];
    opt2.innerHTML = questions[questionIndex].options[1];
    opt3.innerHTML = questions[questionIndex].options[2];
    opt4.innerHTML = questions[questionIndex].options[3];
    index++;
   
}
 
function randomQuestions() {
    let randomNumber = Math.floor(Math.random() * questions.length);
    let hitDuplicate = 0;
    if (index == questions.length){
        gameOver();
    }
    else{
        if (myArray.length > 0){
            for (let i = 0; i < myArray.length; i++){
                if (myArray[i] == randomNumber){
                    hitDuplicate = 1;
                    break;
                }
            } 
            if (hitDuplicate == 1){
                randomQuestions();
            }
            else {
                questionIndex = randomNumber;
                load();
                myArr.push(questionIndex);
            }
        }
            if (myArray.length == 0){
                questionIndex = randomNumber;
                load();
                myArr.push(questionIndex);
            }
    //    console.log('myArr:'+myArr);
        myArray.push(randomNumber);
    }
   
}

// check if answer is correct or wrong
function check(element) {
    if (element.id == questions[questionIndex].answer){
       element.classList.add('correct'); 
        counter();
       score++;
        

    }
    else {
        element.classList.add('wrong');
    }
    disabledOptions();
}

// make other options non-selectable after user selects option
function disabledOptions() {
    for (let i = 0; i < options.length; i++){
    options[i].classList.add('disabled');
    if (options[i].id == questions[questionIndex].answer){
        options[i].classList.add('correct');
    }
}
}

function enableOptions(){
    for (let i = 0; i < options.length; i++) {
        options[i].classList.remove('disabled', 'correct', 'wrong');
}
}
function validate() {
    if (!options[0].classList.contains('disabled')){
        alert("Please Select an Option");
    }
        else {
        randomQuestions();
        enableOptions();
        }
    }

function next(){
    validate();
}
function counter(){
    count++;
    scoreCount.innerHTML = count;
}
function gameOver() {
    end.classList.add('show');
    currentScore.innerHTML = score;
    totalObtainable.innerHTML = questions.length;
}
function startAgain (){
    window.location.reload();
}
window.onload = function(){
    randomQuestions()
}
