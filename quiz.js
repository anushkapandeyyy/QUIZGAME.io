const quizDB = [
  {
    question:
      "Arrays in JavaScript are defined by which of the following statements?",
    a: "It is an ordered list of values",
    b: "It is an ordered list of objects",
    c: "It is an ordered list of string",
    d: "It is an ordered list of subjects",
    ans: "ans1",
  },

  {
    question: "Which of the following is not javascript data types?",
    a: "NULL",
    b: "Undefined",
    c: "Number",
    d: "All of the above",
    ans: "ans4",
  },

  {
    question:
      "Among the given statements, which statement defines closures in JavaScript",
    a: "JavaScript is a function that is enclosed with references to its inner function scope",
    b: "JavaScript is a function that is enclosed with references to its lexical environment",
    c: " JavaScript is a function that is enclosed with the object to its inner function scope",
    d: "None of the above",
    ans: "ans2",
  },
  {
    question:
      "Which of the following explains correctly what happens when a JavaScript program is developed on a Unix Machine?",
    a: "will work perfectly well on a Windows Machine",
    b: "will be displayed as JavaScript text on the browser",
    c: "will throw errors and exceptions",
    d: "must be restricted to a Unix Machine only",
    ans: "ans1",
  },
  {
    question: "Which of the following scoping type does JavaScript use?",
    a: "Sequential",
    b: "Segmental",
    c: "Lexical",
    d: "Literal",
    ans: "ans3",
  },
  {
    question: "What is the basic difference between JavaScript and Java?",
    a: "Functions are considered as fields",
    b: "Functions are values, and there is no hard distinction between methods and fields",
    c: "Variables are specific",
    d: "There is no difference",
    ans: "ans2",
  },
  {
    question: "Why event handlers is needed in JS?",
    a: " Allows JavaScript code to alter the behaviour of windows",
    b: "s innerHTML page to the code",
    c: "nge the server location",
    d: "forms handling of exceptions and occurrences",
    ans: "ans1",
  },
  {
    question: "Which of the following is not a framework?",
    a: "JavaScript .NET",
    b: "JavaScript",
    c: "Cocoa JS",
    d: "jQuery",
    ans: "ans2",
  },
  {
    question:
      "Which of the following is the property that is triggered in response to JS errors",
    a: "onclick",
    b: "onerror",
    c: "onmessage",
    d: "onexception",
    ans: "ans2",
  },
  {
    question: " Which of the following is not an error in JavaScript?",
    a: "Missing bracket",
    b: "Division by zero",
    c: "Syntax error",
    d: "Missing semi colons",
    ans: "ans4",
  },
];

const question=document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit=document.querySelector('.submit');
const timecount=document.querySelector('.timer .timersec');
console.log(timecount);
let questionCount=0;
let counter;
let timervalue=15;
let score=0;
const loadques = () => {
  clearInterval(counter);
startTimer(timervalue);
  console.log(questionCount);
  const quesList=quizDB[questionCount];
  question.innerHTML=quesList.question;

  option1.innerHTML=quesList.a;
  option2.innerHTML=quesList.b;
  option3.innerHTML=quesList.c;
  option4.innerHTML=quesList.d;
}
loadques();


const answers=document.querySelectorAll('.answer');
const deSelectAll=() =>{
  answers.forEach((currAnsElem)=>currAnsElem.checked=false
  );
}
const getCheckedAns = () =>{
let answer;
answers.forEach((currAnsElem) => {
  if(currAnsElem.checked)
  {
    answer=currAnsElem.id;
  }
})
return answer;

}
const showscore=document.querySelector('#showscore');
submit.addEventListener('click',() => {
const checkedAns=getCheckedAns();
console.log(checkedAns);
if(checkedAns==quizDB[questionCount].ans)
{
score++;
}
questionCount++;
deSelectAll();
if(questionCount<quizDB.length)
{
  loadques();
}
else{
  showscore.innerHTML=`
  <h2>YOUR SCORE: ${score}/10<h2/>
  <button class="submit" id="button-blue" onclick="location.reload()" >PLAY AGAIN</button>
  `;

  showscore.classList.remove('scorearea');
}
})
function takemetoquiz()
{
  // console.log("clicked");
  document.location.href="quiz2.html";
}

function startTimer(time){
  counter=setInterval(timer,1000);
  function timer(){
    timecount.textContent=time;
    time--;

    if(time<9)
    {
      let addzero=timecount.textContent;
      timecount.textContent="0"+addzero;
    }
    if(time<=0){
      clearInterval(counter);
      timecount.textContent="00";

      questionCount++;
      if(questionCount<10)
{
  deSelectAll();
loadques();
}
else{
  showscore.innerHTML=`
  <h2>YOUR SCORE: ${score}/10<h2/>
  <button class="submit" id="button-blue" onclick="location.reload()" >PLAY AGAIN</button>
  `;

  showscore.classList.remove('scorearea');
}
    }
  }
}
