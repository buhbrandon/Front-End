const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const quizInformation = [
    {
        question: "What is the most important acronym in an EMT's primary assessment?", 
        choices: ["SAMPLE", "ABC", "OPQRST", "TACOS"], 
        answer: "ABC",
    },
    {
        question: "What is the respiratory range for patients in need of oxygen through an NRB?",
        choices: ["1-6 bpm", "12-20 bpm", "8-24 bpm", "Anywhere above 24 bpm"],
        answer: "8-24 bpm",
    },
    {
        question: "What is the name of the scan you do after the primary assessment?",
        choices: ["Full body scan", "Rapid scan", "Quick scan", "Patient investigation"],
        answer: "Rapid scan", 
    },
    {
        question: "Altered mental status with a history of diabetes is an indicator for which medication?",
        choices: ["Aspirin", "Epinephrine", "Albuterol", "Oral glucose"],
        answer: "Oral glucose",
    },
];
let currentQuestionIndex = 0;
let correct = 0;
let slideNumber = 1;

function nextSlide(n) {
  showSlides(slideNumber += n);
}

function currentSlide(n) {
  showSlides(slideNumber = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideNumber = 1}    
  if (n < 1) {slideNumber = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideNumber-1].style.display = "block";  
}

function showQuestion(index) {
    const question = quizInformation[index];
    questionElement.textContent = question.question;
    choicesElement.innerHTML = "";


    for(let i = 0; i < question.choices.length; i++) {
        const optionButton = document.createElement("button");
        optionButton.textContent = question.choices[i];
        optionButton.addEventListener("click", () => {
            checkAnswer(optionButton.textContent);
        });
        choicesElement.appendChild(optionButton);
    }
}

function checkAnswer(selectedOption) {
    const answer = quizInformation[currentQuestionIndex].answer;

    if(selectedOption === answer) {
        correct++;
        alert("Correct!");
    }
    else {
        alert("Incorrect. The correct answer is: " + answer);
    }

    currentQuestionIndex++;  

    if(currentQuestionIndex < quizInformation.length) {
        showQuestion(currentQuestionIndex);
    }
    else {
        questionElement.textContent = `Quiz complete! You scored ${correct} out of ${quizData.length}!`
        choicesElement.innerHTML = "";
    }
}

showSlides(slideNumber);
showQuestion(currentQuestionIndex);
// hello there