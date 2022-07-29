import PlayerSide from "../../Components/PlayerSide";
import { useState } from "react";
const Game = ({ players, setPlayers }) => {
  const [turn, setTurn] = useState("X");
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
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
    </div>
  );
};

export default Game;
