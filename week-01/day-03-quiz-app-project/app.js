// Quiz data
const questions = [
    {
      question: "What does DOM stand for?",
      options: [
        "Document Object Model",
        "Data Object Method",
        "Dynamic Object Model",
        "Direct Object Mapping"
      ],
      answer: 0
    },
    {
      question: "Which keyword is used to declare a constant?",
      options: ["var", "let", "const", "static"],
      answer: 2
    }
  ];
  
  // State
  let currentQuestion = 0;
  let score = 0;
  
  // DOM elements
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const nextBtn = document.getElementById("nextBtn");
  const resultEl = document.getElementById("result");
  
  // Render question
  function renderQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";
  
    q.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.onclick = () => selectAnswer(index);
      optionsEl.appendChild(button);
    });
  }
  
  // Handle answer
  function selectAnswer(selectedIndex) {
    if (selectedIndex === questions[currentQuestion].answer) {
      score++;
    }
  }
  
  // Next button logic
  nextBtn.addEventListener("click", () => {
    currentQuestion++;
  
    if (currentQuestion < questions.length) {
      renderQuestion();
    } else {
      showResult();
    }
  });
  
  // Show result
  function showResult() {
    questionEl.textContent = "Quiz Completed!";
    optionsEl.innerHTML = "";
    nextBtn.style.display = "none";
    resultEl.textContent = `Your score: ${score}/${questions.length}`;
  }
  
  // Start quiz
  renderQuestion();
  