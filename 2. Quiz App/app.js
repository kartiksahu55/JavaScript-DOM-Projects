const questions = [
  {
    question: "Which CSS property defines the radius of an element's corners?",
    a: "border-corner",
    b: "radius",
    c: "corner",
    d: "border-radius",
    correct: "d",
  },
  {
    question:
      "Which CSS property allows you to specify an image to be used instead of the normal border around an element?",
    a: "border-image",
    b: "border-picture",
    c: "border-background",
    d: "border-bgimage",
    correct: "a",
  },
  {
    question: "What are the RGBA color values?",
    a: "RGBA color values are combination of four colors",
    b: "RGBA color values are an extension of RGB color values with background image",
    c: "RGBA color values are an extension of RGB color values with an alpha channel",
    d: "None of the above",
    correct:"c",
  },
  {
    question: "In a RGBA color value, what does A stand for?",
    a: "A specifies the opacity for a color",
    b: "A specifies the Aqua color",
    c: "A specifies the opacity Azure color",
    d: "All of the above",
    correct: "a",
  },
  {
    question: "Which of the following specifies the red color with opacity?",
    a: "rgba(255, 0, 0, 255)",
    b: "rgba(255, 255, 255, 0.3)",
    c: "rgba(0, 0, 255, 0.3)",
    d: "rgba(255, 0, 0, 0.3)",
    correct: "d",
  },
];

let index = 0;
let total = questions.length;
let correctAns = 0;
let inCorrectAns = 0;
const currentQuestion = document.getElementById("questionHeading");
const optionInput = document.querySelectorAll(".option");
function loadQuestions() {
    if(index == total){
        return endQuiz();
      }
      getReset();

  const data = questions[index];
  currentQuestion.textContent = `${index + 1}. ${data.question}`;

  optionInput[0].nextElementSibling.innerText = data["a"];
  optionInput[1].nextElementSibling.innerText = data["b"];
  optionInput[2].nextElementSibling.innerText = data["c"];
  optionInput[3].nextElementSibling.innerText = data["d"];
}

loadQuestions();

function submitQuiz() {
  const ans = getAnswer();
  if (ans == questions[index].correct) {
    correctAns++;
  } else {
    inCorrectAns++;
  }
  index++;
  loadQuestions();
  return;
}

function getAnswer() {
  let answer = "";
  optionInput.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  });
  return answer;
}

function getReset() {
  optionInput.forEach((input) => {
    input.checked = false;
  });
}

function endQuiz(){
    document.getElementById("box").innerHTML=`
    <h3>Thank you for playing the Quiz</h3>
    <h2>${correctAns} out of ${total} are correct</h2>
    `
}