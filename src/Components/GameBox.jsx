import { useState } from "react";
import GameBoxItem from "./GameBoxItem";

const boxContainer = {
  maxWidth: "500px",
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
};

const GameBox = ({ changeTurn }) => {
  const [values, setValues] = useState({
    1: {},
    2: {},
    3: {},
    4: {},
    5: {},
    6: {},
    7: {},
    8: {},
    9: {},
  });

  return (
    <div style={boxContainer}>
      {Object.entries(values).map(([key, value]) => (
        <GameBoxItem value={value?.value} onClick={() => console.log(key)} />
      ))}
    </div>
  );
};

export default GameBox;
