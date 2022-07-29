import {
  buttonStyle,
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
  return (
    <form style={formStyle}>
      <p style={{ fontWeight: "700", fontSize: "48px" }}>
        Welcome to tic tac toe
      </p>

      <div style={mainBoxStyle}>
        <div style={headerStyle}>
          <p style={mainTitleStyle}>Add First player</p>
        </div>

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
            />
          </div>
        </div>

        <button style={buttonStyle}>Continue</button>
      </div>
    </form>
  );
};

export default Players;
