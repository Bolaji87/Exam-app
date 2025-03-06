import React from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header/Header";
import Button from "../../UI/Button";
import styles from "./Homepage.module.css";

function Homepage() {
  const navigate = useNavigate();
  return (
    <div className={styles.home}>
      <Header />

      <div className={styles.homeContent}>
        <h2>Welcome to React Examination </h2>
        <Button onclick={() => navigate("/app")} className={styles.btn}>
          Open Exam
        </Button>
      </div>
    </div>
  );
}

export default Homepage;
