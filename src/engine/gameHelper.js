const createBoard = () => {
  const board = {};
  new Array(64).fill(1).forEach((e, i) => {
    board[i + 1] = {
      isPlaced: false,
      color: null,
      position: i + 1
    };
  });
  board[28].isPlaced = true;
  board[28].color = "white";

  board[29].isPlaced = true;
  board[29].color = "black";

  board[36].isPlaced = true;
  board[36].color = "black";

  board[37].isPlaced = true;
  board[37].color = "white";

  return board;
};

const colors = ["white", "black"];

const createId = (initial, i) => initial * 8 + i + 1;

export { colors, createBoard, createId };
