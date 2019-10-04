import { getReplaceableCoins } from "./rules";

const isValidMove = (coins, inPlayCoin, color) => {
  if (inPlayCoin.isPlaced) return false;
  const replaceableCoins = getReplaceableCoins(coins, inPlayCoin, color);
  return replaceableCoins.length > 0;
};

const isEmptyAndPossibleMove = (coins, coin, color) => {
  return getReplaceableCoins(coins, coin, color).length && !coin.isPlaced;
};

const getPossibleMoves = (coins, color) => {
  const possibleMoves = [];
  Object.keys(coins).forEach(e => {
    if (isEmptyAndPossibleMove(coins, coins[e], color)) {
      possibleMoves.push(+e);
    }
  });
  return possibleMoves;
};

export { isValidMove, getPossibleMoves };
