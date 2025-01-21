import React, { useState } from "react";

export const RPSgame = () => {
  // Stato per le scelte dei giocatori
  const [player1Choice, setPlayer1Choice] = useState("");
  const [player2Choice, setPlayer2Choice] = useState("");
  const [result, setResult] = useState("");

  // Possibili scelte
  const choices = ["Sasso", "Carta", "Forbice"];

  // Funzione per generare le scelte casuali
  const playGame = () => {
    const choice1 = choices[Math.floor(Math.random() * choices.length)];
    const choice2 = choices[Math.floor(Math.random() * choices.length)];

    setPlayer1Choice(choice1);
    setPlayer2Choice(choice2);

    // Determinare il vincitore
    determineWinner(choice1, choice2);
  };

  // Logica per determinare il vincitore
  const determineWinner = (choice1, choice2) => {
    if (choice1 === choice2) {
      setResult("Pareggio!");
    } else if (
      (choice1 === "Sasso" && choice2 === "Forbice") ||
      (choice1 === "Forbice" && choice2 === "Carta") ||
      (choice1 === "Carta" && choice2 === "Sasso")
    ) {
      setResult("Giocatore 1 vince!");
    } else {
      setResult("Giocatore 2 vince!");
    }
  };

  return (
    <div style={{ margin: "100px" }}>
      <h1>Sasso, Carta, Forbice</h1>
      <p>Giocatore 1 gioca: {player1Choice}</p>
      <p>Giocatore 2 gioca: {player2Choice}</p>
      <p>Risultato: {result}</p>

      <button onClick={playGame}>Gioca!</button>
    </div>
  );
};