import React from "react";
import styles from "./AppLayout.module.css";
import Button from "../../UI/Button";

function AppLayout() {
  return (
    <div className={styles.app}>
      <h2>Welcome to React Examination </h2>
      <Button className={styles.btn}>Click to get started</Button>
    </div>
  );
}

export default AppLayout;
