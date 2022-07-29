const boxItemStyle = {
  width: "31%",
  maxWidth: "150px",
  height: "150px",
  border: "3px solid #000000",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
const valueStyle = { fontSize: "65px" };

const GameBoxItem = ({ value, onClick, win }) => {
  return (
    <div
      style={{
        ...boxItemStyle,
        cursor: !value && "pointer",
        backgroundColor: win && "#C0FFD6",
      }}
      onClick={!value ? onClick : () => {}}
    >
      <p style={valueStyle}>{value}</p>
    </div>
  );
};

export default GameBoxItem;
