import { boxItemStyle, valueStyle } from "../gameStyles";

const GameBoxItem = ({ value, onClick, win, winner }) => {
  return (
    <div
      style={{
        ...boxItemStyle,
        cursor: !value && !winner && "pointer",
        backgroundColor: win && "#C0FFD6",
      }}
      onClick={!value ? onClick : () => {}}
    >
      <p style={valueStyle}>{value}</p>
    </div>
  );
};

export default GameBoxItem;
