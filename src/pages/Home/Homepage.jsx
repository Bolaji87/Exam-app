import React from "react";
import Header from "../../components/Header/Header";
import styles from "./Homepage.module.css";
import AppLayout from "../AppLayout/AppLayout";

function Homepage() {
  return (
    <div className={styles.home}>
      <Header />
      <AppLayout />
    </div>
  );
}

export default Homepage;
