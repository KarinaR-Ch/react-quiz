const data = [
  {
    question: "How do you share data between Components?",
    incorrectAnswers: ["useEffect", "useState", "Props drilling only"],
    correctAnswer: "Context API",
  },
  {
    question: "How do you define State in React?",
    incorrectAnswers: ["useEffect", "useContext", "useReducer"],
    correctAnswer: "useState",
  },
  {
    question: "What is the correct way to conditionally render a component in React?",
    incorrectAnswers: [
      "Using a for loop",
      "Using a switch statement only",
      "Using useEffect",
    ],
    correctAnswer: "Using the ternary operator or && operator",
  },
  {
    question: "What does the 'completed' property in a quiz state typically represent?",
    incorrectAnswers: [
      "The number of questions answered correctly",
      "The total number of questions",
      "The current question index",
    ],
    correctAnswer: "A boolean reflecting whether the quiz is finished",
  },
  {
    question: "Which hook would you use to perform side effects in a React component?",
    incorrectAnswers: ["useState", "useContext", "useReducer"],
    correctAnswer: "useEffect",
  },
  {
    question: "What is the purpose of the <Score /> component in a quiz app?",
    incorrectAnswers: [
      "To display the current question",
      "To navigate between questions",
      "To reset the quiz",
    ],
    correctAnswer: "To display the final score (corrected answers / total answers)",
  },
  {
    question: "How do you pass data from a parent component to a child component in React?",
    incorrectAnswers: ["Using Context API only", "Using useState only", "Using useEffect"],
    correctAnswer: "Using props",
  },
  {
    question: "What is the role of <ContextProvider /> in a React app?",
    incorrectAnswers: [
      "To manage local component state",
      "To handle side effects",
      "To render the main App component",
    ],
    correctAnswer: "To provide global state to child components",
  },
  {
    question: "Which method would you use to update a question's answer status (correct/incorrect) in the quiz state?",
    incorrectAnswers: [
      "Using a regular variable",
      "Using localStorage directly",
      "Using props",
    ],
    correctAnswer: "Using the state setter function from useState",
  },
  {
    question: "What should happen when a user selects an answer in a quiz?",
    incorrectAnswers: [
      "The quiz should restart immediately",
      "The answer should be ignored until the next question",
      "The score should reset to zero",
    ],
    correctAnswer: "The answer should be evaluated, the score updated, and the next question displayed",
  },
];

export default data;