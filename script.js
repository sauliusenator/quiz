const quizData = [
    {
      question: "Koks gyvūnas yra didžiausias sausumos gyvūnas?",
      choices: ["Afrikos dramblys", "Baltasis ryklys", "Panda", "Tigras"],
      correctAnswerIndex: 0
    },
    {
      question: "Koks gyvūnas garsėja savo ilgu kaklu?",
      choices: ["Žirafa", "Pingvinas", "Zebras", "Liūtas"],
      correctAnswerIndex: 0
    },
    {
      question: "Kokie gyvūnai mėgsta miegoti žiemą?",
      choices: ["Lokiai", "Varlės", "Kengūros", "Pelės"],
      correctAnswerIndex: 0
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const quizElement = document.getElementById("quiz");
  const scoreElement = document.getElementById("score");
  const nextButton = document.getElementById("next");
  
  function renderQuestion() {
    const question = quizData[currentQuestionIndex];
    quizElement.innerHTML = `
      <p>${question.question}</p>
      <div>
        ${question.choices.map((choice, index) => `
          <label>
            <input type="radio" name="answer" value="${index}">
            ${choice}
          </label>
        `).join('')}
      </div>
    `;
    nextButton.disabled = true;
  }
  
  function checkAnswer() {
    const selected = document.querySelector('input[name="answer"]:checked');
    if (selected) {
      const answerIndex = parseInt(selected.value);
      if (answerIndex === quizData[currentQuestionIndex].correctAnswerIndex) {
        score++;
      }
      nextButton.disabled = false;
    }
  }
  
  nextButton.addEventListener('click', () => {
    checkAnswer();
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      renderQuestion();
    } else {
      quizElement.innerHTML = `<p>Testas baigtas! Jūs atsakėte teisingai į ${score} iš ${quizData.length} klausimų.</p>`;
      nextButton.style.display = "none";
    }
  });
  
  renderQuestion();
  