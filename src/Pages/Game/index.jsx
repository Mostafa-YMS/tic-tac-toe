import { useState, useCallback } from "react";
import GameBox from "../../Components/GameBox";
import PlayerSide from "../../Components/PlayerSide";

const gameBoxDivStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
const playersDivStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
};

const Game = ({ players, setPlayers }) => {
  const [turn, setTurn] = useState("X");
  const changeTurn = useCallback(
    () => setTurn((prev) => (prev === "X" ? "O" : "X")),
    []
  );
  return (
    <div>
      <div style={playersDivStyle}>
        <PlayerSide
          player={players?.firstPlayer}
          side={"X"}
          turn={turn === "X"}
        />
        <PlayerSide
          player={players?.secondPlayer}
          side={"O"}
          turn={turn === "O"}
        />
      </div>
      <div style={gameBoxDivStyle}>
        <GameBox changeTurn={changeTurn} />
      </div>
    </div>
  );
};

export default Game;
