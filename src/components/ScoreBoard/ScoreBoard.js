import React from "react";
import Coin from "../Coin/Coin";

const ScoreBoard = ({ black, white, currentColor }) => {
  return (
    <div className="score-board">
      <div className="score-container">
        <Coin color="black" />
        <span className="score">{black}</span>
      </div>
      <Coin color={currentColor} />
      <div className="score-container">
        <Coin color="white" />
        <span className="score">{white}</span>
      </div>
    </div>
  );
};

export default ScoreBoard;
