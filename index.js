const quizDB=[
    {
        question: "Q1:What is the full form of HTML",
        a:"Hello to my land",
        b:"Hey text markup language",
        c:"Hypertext markup",
        d:"Hypertext markup language",
        ans:"ans4"
    },
    {
        question: "Q2: what is the full form of CSS",
        a:"Cascading Style Sheet",
        b:"cascading style sheep",
        c:"cartoon style sheet",
        d:"casading super sheet",
        ans:"ans1"
    },
    {
         question: "Q3: Full form of html",
        a:"Hypertext transfer product",
        b:"Hypertext test product",
        c:"Hyp transfer product",
        d:"Hypertext transfer protocol",
        ans:"ans4"
    },
    {
        question:"Q4:what is name",
        a:"nothing",

        b:"Aditya",
        c:"none",
        d:"nil"
    }
];

const question=document.querySelector(".queston");
const option1=document.querySelector("#option1");
const option2=document.querySelector("#option1");
const option3=document.querySelector("#option1");
const option4=document.querySelector("#option1");
const submit=document.querySelector("#submit");
let qusCount=0;

const loadQuestion=()=>{
    const questionList=quizDB[queCount];

    question.innerText=questionList.question;
    option1.innerText=questionList.a;
    option2.innerText=questionList.b;
    option3.innerText=questionList.c;
    option4.innerText=questionList.d;
}


loadQuestion();

submit.addEventListener('click', ()=>{
    const checked
})