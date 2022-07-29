import Players from "./Pages/Players";
import { useState, useCallback } from "react";
import Game from "./Pages/Game";

function App() {
  const [players, setPlayers] = useState();
  const changePlayers = useCallback((data) => setPlayers(data), []);

  return (
    <div>
      {players?.firstPlayer && players?.secondPlayer ? (
        <Game players={players} setPlayers={changePlayers} />
      ) : (
        <Players players={players} setPlayers={changePlayers} />
      )}
    </div>
  );
}

export default App;
