import PlayerSide from "./PlayerSide";

const playersDivStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
};

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
        <p style={{ fontSize: "38px", fontWeight: "500" }}>Draw</p>
      )}
    </div>
  );
};

export default Players;
