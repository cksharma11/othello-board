const MAX_ROW_COUNT = 8;
const MAX_CELL_COUNT = 64;
const RIGHT_SIDE_COIN_DIFFERENCE = 7;
const LEFT_COIN_DIFFERENCE = 9;

const coinNotPlaced = coin => !coin.isPlaced;

const isNextCoinPlacedAndDoesNotHaveSameColor = (coin, inPlayColor) => {
  return coin.isPlaced && coin.color !== inPlayColor;
};

const isActiveColorCoin = (coin, inPlayColor) => {
  return coin.color === inPlayColor;
};

const validateCoins = ({ coins, start, inPlayColor, condition, next }) => {
  const replaceableCoins = [];
  for (let index = start; condition(index); index = next(index)) {
    if (coinNotPlaced(coins[index])) return [];
    if (isNextCoinPlacedAndDoesNotHaveSameColor(coins[index], inPlayColor)) {
      replaceableCoins.push(index);
    }
    if (isActiveColorCoin(coins[index], inPlayColor)) {
      return replaceableCoins;
    }
  }
  return [];
};

const rightSideCoinsValidation = (coins, position, inPlayColor) => {
  const endDistance =
    Math.ceil(position / MAX_ROW_COUNT) * MAX_ROW_COUNT - position;

  const start = position + 1;
  const condition = i => i <= position + endDistance;
  const next = i => i + 1;

  return validateCoins({ coins, start, condition, next, inPlayColor });
};

const getDistanceForLeftSideCoinsValidation = position => {
  let endDistance =
    position - Math.floor(position / MAX_ROW_COUNT) * MAX_ROW_COUNT;
  endDistance = endDistance === 0 ? MAX_ROW_COUNT : endDistance;
  return endDistance;
};

const leftSideCoinsValidation = (coins, position, inPlayColor) => {
  const endDistance = getDistanceForLeftSideCoinsValidation(position);
  const loopEndCondition = position - endDistance - 1;

  const start = position - 1;
  const condition = i => i > loopEndCondition && i > 0;
  const next = i => i - 1;

  return validateCoins({ coins, start, condition, next, inPlayColor });
};

const upsideCoinsValidation = (coins, position, inPlayColor) => {
  let endDistance = Math.round(position / MAX_ROW_COUNT);
  if (endDistance === 0) return [];

  const start = position - MAX_ROW_COUNT;
  const condition = i => i > 0;
  const next = i => i - MAX_ROW_COUNT;

  return validateCoins({ coins, start, condition, next, inPlayColor });
};

const downsideCoinsValidation = (coins, position, inPlayColor) => {
  let endDistance = MAX_ROW_COUNT - Math.round(position / MAX_ROW_COUNT);
  if (endDistance === 0) return [];

  const start = position + MAX_ROW_COUNT;
  const condition = i => i <= MAX_CELL_COUNT;
  const next = i => i + MAX_ROW_COUNT;

  return validateCoins({ coins, start, condition, next, inPlayColor });
};

const leftUpCrossCoinsValidation = (coins, position, inPlayColor) => {
  const endDistance = Math.round(position / MAX_ROW_COUNT) - 1;
  if (endDistance === 0) return [];

  const start = position - LEFT_COIN_DIFFERENCE;
  const condition = i => i > 0;
  const next = i => i - LEFT_COIN_DIFFERENCE;

  return validateCoins({ coins, start, condition, next, inPlayColor });
};

const rightUpCrossCoinsValidation = (coins, position, inPlayColor) => {
  const endDistance = Math.floor(position / MAX_ROW_COUNT);
  if (endDistance === 0) return [];

  const start = position - RIGHT_SIDE_COIN_DIFFERENCE;
  const condition = i => i > 0;
  const next = i => i - RIGHT_SIDE_COIN_DIFFERENCE;

  return validateCoins({ coins, start, condition, next, inPlayColor });
};

const leftDownCrossCoinsValidation = (coins, position, inPlayColor) => {
  const endDistance = MAX_ROW_COUNT - Math.round(position / MAX_ROW_COUNT);
  if (endDistance === 0) return [];

  const start = position + RIGHT_SIDE_COIN_DIFFERENCE;
  const condition = i => i <= MAX_CELL_COUNT;
  const next = i => (i += RIGHT_SIDE_COIN_DIFFERENCE);

  return validateCoins({ coins, start, condition, next, inPlayColor });
};

const rightDownCrossCoinsValidation = (coins, position, inPlayColor) => {
  const endDistance = MAX_ROW_COUNT - Math.round(position / MAX_ROW_COUNT);
  if (endDistance === 0) return [];

  const start = position + LEFT_COIN_DIFFERENCE;
  const condition = i => i <= MAX_CELL_COUNT;
  const next = i => (i += LEFT_COIN_DIFFERENCE);

  return validateCoins({ coins, start, condition, next, inPlayColor });
};

const getReplaceableCoins = (coins, inPlayCoin, color) => {
  const inPlayColor = color || inPlayCoin.color;
  const position = inPlayCoin.position;
  const replaceableCoins = [
    ...rightSideCoinsValidation(coins, position, inPlayColor),
    ...leftSideCoinsValidation(coins, position, inPlayColor),
    ...upsideCoinsValidation(coins, position, inPlayColor),
    ...downsideCoinsValidation(coins, position, inPlayColor),
    ...leftUpCrossCoinsValidation(coins, position, inPlayColor),
    ...rightUpCrossCoinsValidation(coins, position, inPlayColor),
    ...leftDownCrossCoinsValidation(coins, position, inPlayColor),
    ...rightDownCrossCoinsValidation(coins, position, inPlayColor)
  ];
  return replaceableCoins;
};

const getUpdatedBoard = (coins, inPlayCoin) => {
  const replaceableCoins = getReplaceableCoins(coins, inPlayCoin);

  const inPlayColor = inPlayCoin.color;
  const update = { ...coins };
  replaceableCoins.forEach(index => {
    update[index].color = inPlayColor === "black" ? "black" : "white";
  });
  return update;
};

export {
  getUpdatedBoard,
  rightSideCoinsValidation,
  leftSideCoinsValidation,
  upsideCoinsValidation,
  downsideCoinsValidation,
  leftUpCrossCoinsValidation,
  rightUpCrossCoinsValidation,
  leftDownCrossCoinsValidation,
  rightDownCrossCoinsValidation,
  getReplaceableCoins
};
