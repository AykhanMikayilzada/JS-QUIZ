let obj = [
  {
    question: "1. Bunlardan hansı dəyişə bilməyən dəyişəndir?",
    correctAnswer: 3,
    userChoice: null,
    answers: ["A) var", "B) let", "C) const"],
  },
  {
    question: '2. Bu dəyərlərdən hansı "true" qaytarar?',
    correctAnswer: 3,
    userChoice: null,
    answers: ["A) 1", 'B) " "', "C) Hər ikisi də true qaytaracaq."],
  },
  {
    question: "3. Bunlardan hansı inprimitive dəyərdir?",
    correctAnswer: 1,
    userChoice: null,
    answers: ["A) array", "B) number", "C) string"],
  },
  {
    question: "4. Cüt ədədləri hansı if şərti ilə tapmaq olar?",
    correctAnswer: 1,
    userChoice: null,
    answers: [
      "A) if(number % 2 == 0){}",
      "B) if(number / 2 == 0){}",
      "C) if(number % 2 != 0){}",
    ],
  },
  {
    question:
      "5. for(i= 0; i < array.length; i++) yazdıqdan sonra array-in içindəki elementləri necə tutarıq?",
    correctAnswer: 2,
    userChoice: null,
    answers: ["A) array[1]", "B) array[i]", "C) array[i-1]"],
  },
];

const questionTitle = document.getElementById("qTitle");
const btnGroup = document.getElementById("btnGroup");
const progressLine = document.getElementById("progresLine");

let index = 0;
let userPoint = 0;

function updateQuestion() {
  const currentQuestion = obj[index];
  questionTitle.textContent = currentQuestion.question;
  btnGroup.innerHTML = "";
  currentQuestion.answers.forEach((answer, i) => {
    const btn = document.createElement("button");
    btn.className = "btn btn-light";
    btn.textContent = answer;
    btn.addEventListener("click", () => checkAnswer(i + 1));
    btnGroup.appendChild(btn);
  });
}

function checkAnswer(userChoice) {
  obj[index].userChoice = userChoice;

  if (obj[index].userChoice === obj[index].correctAnswer) {
    userPoint++;
  }

  index++;

  if (index < obj.length) {
    updateQuestion();
    updateProgress();
  } else {
    showResult();
  }
}

function updateProgress() {
  const progressValue = ((index + 1) / obj.length) * 100;
  progressLine.style.width = `${progressValue}%`;
}

function showResult() {
  questionTitle.textContent = "Quiz Completed";
  btnGroup.innerHTML = `<p class="text-white">You earned: ${userPoint*10} points!</p>`;
}

updateQuestion();

