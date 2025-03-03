import styles from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={styles["loader-container"]}>
      <div className="loader"></div>
      <p>Loading questions...</p>
    </div>
  );
}
