import { useCallback, useState } from "react";
import { winnerChecker } from "../../../shared/checkWinner";
import GameBoxItem from "./GameBoxItem";
import { buttonStyle } from "../../AddPlayers/AddPlayersStyles";
import { boxContainer, btnDivStyle } from "../gameStyles";

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

const GameBox = ({ changeTurn, turn, declareWinner, winner, setPlayers }) => {
  const [values, setValues] = useState(initialValues);
  const [plays, setPlays] = useState(1);

  const handleClick = useCallback(
    (key) => {
      if (turn && changeTurn && values && plays && declareWinner && !winner) {
        setValues((prev) => ({ ...prev, [key]: { value: turn } }));
        setPlays((prev) => prev + 1);

        changeTurn();

        if (plays > 4) {
          const newWinner = winnerChecker(
            { ...values, [key]: { value: turn } },
            key
          );
          newWinner && declareWinner({ row: newWinner, player: turn });
          if (plays === 9 && !newWinner) {
            declareWinner("draw");
          }
        }
      }
    },
    [changeTurn, turn, values, plays, declareWinner, winner]
  );

  const newGame = () => {
    declareWinner();
    setValues(initialValues);
    setPlays(1);
  };

  const resetPlayers = () => {
    setPlayers();
    localStorage.removeItem("players");
  };

  return (
    <div style={boxContainer}>
      {Object.entries(values).map(([key, value]) => (
        <GameBoxItem
          key={key}
          value={value?.value}
          onClick={() => handleClick(key)}
          win={winner?.row?.includes(Number(key))}
          winner={winner}
        />
      ))}

      <div style={btnDivStyle}>
        {winner && (
          <button style={buttonStyle} onClick={newGame}>
            Start New Game
          </button>
        )}
        <button style={buttonStyle} onClick={resetPlayers}>
          Players Reset
        </button>
      </div>
    </div>
  );
};

export default GameBox;
