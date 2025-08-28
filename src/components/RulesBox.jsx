import React from "react";
import styles from "./RulesBox.module.css";

export default function RulesBox() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>How to play dice game</h3>
      <ul className={styles.list}>
        <li>Select any number</li>
        <li>Click on the dice image</li>
        <li>If selected number equals dice number, you get 10 points</li>
        <li>If you get a wrong guess, 2 points are deducted</li>
      </ul>
    </div>
  );
}
