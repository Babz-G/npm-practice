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
      <h2 className="clock-heading">Current time:</h2>
      <div className="flip-clock">
        <div className="flip-unit">
          <span className="flip-number">{hours}</span>
          <span className="flip-label">HOURS</span>
        </div>
        <span className="flip-divider">:</span>
        <div className="flip-unit">
          <span className="flip-number">{minutes}</span>
          <span className="flip-label">MINUTES</span>
        </div>
        <span className="flip-divider">:</span>
        <div className="flip-unit">
          <span className="flip-number">{seconds}</span>
          <span className="flip-label">SECONDS</span>
        </div>
      </div>
    </div>
  );
}

export default ClockComponent;
// import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
// import "@leenguyen/react-flip-clock-countdown/dist/index.css";

// function ClockComponent() {
//   // Get timestamp for 24 hours from now to create a continuous clock effect
//   const tomorrow = new Date();
//   tomorrow.setDate(tomorrow.getDate() + 1);

//   return (
//     <div>
//       <h2 className="clock-heading">Current time:</h2>
//       <FlipClockCountdown
//         to={tomorrow.getTime()}
//         labels={["HOURS", "MINUTES", "SECONDS"]}
//         labelStyle={{
//           fontSize: 10,
//           fontWeight: 500,
//           textTransform: "uppercase",
//           color: "#60a5fa",
//         }}
//         digitBlockStyle={{
//           width: 40,
//           height: 60,
//           fontSize: 30,
//           background: "#1e40af",
//           color: "#fff",
//         }}
//         dividerStyle={{ color: "#60a5fa", height: 1 }}
//         duration={0.5}
//       />
//     </div>
//   );
// }

// export default ClockComponent;
