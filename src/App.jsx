import AddPlayers from "./Pages/AddPlayers";
import { useState, useCallback, useEffect } from "react";
import Game from "./Pages/Game";

export const titleStyle = {
  fontWeight: "700",
  fontSize: "48px",
  textAlign: "center",
  marginBottom: "60px",
};
const loadingDivStyle = {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "62px",
};

function App() {
  const [players, setPlayers] = useState();
  const [loading, setLoading] = useState(true);
  const changePlayers = useCallback((data) => setPlayers(data), []);

  const getPlayers = useCallback(() => {
    const data = JSON.parse(localStorage.getItem("players"));
    setPlayers(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    getPlayers && getPlayers();
  }, [getPlayers]);

  return (
    <>
      <p style={titleStyle}>Welcome to tic tac toe</p>
      {!loading ? (
        <div>
          {players?.firstPlayer && players?.secondPlayer ? (
            <Game players={players} setPlayers={changePlayers} />
          ) : (
            <AddPlayers players={players} setPlayers={changePlayers} />
          )}
        </div>
      ) : (
        <div style={loadingDivStyle}>
          <p>Loading...</p>
        </div>
      )}
    </>
  );
}

export default App;
