const MAX_ROW_COUNT = 8;
const MAX_CELL_COUNT = 64;
const RIGHT_SIDE_COIN_DIFFERENCE = 7;
const LEFT_COIN_DIFFERENCE = 9;

const coinNotPlaced = (coin) => !coin.isPlaced;

const isNextCoinPlacedAndDoesNotHaveSameColor = (coin, inPlayColor) => {
  return coin.isPlaced && coin.color !== inPlayColor;
}

const isActiveColorCoin = (coin, inPlayColor) => {
  return coin.color === inPlayColor;
}

const rightSideCoinsValidation = (coins, position, inPlayColor) => {
  const endDistance = Math.ceil(position / MAX_ROW_COUNT) * MAX_ROW_COUNT - position;
  const replaceableCoins = [];
  for (let index = position + 1; index <= position + endDistance; index++) {
    if(coinNotPlaced(coins[index])) return [];
    if (isNextCoinPlacedAndDoesNotHaveSameColor(coins[index], inPlayColor)) {
      replaceableCoins.push(index);
    }
    if (isActiveColorCoin(coins[index], inPlayColor)) {
      return replaceableCoins;
    }
  }
  return [];
}

const getDistanceForLeftSideCoinsValidation = (position) => {
  let endDistance = position - Math.floor(position / MAX_ROW_COUNT) * MAX_ROW_COUNT;
  endDistance = endDistance === 0 ? MAX_ROW_COUNT : endDistance;
  return endDistance;
}

const leftSideCoinsValidation = (coins, position, inPlayColor) => {
  const endDistance = getDistanceForLeftSideCoinsValidation(position);
  const replaceableCoins = [];
  const loopEndCondition = position - endDistance - 1;
  for (let index = position - 1; index > loopEndCondition && index > 0; index--) {
    if(coinNotPlaced(coins[index])) return [];
    if (isNextCoinPlacedAndDoesNotHaveSameColor(coins[index], inPlayColor)) {
      replaceableCoins.push(index);
    }
    if (isActiveColorCoin(coins[index], inPlayColor)) {
      return replaceableCoins;
    }
  }
  return [];
}

const upsideCoinsValidation = (coins, position, inPlayColor) => {
  let endDistance = Math.round(position / MAX_ROW_COUNT);
  if (endDistance === 0) return [];

  const replaceableCoins = [];
  for (let index = position - MAX_ROW_COUNT; index > 0; index -= MAX_ROW_COUNT) {
    if(coinNotPlaced(coins[index])) return [];
    if (isNextCoinPlacedAndDoesNotHaveSameColor(coins[index], inPlayColor)) {
      replaceableCoins.push(index);
    }
    if (isActiveColorCoin(coins[index], inPlayColor)) {
      return replaceableCoins;
    }
  }
  return [];
}

const downsideCoinsValidation = (coins, position, inPlayColor) => {
  let endDistance = MAX_ROW_COUNT - Math.round(position / MAX_ROW_COUNT);
  if (endDistance === 0) return [];

  const replaceableCoins = [];
  for (let index = position + MAX_ROW_COUNT; index <= MAX_CELL_COUNT; index += MAX_ROW_COUNT) {
    if(coinNotPlaced(coins[index])) return [];
    if (isNextCoinPlacedAndDoesNotHaveSameColor(coins[index], inPlayColor)) {
      replaceableCoins.push(index);
    }
    if (isActiveColorCoin(coins[index], inPlayColor)) {
      return replaceableCoins;
    }
  }
  return [];
}


const leftUpCrossCoinsValidation = (coins, position, inPlayColor) => {
  const endDistance = Math.round(position / MAX_ROW_COUNT) - 1;
  if (endDistance === 0) return [];

  const replaceableCoins = [];
  for (let index = position - LEFT_COIN_DIFFERENCE; index > 0; index -= LEFT_COIN_DIFFERENCE) {
    if(coinNotPlaced(coins[index])) return [];
    if (isNextCoinPlacedAndDoesNotHaveSameColor(coins[index], inPlayColor)) {
      replaceableCoins.push(index);
    }
    if (isActiveColorCoin(coins[index], inPlayColor)) {
      return replaceableCoins;
    }
  }
  return [];
}

const rightUpCrossCoinsValidation = (coins, position, inPlayColor) => {
  const endDistance = Math.floor(position / MAX_ROW_COUNT);
  if (endDistance === 0) return [];

  const replaceableCoins = [];
  for (let index = position - RIGHT_SIDE_COIN_DIFFERENCE; index > 0; index -= RIGHT_SIDE_COIN_DIFFERENCE) {
    if(coinNotPlaced(coins[index])) return [];
    if (isNextCoinPlacedAndDoesNotHaveSameColor(coins[index], inPlayColor)) {
      replaceableCoins.push(index);
    }
    if (isActiveColorCoin(coins[index], inPlayColor)) {
      return replaceableCoins;
    }
  }
  return [];
}

const leftDownCrossCoinsValidation = (coins, position, inPlayColor) => {
  const endDistance = MAX_ROW_COUNT - Math.round(position / MAX_ROW_COUNT);
  if (endDistance === 0) return [];

  const replaceableCoins = [];
  for (let index = position + RIGHT_SIDE_COIN_DIFFERENCE; index <= MAX_CELL_COUNT ; index += RIGHT_SIDE_COIN_DIFFERENCE) {
    if(coinNotPlaced(coins[index])) return [];
    if (isNextCoinPlacedAndDoesNotHaveSameColor(coins[index], inPlayColor)) {
      replaceableCoins.push(index);
    }
    if (isActiveColorCoin(coins[index], inPlayColor)) {
      return replaceableCoins;
    }
  }
  return [];
}

const rightDownCrossCoinsValidation = (coins, position, inPlayColor) => {
  const endDistance = MAX_ROW_COUNT - Math.round(position / MAX_ROW_COUNT);
  if (endDistance === 0) return [];

  const replaceableCoins = [];
  for (let index = position + LEFT_COIN_DIFFERENCE; index <= MAX_CELL_COUNT; index += LEFT_COIN_DIFFERENCE) {
    if(coinNotPlaced(coins[index])) return [];
    if (isNextCoinPlacedAndDoesNotHaveSameColor(coins[index], inPlayColor)) {
      replaceableCoins.push(index);
    }
    if (isActiveColorCoin(coins[index], inPlayColor)) {
      return replaceableCoins;
    }
  }
  return [];
}

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
    ...rightDownCrossCoinsValidation(coins, position, inPlayColor),
  ];
  return replaceableCoins;
}

const getUpdatedBoard = (coins, inPlayCoin) => {
  const replaceableCoins = getReplaceableCoins(coins, inPlayCoin);

  const inPlayColor = inPlayCoin.color;
  const update = { ...coins };
  replaceableCoins.forEach(index => {
    update[index].color = inPlayColor === 'black' ? 'black' : 'white';
  })
  return update;
}

const isValidMove = (coins, inPlayCoin, color) => {
  if (inPlayCoin.isPlaced) return false;
  const replaceableCoins = getReplaceableCoins(coins, inPlayCoin, color);
  return replaceableCoins.length > 0;
}

const getPossibleMoves = (coins, color) => {
  const possibleMoves = [];
  Object.keys(coins).forEach(e => {
    if (getReplaceableCoins(coins, coins[e], color).length && !coins[e].isPlaced) {
      possibleMoves.push(+e);
    }
  })
  return possibleMoves;
}

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
  isValidMove,
  getPossibleMoves
};