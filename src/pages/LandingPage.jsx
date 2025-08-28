import { useNavigate } from "react-router-dom";
import styles from "./LandingPage.module.css";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      {/* Left Section - Dice Image */}
      <div className={styles.imageWrapper}>
        <img 
          src="/images/dice.png" 
          alt="Dice Game"
          className={styles.diceImage}
        />
      </div>

      {/* Right Section - Header + Button */}
      <div className={styles.content}>
        <h1 className={styles.header}>DICE GAME</h1>
        <button
          onClick={() => navigate("/game")}
          className={styles.startButton}
        >
          PLAY NOW
        </button>
      </div>
    </div>
  );
}
