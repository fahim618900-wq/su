const questions = [
    {
        question: "What is the capital of Bangladesh?",
        options: ["Dhaka", "Chittagong", "Khulna", "Sylhet"],
        answer: "Dhaka"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars"
    },
    {
        question: "How many continents are there?",
        options: ["5", "6", "7", "8"],
        answer: "7"
    },
    {
        question: "What is H2O commonly known as?",
        options: ["Oxygen", "Hydrogen", "Water", "Salt"],
        answer: "Water"
    },
    {
        question: "Which language is used for web development?",
        options: ["Python", "JavaScript", "C++", "Java"],
        answer: "JavaScript"
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('nextBtn');
const scoreEl = document.getElementById('score');

function showQuestion(){
    questionEl.textContent = questions[currentQuestion].question;
    optionsEl.innerHTML = '';
    questions[currentQuestion].options.forEach(option => {
        const btn = document.createElement('button');
        btn.textContent = option;
        btn.addEventListener('click', selectOption);
        optionsEl.appendChild(btn);
    });
}

function selectOption(e){
    const selected = e.target.textContent;
    if(selected === questions[currentQuestion].answer){
        score++;
    }
    Array.from(optionsEl.children).forEach(btn => btn.disabled = true);
}

nextBtn.addEventListener('click', () => {
    currentQuestion++;
    if(currentQuestion < questions.length){
        showQuestion();
    } else {
        questionEl.textContent = "Quiz Completed!";
        optionsEl.innerHTML = '';
        scoreEl.textContent = `Your Score: ${score} / ${questions.length}`;
        nextBtn.disabled = true;
    }
});

showQuestion();
