import Switch from "react-switch";
import { useState } from "react";

const Toggle = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
  };

  return (
    <div className="example">
      <h2>OG Toggle:</h2>
      <label>
        <Switch
          onChange={handleChange}
          checked={checked}
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
        The switch is <span>{checked ? "on" : "off"}</span>.
      </p>
    </div>
  );
};

export default Toggle;
