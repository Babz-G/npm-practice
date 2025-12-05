import "./App.css";
import Toggle from "./Components/Toggle.jsx";
// import Clock from "./Components/Clock.jsx";
import ClockComponent from "./Components/Clock.jsx";
// import "react-clock/dist/Clock.css";
import Confetti from "./Components/Confetti.jsx";
import Switch from "react-switch";
import { useState } from "react";
import IconDisplay from "./Components/Icons.jsx";

function App() {
  const [showConfetti, setShowConfetti] = useState(true);

  return (
    <>
      {showConfetti && <Confetti />}
      <div className="container">
        <h1 className="title">Babz' Project</h1>

        <div className="toggle-section">
          <Toggle />
        </div>

        <div className="toggle-section">
          <h2>Confetti Toggle:</h2>
          <label>
            <Switch
              onChange={setShowConfetti}
              checked={showConfetti}
              className="react-switch"
              onColor="#60a5fa"
              offColor="#64748b"
              onHandleColor="#1e40af"
              offHandleColor="#f1f5f9"
              handleDiameter={30}
              uncheckedIcon={false}
              checkedIcon={false}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 0px 1px 10px rgba(96, 165, 250, 0.2)"
              height={20}
              width={48}
            />
          </label>
          <p>
            Confetti is <span>{showConfetti ? "on" : "off"}</span>.
          </p>
        </div>

        <div className="toggle-section">
          <IconDisplay />
        </div>

        {/* <div className="clock-section">
          <Clock />
        </div> */}
        <div className="clock-section">
          <ClockComponent />
        </div>
      </div>
    </>
  );
}

export default App;
