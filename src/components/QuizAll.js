import React, { useState } from "react";
import Question from "./Question";

const questions = [
  {
    id: 1,
    question: "Hangi renkleri seversin?",
    options: ["Mavi", "Kırmızı", "Sarı", "Yeşil"],
    answer: "Yeşil"
  },
  {
    id: 2,
    question: "Hangi meyveyi daha çok seversin?",
    options: ["Elma", "Muz", "Portakal", "Çilek"],
    answer: "Elma"
  },
  {
    id: 3,
    question: "En sevdiğin tatlı nedir?",
    options: ["Baklava", "Kadayıf", "Cheesecake", "Tiramisu"],
    answer: "Cheesecake"
  }
];

const QuizAll = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleChange = (event) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowResults(true);
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setShowResults(false);
  };

  return (
    <div className="quiz">
      <form onSubmit={handleSubmit}>
        {questions.map((q) => (
          <Question
            questionKey={q.id}
            question={q.question}
            options={q.options}
            selectedAnswer={selectedAnswers["questionkey_"+q.id]}
            handleChange={handleChange}
          />
        ))}
        <button type="submit">Check Answers</button> &nbsp;
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>
      {showResults && (
        <div>
          <h2>Results:</h2>
          <ul>
            {questions.map((question) => (
              <li key={question.id}>
                {question.question} -{" "}
                {selectedAnswers["questionkey_"+question.id] === question.answer
                  ? "Correct"
                  : "Incorrect"}
              </li>
            ))}
          </ul>
        </div>
      )}
    
    </div>
  );
};

export default QuizAll;
