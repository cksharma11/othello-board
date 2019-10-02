import React, {useState} from 'react';
import Coin from '../Coin/Coin';

const createBoard = () => {
  const board = {}
  new Array(64).fill(1).forEach((e, i) => {
      board[i + 1] = {
        isPlaced: false,
        color: null
      }
  })
  return board;
}

const Game = () => {
  const colors = ["white", "black"];
  const [board, setBoard] = useState(createBoard());
  const [activePlayer, setActivePlayer] = useState(0);
  const createId = (initial, i) => initial * 8 + i + 1;

  const updateActivePlayer = () => {
    const update = 1 - activePlayer;
    setActivePlayer(update);
  }

  const placeCoin = (id, color) => {
    const clone = { ...board };
    clone[id] = { ...clone[id], isPlaced: true, color };
    setBoard(clone);
    updateActivePlayer();
  }

  const createRow = (initial) => {
    return (
      new Array(8).fill(0).map((e, i) => {
        const id = createId(initial, i);
        return (
          <div
            onClick={placeCoin.bind(null, id, colors[activePlayer])}
            id={id}
            key={id}
            className="box" 
          >
            {board[id].isPlaced && <Coin color={board[id].color}/> }
            </div>
        )
      })
    )
  }

  return (
    new Array(8).fill(0).map((e, i) => {
      return <div className="row">{createRow(i)}</div>
    })
  )
}

export default Game;