import { useContext, useEffect } from "react";
import Question from "./Question";
import { QuizContext } from "../contexts/quiz";
import quizData from "../data";

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    if (quizState.questions.length > 0) {
      return;
    }

    dispatch({ type: "LOADED_QUESTIONS", payload: quizData });
  }, [quizState.questions.length, dispatch]);

  return (
    <div className="quiz">
      {quizState.questions.length === 0 && !quizState.showResults ? (
        <div className="loading">Loading questions…</div>
      ) : quizState.showResults && (
        <div className="results">
          <div className="congratulations">Congratulations</div>
          <div className="results-info">
            <div>You have completed the quiz.</div>
            <div>
              You've got {quizState.correctAnswersCount} of{" "}
              {quizState.questions.length}
            </div>
          </div>
          <div
            className="next-button"
            onClick={() => dispatch({ type: "RESTART" })}
          >
            Restart
          </div>
        </div>
      )}
      {!quizState.showResults && quizState.questions.length > 0 && (
        <div>
          <div className="score">
            Question {quizState.currentQuestionIndex + 1}/
            {quizState.questions.length}
          </div>
          <Question />
          <div
            className="next-button"
            onClick={() => dispatch({ type: "NEXT_QUESTION" })}
          >
            Next question
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
