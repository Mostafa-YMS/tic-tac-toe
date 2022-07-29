import { useState, useCallback } from "react";
import GameBox from "./Components/GameBox";
import Players from "./Components/Players";
import { gameBoxDivStyle } from "./gameStyles";

const Game = ({ players, setPlayers }) => {
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState();

  const declareWinner = useCallback(
    (data) => {
      if (players && setPlayers) {
        const newPlayers = players;
        if (data?.player === "X") {
          newPlayers.firstPlayer.score++;
          localStorage.setItem("players", JSON.stringify(newPlayers));
          setPlayers(newPlayers);
        } else if (data?.player === "O") {
          newPlayers.secondPlayer.score++;
          localStorage.setItem("players", JSON.stringify(newPlayers));
          setPlayers(newPlayers);
        }
      }
      setWinner(data);
    },
    [players, setPlayers]
  );

  const changeTurn = useCallback(
    () => setTurn((prev) => (prev === "X" ? "O" : "X")),
    []
  );

  return (
    <div>
      <Players players={players} turn={turn} winner={winner} />

      <div style={gameBoxDivStyle}>
        <GameBox
          changeTurn={changeTurn}
          turn={turn}
          declareWinner={declareWinner}
          winner={winner}
          setPlayers={setPlayers}
        />
      </div>
    </div>
  );
};

export default Game;
