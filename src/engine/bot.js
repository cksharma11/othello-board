import { getPossibleMoves } from "./moveHelper";

const makeBotMove = coins => {
  const possibleMoves = getPossibleMoves(coins, "black");
  return Math.floor(Math.random() * possibleMoves.length);
};

export { makeBotMove };
