import React from "react";

const RestartButton = ({ onRestart }) => {
  return (
    <div className="restart-button-container">
      <button className="restart-button" onClick={onRestart}>
        Restart
      </button>
    </div>
  );
};

export default RestartButton;
