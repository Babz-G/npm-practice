import { FaHeart, FaStar, FaSmile, FaRocket, FaCrown } from "react-icons/fa";

const IconDisplay = () => {
  return (
    <div>
      <h2 className="icon-heading">Cool Icons</h2>
      <div className="icon-container">
        <FaHeart className="icon" />
        <FaStar className="icon" />
        <FaSmile className="icon" />
        <FaRocket className="icon" />
        <FaCrown className="icon" />
      </div>
    </div>
  );
};

export default IconDisplay;
