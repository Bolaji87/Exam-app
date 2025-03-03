import React from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header/Header";
import styles from "./Homepage.module.css";

function Homepage() {
  const navigate = useNavigate();
  return (
    <div className={styles.home}>
      <Header />

      <div className={styles.homeContent}>
        <h2>Welcome to React Examination </h2>
        <button onClick={() => navigate("/app")} className={styles.btn}>
          Start
        </button>
      </div>
    </div>
  );
}

export default Homepage;
