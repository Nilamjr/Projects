console.log("Its Quiz App");

const quizData = [{
    question:"How old is Florin?",
    a: "10",
    b: "14",
    c: "27",
    d: "110",
    correct: "C"
}, {
    question:"What is the most used programming Language",
    a: "Java",
    b: "C",
    c: "Python",
    d: "Javascript",
    Correct: "d"
}, {
    question: "Who is the current President of India" ,
    a: "APJ Abdul Kalam",
    b: "Rajendra Prasad",
    c: "Ram Nath Kovind",
    d: "Pratibha Patil",
    correct: "c"
}, {
    question: "What does HTML stand for?",
    a: "Hyper Text Markup Language",
    b: "Cascading Style Sheet",
    c: "Json OBject Notation",
    d: "Helicopter Terminals Motorboats Lamborginis",
    correct: "a"    
}, {
    question: "What year was Javascript launched?",
    a: "1995",
    b: "1994",
    c: "1998",
    d: "None of above",
    correct: "a"
}]

const answerEls =  document.querySelectorAll('.answer');
const quiz =  document.getElementById('quiz');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const btnSubmit = document.getElementById('submit');

let currentQuiz = 0;

let score = 0;
loadQuiz();

function loadQuiz(){ 
    deselectAnswer();
    const currentQuizData = quizData[currentQuiz];
    // console.log(typeof currentQuizData, currentQuizData);
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected(){
    let answer = undefined;
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer =  answerEl.id;
        }
    });
    return answer;   
}

function deselectAnswer(){
    answerEls.forEach(answerEl => {
        answerEl.checked = false;
    });
}

btnSubmit.addEventListener('click', () => {
    // check to see the answer 
    const answer = getSelected();
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++; 
        }
    
        currentQuiz++;
    
        if(currentQuiz < quizData.length){
            loadQuiz();
        }else{
            // Todo : Show Result
            // alert("You have finished! Get yourself an Orange Lemonade");
            quiz.innerHTML = `<h2> You answered correctly at ${score} / ${quizData.length} questions.</h2>`;
        }
    }
});


