import React from "react";
import styles from "./ScoreBoard.module.css";

export default function ScoreBoard({ score }) {
  return (
    <div className={styles.container}>
      <div className={styles.score}>{score}</div>
      <div className={styles.label}>Total Score</div>
    </div>
  );
}
