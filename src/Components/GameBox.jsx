import { useCallback, useState } from "react";
import GameBoxItem from "./GameBoxItem";

const boxContainer = {
  maxWidth: "500px",
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
};

const initialValues = {
  1: {},
  2: {},
  3: {},
  4: {},
  5: {},
  6: {},
  7: {},
  8: {},
  9: {},
};

const GameBox = ({ changeTurn, turn }) => {
  const [values, setValues] = useState(initialValues);

  const handleClick = useCallback(
    (key) => {
      if (turn && changeTurn) {
        setValues((prev) => ({ ...prev, [key]: { value: turn } }));
        changeTurn();
      }
    },
    [changeTurn, turn]
  );

  return (
    <div style={boxContainer}>
      {Object.entries(values).map(([key, value]) => (
        <GameBoxItem
          key={key}
          value={value?.value}
          onClick={() => handleClick(key)}
        />
      ))}
    </div>
  );
};

export default GameBox;
