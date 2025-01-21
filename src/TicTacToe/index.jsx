import { useState } from "react";

const Box = ({ value, onClick }) => {
  return (
    <div
      style={{
        height: 100,
        width: 100,
        border: "1px solid black",
        fontSize: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: value ? "not-allowed" : "pointer", // Disabilita il clic su celle già occupate
      }}
      onClick={onClick}
    >
      {value}
    </div>
  );
};

const Row = ({ values, onClick }) => {
  return (
    <div style={{ display: "flex" }}>
      {values.map((value, index) => (
        <Box key={index} value={value} onClick={() => onClick(index)} />
      ))}
    </div>
  );
};

export const TicTacToe = () => {
  const [currentPlayer, setCurrentPlayer] = useState("X"); // Stato per alternare tra i giocatori
  const [cells, setCells] = useState(Array(9).fill("")); // Stato per le celle del tabellone
  const [winner, setWinner] = useState(null); // Stato per il vincitore

  // Funzione per verificare le condizioni di vittoria
  const checkWinner = (board) => {
    const winningCombinations = [
      [0, 1, 2], // Righe
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6], // Colonne
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8], // Diagonali
      [2, 4, 6],
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    return null;
  };

  // Funzione per gestire il clic su una cella
  const onChangeCell = (row, column) => {
    const index = row * 3 + column;

    // Impedisce di modificare celle già occupate o se c'è un vincitore
    if (cells[index] || winner) return;

    const newArray = cells.map((v, i) => (i === index ? currentPlayer : v));
    setCells(newArray);

    // Controlla se c'è un vincitore
    const gameWinner = checkWinner(newArray);
    if (gameWinner) {
      setWinner(gameWinner);
    } else {
      // Cambia il turno al prossimo giocatore
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  // Funzione per resettare il gioco
  const resetGame = () => {
    setCells(Array(9).fill(""));
    setCurrentPlayer("X");
    setWinner(null);
  };

  return (
    <div style={{ textAlign: "center", marginTop: 20 }}>
      <h1>Tris (Tic Tac Toe)</h1>
      {winner ? (
        <h2>Vincitore: {winner}</h2>
      ) : (
        <h2>Turno del giocatore: {currentPlayer}</h2>
      )}

      <div style={{ marginLeft: "800px"}}>
        <Row values={cells.slice(0, 3)} onClick={(v) => onChangeCell(0, v)} />
        <Row values={cells.slice(3, 6)} onClick={(v) => onChangeCell(1, v)} />
        <Row values={cells.slice(6, 9)} onClick={(v) => onChangeCell(2, v)} />
      </div>

      <button
        onClick={resetGame}
        style={{
          marginTop: 20,
          padding: 10,
          fontSize: 16,
          cursor: "pointer",
        }}
      >
        Resetta il gioco
      </button>
    </div>
  );
};