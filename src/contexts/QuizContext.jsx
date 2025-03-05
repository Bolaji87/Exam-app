import { createContext, useEffect, useReducer } from "react";

const QuizContext = createContext();

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
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
    case "choose":
      return { ...state, answer: action.payload };
    case "nextQuestion": {
      return {
        ...state,
        index: state.index < 23 && state.index + 1,
        answer: null,
      };
    }
    case "prevQuestion":
      return { ...state, index: state.index > 0 && state.index - 1 };
    default:
      throw new Error("unkwown action type");
  }
}

function QuizProvider({ children }) {
  const [{ questions, status, index, answer }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const numQuestions = questions.length;

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
    <QuizContext.Provider
      value={{ dispatch, questions, status, index, answer, numQuestions }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export { QuizProvider, QuizContext };
