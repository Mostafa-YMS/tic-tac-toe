import { useState } from "react";
import {
  buttonStyle,
  errorStyle,
  firstPlayerStyle,
  formStyle,
  headerStyle,
  inputContainerStyle,
  inputDivStyle,
  inputStyle,
  labelStyle,
  mainBoxStyle,
  mainTitleStyle,
} from "./AddPlayersStyles";

const AddPlayers = ({ players, setPlayers }) => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [error, setError] = useState(false);

  const handleFirstNameChange = (e) => {
    error && setError(false);
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    error && setError(false);
    setLastName(e.target.value);
  };

  const handleContinue = (e) => {
    e.preventDefault();

    if (firstName?.trim() && lastName?.trim()) {
      if (!players?.firstPlayer) {
        localStorage.setItem(
          "players",
          JSON.stringify({
            firstPlayer: { firstName, lastName, score: 0 },
          })
        );
        setPlayers &&
          setPlayers({
            firstPlayer: { firstName, lastName, score: 0 },
          });

        setFirstName();
        setLastName();
      } else {
        localStorage.setItem(
          "players",
          JSON.stringify({
            ...players,
            secondPlayer: { firstName, lastName, score: 0 },
          })
        );

        setPlayers &&
          setPlayers({
            ...players,
            secondPlayer: { firstName, lastName, score: 0 },
          });
      }
    } else {
      setError(true);
    }
  };

  return (
    <form style={formStyle} onSubmit={handleContinue}>
      {players?.firstPlayer && (
        <p
          style={firstPlayerStyle}
        >{`Player 1 name: ${players?.firstPlayer?.firstName} ${players?.firstPlayer?.lastName}`}</p>
      )}

      <div style={mainBoxStyle}>
        <div style={headerStyle}>
          <p style={mainTitleStyle}>
            {!players?.firstPlayer ? "Add First player" : "Add Second player"}
          </p>
        </div>

        {error && (
          <div style={errorStyle}>
            <p>please enter your full name</p>
          </div>
        )}

        <div style={inputContainerStyle}>
          <div style={inputDivStyle}>
            <label style={labelStyle} htmlFor="firstName">
              First name
            </label>
            <input
              style={inputStyle}
              type="text"
              placeholder="First name"
              id="firstName"
              name="firstName"
              onChange={handleFirstNameChange}
              value={firstName || ""}
              required
            />
          </div>

          <div style={inputDivStyle}>
            <label style={labelStyle} htmlFor="lastName">
              Last name
            </label>
            <input
              style={inputStyle}
              type="text"
              placeholder="Last name"
              id="lastName"
              name="lastName"
              onChange={handleLastNameChange}
              value={lastName || ""}
              required
            />
          </div>
        </div>

        <button style={buttonStyle} type="submit">
          Continue
        </button>
      </div>
    </form>
  );
};

export default AddPlayers;
