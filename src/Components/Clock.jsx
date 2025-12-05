// import { useEffect, useState } from "react";
// import Clock from "react-clock";
// import "react-clock/dist/Clock.css";

// function ClockComponent() {
//   const [value, setValue] = useState(new Date());

//   useEffect(() => {
//     const interval = setInterval(() => setValue(new Date()), 1000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   return (
//     <div>
//       <p>Current time:</p>
//       <Clock value={value} />
//     </div>
//   );
// }

// export default ClockComponent;
import { useEffect, useState } from "react";

function ClockComponent() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");

  return (
    <div>
      <h2>Current time:</h2>
      <div className="flip-clock">
        <div className="flip-unit">
          <div className="flip-number">{hours}</div>
          <div className="flip-label">HOURS</div>
        </div>
        <div className="flip-divider">:</div>
        <div className="flip-unit">
          <div className="flip-number">{minutes}</div>
          <div className="flip-label">MINUTES</div>
        </div>
        <div className="flip-divider">:</div>
        <div className="flip-unit">
          <div className="flip-number">{seconds}</div>
          <div className="flip-label">SECONDS</div>
        </div>
      </div>
    </div>
  );
}

export default ClockComponent;
