import React from "react";
import styles from "./Header.module.css";

import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <nav className={styles.nav}>
      <h2 role="button" onClick={() => navigate("/")}>
        The Exam App
      </h2>
      <ul>
        <li className={styles["custom-link"]}>
          <a href="">React</a>
        </li>
        <li className={styles["custom-link"]}>
          <a href="">Javascript</a>
        </li>
        <li className={`${styles["custom-link"]} ${styles["login"]}`}>
          <a href="">Login</a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
