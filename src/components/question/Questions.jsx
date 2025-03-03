import React from "react";
import { useQuiz } from "../../hooks/useQuiz";

function Questions() {
  const { questions, index } = useQuiz();
  const question = questions.at(index);
  return (
    <div>
      {question.question}
      <div>
        {question.options.map((option) => (
          <button key={option}>{option}</button>
        ))}
      </div>
    </div>
  );
}

export default Questions;
