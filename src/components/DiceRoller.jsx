import React from "react";
import styles from "./DiceRoller.module.css";

export default function DiceRoller({ diceValue, rollDice }) {
  return (
    <div className={styles.container}>

      <div className={styles.diceWrapper} onClick={rollDice}>
        <img
          src={`/images/dice${diceValue}.png`} // dynamically show dice face
          alt={`Dice ${diceValue}`}
          className={styles.diceImage}
        />
      </div>

      <div className={styles.ctaText}>Click on Dice to roll</div>
    </div>
  );
}
