import React from "react";
import Header from "../../components/Header/Header";
import styles from "./Homepage.module.css";

function Homepage() {
  return (
    <div className={styles.home}>
      <Header />

      <div className={styles.homeContent}>
        <h2>Welcome to React Examination </h2>
        <button className={styles.btn}>Start</button>
      </div>
    </div>
  );
}

export default Homepage;
