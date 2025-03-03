import { createContext, useEffect, useReducer } from "react";

const QuizContext = createContext();

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
};

// status : can be 'loading', 'error', 'ready', 'active' and 'finished'

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, error: action.payload, status: "error" };
    case "start":
      return { ...state, status: "active" };
    default:
      throw new Error("unkwown action type");
  }
}

function QuizProvider({ children }) {
  const [{ questions, status, index }, dispatch] = useReducer(
    reducer,
    initialState
  );
  useEffect(function () {
    async function getQuestions() {
      try {
        const response = await fetch("http://localhost:5000/questions");
        if (!response.ok) throw new Error("error fetch Questions");
        const data = await response.json();
        dispatch({ type: "dataReceived", payload: data });
      } catch (err) {
        dispatch({ type: "dataFailed" });
        console.error(err);
      }
    }
    getQuestions();
  }, []);
  return (
    <QuizContext.Provider value={{ dispatch, questions, status, index }}>
      {children}
    </QuizContext.Provider>
  );
}

export { QuizProvider, QuizContext };
