import React, { useState, useEffect } from "react";
import Coin from "../Coin/Coin";
import { getUpdatedBoard } from "../../engine/rules";
import { createBoard, createId, colors } from "../../engine/gameHelper";
import { getPossibleMoves, isValidMove } from "../../engine/moveHelper";
import ScoreBoard from "../ScoreBoard/ScoreBoard";
import { getScore } from "../../engine/score";
import Header from "../Header/Header";
import RestartButton from "../RestartButton/RestartButton";

const initialScores = { black: 2, white: 2 };
const initialActivePlayer = 0;
const initialPossibleMoves = [];

const Game = () => {
  const [board, setBoard] = useState(createBoard());
  const [activePlayer, setActivePlayer] = useState(initialActivePlayer);
  const [possibleMoves, setPossibleMoves] = useState(initialPossibleMoves);
  const [score, setScore] = useState(initialScores);

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

  const handleRestart = () => {
    setBoard(createBoard());
    setScore(initialScores);
    setActivePlayer(initialActivePlayer);
    setPossibleMoves(initialPossibleMoves);
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
      <Header />
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
      <RestartButton onRestart={handleRestart} />
    </div>
  );
};

export default Game;
