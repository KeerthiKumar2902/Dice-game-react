import React from "react";
import styles from "./NumberSelector.module.css";

export default function NumberSelector({ selectedNumber, setSelectedNumber, showValidation }) {
  const numbers = [1, 2, 3, 4, 5, 6];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Select Number</h2>


      {/* Number Boxes */}
      <div className={styles.numbers}>
        {numbers.map((num) => (
          <button
            key={num}
            className={`${styles.numberBtn} ${
              selectedNumber === num ? styles.selected : ""
            }`}
            onClick={() => setSelectedNumber(num)}
          >
            {num}
          </button>
        ))}
      </div>
      {/* Validation Message */}
      {showValidation && (
        <div className={styles.validation}>You have not selected any number</div>
      )}

      
    </div>
  );
}
