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
