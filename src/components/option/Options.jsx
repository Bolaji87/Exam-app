import React from "react";
import { useQuiz } from "../../hooks/useQuiz";

function Options({ option, optionIndex }) {
  const { dispatch } = useQuiz();
  return (
    <div>
      <li onClick={() => dispatch({ type: "choose", payload: optionIndex })}>
        <span>( {optionIndex + 1} ) </span> <span> {option}</span>
      </li>
    </div>
  );
}

export default Options;
