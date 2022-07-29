const mainDivStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};
const sideBoxStyle = {
  width: "75px",
  height: "75px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "6px",
};

const winningsStyle = { color: "#000" };

const sideStyle = { fontSize: "48px", fontWeight: "500" };

const PlayerSide = ({ player, turn, side }) => {
  return (
    <div style={{ ...mainDivStyle, color: turn && "#2BA400" }}>
      <div
        style={{
          ...sideBoxStyle,
          border: `3px solid ${turn ? "#2BA400" : "#000000"}`,
        }}
      >
        <p style={sideStyle}>{side}</p>
      </div>
      <p>{`Player ${side === "X" ? 1 : 2} name: ${player?.firstName} ${
        player?.lastName
      }`}</p>

      <p style={winningsStyle}>{`Winnings : ${player?.score}`}</p>
    </div>
  );
};

export default PlayerSide;
