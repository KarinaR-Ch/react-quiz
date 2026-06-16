export const shuffleAnswers = (question) => {
  const unshuffledAnswers = [
    question.correctAnswer,
    ...question.incorrectAnswers,
  ];

  return unshuffledAnswers
    .map((unshuffledAnswer) => ({
      sort: Math.random(),
      value: unshuffledAnswer,
    }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
};

export const normalizeQuestions = (backendQuestions) => {
  const questionsArray = Array.isArray(backendQuestions) ? backendQuestions : [];
  return questionsArray.map((backendQuestion) => {
    const hasApiFormat = Array.isArray(backendQuestion.incorrect_answers);
    const incorrectAnswers = hasApiFormat
      ? backendQuestion.incorrect_answers.map((incorrectAnswer) =>
          decodeURIComponent(incorrectAnswer)
        )
      : Array.isArray(backendQuestion.incorrectAnswers)
      ? backendQuestion.incorrectAnswers
      : [];

    const correctAnswer = hasApiFormat
      ? decodeURIComponent(backendQuestion.correct_answer || "")
      : backendQuestion.correctAnswer || "";

    const question = hasApiFormat
      ? decodeURIComponent(backendQuestion.question || "")
      : backendQuestion.question || "";

    return {
      correctAnswer,
      question,
      incorrectAnswers,
    };
  });
};
