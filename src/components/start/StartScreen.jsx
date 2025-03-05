import React from "react";
import { useQuiz } from "../../hooks/useQuiz";
import styles from "./StartScreen.module.css";

function StartScreen() {
  const { dispatch, numQuestions } = useQuiz();
  return (
    <div className={styles.startCont}>
      <h2>Welcome to React Exam App 2025</h2>
      <p>
        This exam contains {numQuestions} questions , where you can test your
        knowledge based on what was covered so far in the course
      </p>
      <button onClick={() => dispatch({ type: "start" })}>Start</button>
    </div>
  );
}

export default StartScreen;
