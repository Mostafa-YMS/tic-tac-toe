import { useState } from "react";
import {
  buttonStyle,
  errorStyle,
  formStyle,
  headerStyle,
  inputContainerStyle,
  inputDivStyle,
  inputStyle,
  labelStyle,
  mainBoxStyle,
  mainTitleStyle,
} from "./PlayersStyles";

const Players = () => {
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
    } else {
      setError(true);
    }
  };

  return (
    <form style={formStyle} onSubmit={handleContinue}>
      <p style={{ fontWeight: "700", fontSize: "48px" }}>
        Welcome to tic tac toe
      </p>

      <div style={mainBoxStyle}>
        <div style={headerStyle}>
          <p style={mainTitleStyle}>Add First player</p>
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

export default Players;
