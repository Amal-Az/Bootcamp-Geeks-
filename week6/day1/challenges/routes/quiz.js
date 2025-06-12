import express from 'express';
const router = express.Router();

const triviaQuestions = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", answer: "Mars" },
  { question: "What is the largest mammal in the world?", answer: "Blue whale" },
];

let currentQuestionIndex = 0;
let score = 0;

// GET /quiz - Affiche la première ou la prochaine question
router.get('/', (req, res) => {
  if (currentQuestionIndex >= triviaQuestions.length) {
    return res.redirect('/quiz/score');
  }

  res.json({
    question: triviaQuestions[currentQuestionIndex].question,
    questionNumber: currentQuestionIndex + 1
  });
});

// POST /quiz - Envoie une réponse et passe à la question suivante
router.post('/', (req, res) => {
  const userAnswer = req.body.answer;

  if (!userAnswer) {
    return res.status(400).json({ message: 'Réponse requise.' });
  }

  const correctAnswer = triviaQuestions[currentQuestionIndex].answer;

  let feedback;
  if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
    score++;
    feedback = "Correct!";
  } else {
    feedback = `Incorrect! The correct answer was: ${correctAnswer}`;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < triviaQuestions.length) {
    res.json({
      feedback,
      nextQuestion: `/quiz`
    });
  } else {
    res.redirect('/quiz/score');
  }
});

// GET /quiz/score - Affiche le score final
router.get('/score', (req, res) => {
  const finalScore = score;
  // Réinitialiser pour une nouvelle partie
  score = 0;
  currentQuestionIndex = 0;
  res.json({ message: `Quiz terminé! Votre score: ${finalScore}/${triviaQuestions.length}` });
});

export default router;
