import { useState } from "react";
import NumberSelector from "../components/NumberSelector";
import DiceRoller from "../components/DiceRoller";
import ScoreBoard from "../components/ScoreBoard";
import RulesBox from "../components/RulesBox";
import styles from "./GamePage.module.css";

export default function GamePage() {
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [diceValue, setDiceValue] = useState(1);
  const [score, setScore] = useState(0);
  const [showRules, setShowRules] = useState(false);
  const [showValidation, setShowValidation] = useState(false);

  const rollDice = () => {
    if (!selectedNumber) {
      setShowValidation(true);
      return;
    }
    setShowValidation(false);

    const newDice = Math.floor(Math.random() * 6) + 1;
    setDiceValue(newDice);

    if (selectedNumber === newDice) {
      setScore((prev) => prev + 10);
    } else {
      setScore((prev) => prev - 2); // deduct 2 points for wrong guess
    }
    setSelectedNumber(null);

  };

  const resetScore = () => setScore(0);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <ScoreBoard score={score} />
        <NumberSelector 
          selectedNumber={selectedNumber} 
          setSelectedNumber={setSelectedNumber} 
          showValidation={showValidation}
        />
      </div>

      <div className={styles.main}>
        <DiceRoller diceValue={diceValue} rollDice={rollDice} />

        <div className={styles.buttons}>
          <button className={styles.resetBtn} onClick={resetScore}>Reset Score</button>
          <button 
            className={styles.rulesBtn} 
            onClick={() => setShowRules(!showRules)}
          >
            {showRules ? "Hide Rules" : "Show Rules"}
          </button>
        </div>

        {showRules && <RulesBox />}
      </div>
    </div>
  );
}
