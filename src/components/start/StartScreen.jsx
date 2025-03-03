import React from "react";
import { useQuiz } from "../../hooks/useQuiz";

function StartScreen() {
  const { dispatch } = useQuiz();
  return (
    <div>
      <h2>Welcome to React Exam App 2025</h2>
      <button onClick={() => dispatch({ type: "start" })}>
        let's get started
      </button>
    </div>
  );
}

export default StartScreen;
