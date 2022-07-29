import { playersDivStyle } from "../gameStyles";
import PlayerSide from "./PlayerSide";

const Players = ({ players, turn, winner }) => {
  return (
    <div style={playersDivStyle}>
      {(winner?.player === "X" || !winner) && (
        <PlayerSide
          player={players?.firstPlayer}
          side={"X"}
          turn={turn === "X"}
          winner={winner?.player === "X"}
        />
      )}

      {(winner?.player === "O" || !winner) && (
        <PlayerSide
          player={players?.secondPlayer}
          side={"O"}
          turn={turn === "O"}
          winner={winner?.player === "O"}
        />
      )}
      {winner === "draw" && (
        <p style={{ fontSize: "38px", fontWeight: "500", color: "#661166" }}>
          Draw
        </p>
      )}
    </div>
  );
};

export default Players;
