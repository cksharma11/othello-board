import React, { useState, useEffect } from "react";
import Coin from "../Coin/Coin";
import { getUpdatedBoard } from "../../engine/rules";
import { createBoard, createId, colors } from "../../engine/gameHelper";
import { getPossibleMoves, isValidMove } from "../../engine/moveHelper";
import ScoreBoard from "../ScoreBoard/ScoreBoard";
import { getScore } from "../../engine/score";

const Game = () => {
  const [board, setBoard] = useState(createBoard());
  const [activePlayer, setActivePlayer] = useState(0);
  const [possibleMoves, setPossibleMoves] = useState([]);
  const [score, setScore] = useState({ black: 2, white: 2 });

  useEffect(() => {
    setPossibleMoves(getPossibleMoves(board, colors[activePlayer]));
    setScore(getScore(board));
  }, [board, activePlayer]);

  const updateActivePlayer = () => {
    const update = 1 - activePlayer;
    setActivePlayer(update);
  };

  const placeCoin = (id, color) => {
    const update = { ...board };
    if (!isValidMove(update, update[id], color)) return;

    update[id] = { ...update[id], isPlaced: true, color };
    setBoard(update);
    getUpdatedBoard(update, update[id]);
    updateActivePlayer();
  };

  const createRow = initial => {
    return new Array(8).fill(0).map((e, i) => {
      const id = createId(initial, i);
      return (
        <div
          onClick={placeCoin.bind(null, id, colors[activePlayer])}
          id={id}
          key={id}
          className={`box `}
        >
          {possibleMoves.includes(id) && <Coin color="empty" />}
          {board[id].isPlaced && <Coin color={board[id].color} />}
        </div>
      );
    });
  };

  return (
    <div>
      <ScoreBoard
        black={score.black}
        white={score.white}
        currentColor={colors[activePlayer]}
      />
      <div className="board">
        {new Array(8).fill(0).map((e, i) => {
          return <div className="row">{createRow(i)}</div>;
        })}
      </div>
    </div>
  );
};

export default Game;
