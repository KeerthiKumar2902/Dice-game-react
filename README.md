# Dice Game React (Vite + React)

A simple, interactive Dice Game built with React (via Vite) — part of a learning series that combines Figma design, React UI development, and game logic. 

##  Live Preview  
*(Link to live demo if deployed)*

---

##  Game Overview

- **Landing Screen**: Full-screen design with a big **DICE GAME** title (Poppins font), large dice image, and a **PLAY GAME** button that navigates to the game page using React Router.

- **Game Mechanics**:
  1. Choose a number between **1 and 6** from the number selector (top-right).
  2. Click the **dice image** in the center to roll.
     - If your selection matches the roll → you gain that amount.
     - If it doesn't → you lose 2 points.
  3. The score updates (displayed top-left), and you must select again before the next roll.
  4. Use **Reset Score** to restart at zero, and **Show/Hide Rules** to toggle game instructions.

---

##  Run Locally

```bash
git clone https://github.com/KeerthiKumar2902/Dice-game-react.git
cd Dice-game-react
npm install
npm run dev
