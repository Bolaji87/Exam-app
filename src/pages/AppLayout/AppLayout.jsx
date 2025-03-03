import React from "react";

import Header from "../../components/Header/Header";
import Main from "../../components/main/Main";
import Loader from "../../UI/loader/Loader";
import Error from "../../UI/error/Error";
import StartScreen from "../../components/start/StartScreen";
import Question from "../../components/question/Questions";
import { useQuiz } from "../../hooks/useQuiz";

function AppLayout() {
  const { status } = useQuiz();
  return (
    <div>
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && <Question />}
      </Main>
    </div>
  );
}

export default AppLayout;
