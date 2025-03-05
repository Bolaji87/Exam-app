import React from "react";

import Header from "../../components/Header/Header";
import Main from "../../components/main/Main";
import Loader from "../../UI/loader/Loader";
import Error from "../../UI/error/Error";
import StartScreen from "../../components/start/StartScreen";
import Question from "../../components/question/Questions";
import FinishScreen from "../../components/finish/FinishScreen";

import { useQuiz } from "../../hooks/useQuiz";
import styles from "./AppLayout.module.css";

function AppLayout() {
  const { status } = useQuiz();
  return (
    <div className={styles.app}>
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
