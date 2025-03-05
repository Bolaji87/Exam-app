import React from "react";
import Options from "../option/Options";
import { useQuiz } from "../../hooks/useQuiz";
import styles from "./Question.module.css";

function Questions() {
  const { questions, index, dispatch, answer } = useQuiz();
  const question = questions.at(index);

  return (
    <div className={styles.question}>
      <h2>
        {index + 1} : {question.question}
      </h2>
      <ul>
        {question.options.map((option, optionIndex) => (
          <Options key={option} option={option} optionIndex={optionIndex} />
        ))}
      </ul>

      <div className={styles.btns}>
        {/* {answer !== null && (
          <button onClick={() => dispatch({ type: "prevQuestion" })}>
            Previous
          </button>
        )} */}
        {answer !== null && (
          <button onClick={() => dispatch({ type: "nextQuestion" })}>
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default Questions;
