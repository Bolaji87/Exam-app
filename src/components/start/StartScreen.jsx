import React from "react";
import { useQuiz } from "../../hooks/useQuiz";

import Button from "../../UI/Button";
import styles from "./StartScreen.module.css";

function StartScreen() {
  const { dispatch, numQuestions } = useQuiz();
  return (
    <div className={styles.startCont}>
      <h2>React Exam 2025</h2>
      <p>
        This exam contains {numQuestions} questions , to test your knowledge
        based on what has been covered so far in the course
      </p>
      <Button
        className={styles.btn}
        onclick={() => dispatch({ type: "start" })}
      >
        Click to Start
      </Button>
    </div>
  );
}

export default StartScreen;
