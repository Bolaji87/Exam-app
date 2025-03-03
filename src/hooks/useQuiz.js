import { useContext } from "react";
import { QuizContext } from "../contexts/QuizContext";

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === "undefined")
    throw new Error("QuizContext was used outside of QuizProvider");
  return context;
}

export { useQuiz };
