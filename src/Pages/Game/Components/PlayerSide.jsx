import {
  mainDivStyle,
  sideBoxStyle,
  sideStyle,
  winningsStyle,
} from "../gameStyles";

const PlayerSide = ({ player, turn, side, winner }) => {
  return (
    <div style={{ ...mainDivStyle, color: (turn || winner) && "#2BA400" }}>
      <div
        style={{
          ...sideBoxStyle,
          border: `3px solid ${turn || winner ? "#2BA400" : "#000000"}`,
        }}
      >
        <p style={sideStyle}>{side}</p>
      </div>
      <p>{`Player ${side === "X" ? 1 : 2} name: ${player?.firstName} ${
        player?.lastName
      }`}</p>

      {!winner && <p style={winningsStyle}>{`Winnings : ${player?.score}`}</p>}
    </div>
  );
};

export default PlayerSide;
