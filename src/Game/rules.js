const MAX_ROW_COUNT = 8;
const MAX_CELL_COUNT = 64;

const coinNotPlaced = (coin) => !coin.isPlaced;

const isNextCoinPlacedAndDoesNotHaveSameColor = (coin, activeColor) => {
  return coin.isPlaced && coin.color !== activeColor;
}

const isActiveColorCoin = (coin, activeColor) => {
  return coin.color === activeColor;
}

const rightSideCoinsValidation = (coins, position, activeColor) => {
  const distance = Math.ceil(position / MAX_ROW_COUNT) * MAX_ROW_COUNT - position;
  const coinsToReplace = [];
  for (let index = position + 1; index <= position + distance; index++) {
    if(coinNotPlaced(coins[index])) return [];
    if (isNextCoinPlacedAndDoesNotHaveSameColor(coins[index], activeColor)) {
      coinsToReplace.push(index);
    }
    if (isActiveColorCoin(coins[index], activeColor)) {
      return coinsToReplace;
    }
  }
  return [];
}

const getDistanceForLeftSideCoinsValidation = (position) => {
  let distance = position - Math.floor(position / MAX_ROW_COUNT) * MAX_ROW_COUNT;
  distance = distance === 0 ? MAX_ROW_COUNT : distance;
  return distance;
}

const leftSideCoinsValidation = (coins, position, activeColor) => {
  const distance = getDistanceForLeftSideCoinsValidation(position);
  const coinsToReplace = [];
  for (let index = position - 1; index > position - distance - 1 && index > 0; index--) {
    if(coinNotPlaced(coins[index])) return [];
    if (isNextCoinPlacedAndDoesNotHaveSameColor(coins[index], activeColor)) {
      coinsToReplace.push(index);
    }
    if (isActiveColorCoin(coins[index], activeColor)) {
      return coinsToReplace;
    }
  }
  return [];
}

const upsideCoinsValidation = (coins, position, activeColor) => {
  let distance = Math.round(position / MAX_ROW_COUNT);
  if (distance === 0) return [];

  const coinsToReplace = [];
  for (let index = position - MAX_ROW_COUNT; index > 0; index -= MAX_ROW_COUNT) {
    if(coinNotPlaced(coins[index])) return [];
    if (isNextCoinPlacedAndDoesNotHaveSameColor(coins[index], activeColor)) {
      coinsToReplace.push(index);
    }
    if (isActiveColorCoin(coins[index], activeColor)) {
      return coinsToReplace;
    }
  }
  return [];
}

const downsideCoinsValidation = (coins, position, activeColor) => {
  let distance = MAX_ROW_COUNT - Math.round(position / MAX_ROW_COUNT);
  if (distance === 0) return [];

  const coinsToReplace = [];
  for (let index = position + MAX_ROW_COUNT; index <= MAX_CELL_COUNT; index += MAX_ROW_COUNT) {
    if(coinNotPlaced(coins[index])) return [];
    if (isNextCoinPlacedAndDoesNotHaveSameColor(coins[index], activeColor)) {
      coinsToReplace.push(index);
    }
    if (isActiveColorCoin(coins[index], activeColor)) {
      return coinsToReplace;
    }
  }
  return [];
}


const leftUpCrossCoinsValidation = (coins, position, activeColor) => {
  const distance = Math.round(position / MAX_ROW_COUNT) - 1;
  if (distance === 0) return [];

  const coinsToReplace = [];
  for (let index = position - 9; index > 0; index -= 9) {
    if(coinNotPlaced(coins[index])) return [];
    if (isNextCoinPlacedAndDoesNotHaveSameColor(coins[index], activeColor)) {
      coinsToReplace.push(index);
    }
    if (isActiveColorCoin(coins[index], activeColor)) {
      return coinsToReplace;
    }
  }
  return [];
}

const rightUpCrossCoinsValidation = (coins, position, activeColor) => {
  const distance = Math.floor(position / MAX_ROW_COUNT);
  if (distance === 0) return [];

  const coinsToReplace = [];
  for (let index = position - 7; index > 0; index -= 7) {
    if(coinNotPlaced(coins[index])) return [];
    if (isNextCoinPlacedAndDoesNotHaveSameColor(coins[index], activeColor)) {
      coinsToReplace.push(index);
    }
    if (isActiveColorCoin(coins[index], activeColor)) {
      return coinsToReplace;
    }
  }
  return [];
}

const leftDownCrossCoinsValidation = (coins, position, activeColor) => {
  const distance = MAX_ROW_COUNT - Math.round(position / MAX_ROW_COUNT);
  if (distance === 0) return [];

  const coinsToReplace = [];
  for (let index = position + 7; index <= MAX_CELL_COUNT ; index += 7) {
    if(coinNotPlaced(coins[index])) return [];
    if (isNextCoinPlacedAndDoesNotHaveSameColor(coins[index], activeColor)) {
      coinsToReplace.push(index);
    }
    if (isActiveColorCoin(coins[index], activeColor)) {
      return coinsToReplace;
    }
  }
  return [];
}

const rightDownCrossCoinsValidation = (coins, position, activeColor) => {
  const distance = MAX_ROW_COUNT - Math.round(position / MAX_ROW_COUNT);
  if (distance === 0) return [];

  const coinsToReplace = [];
  for (let index = position + 9; index <= MAX_CELL_COUNT; index += 9) {
    if(coinNotPlaced(coins[index])) return [];
    if (isNextCoinPlacedAndDoesNotHaveSameColor(coins[index], activeColor)) {
      coinsToReplace.push(index);
    }
    if (isActiveColorCoin(coins[index], activeColor)) {
      return coinsToReplace;
    }
  }
  return [];
}

const rulesValidator = (coins, currentlyPlacedCoin) => {
  const activeColor = currentlyPlacedCoin.color;
  const position = currentlyPlacedCoin.position;

  const coinsToReplace = [
    ...rightSideCoinsValidation(coins, position, activeColor),
    ...leftSideCoinsValidation(coins, position, activeColor),
    ...upsideCoinsValidation(coins, position, activeColor),
    ...downsideCoinsValidation(coins, position, activeColor),
    ...leftUpCrossCoinsValidation(coins, position, activeColor),
    ...rightUpCrossCoinsValidation(coins, position, activeColor),
    ...leftDownCrossCoinsValidation(coins, position, activeColor),
    ...rightDownCrossCoinsValidation(coins, position, activeColor),
  ];

  const update = { ...coins };
  coinsToReplace.forEach(index => {
    update[index].color = activeColor === 'black' ? 'black' : 'white';
  })
  return update;
}

export { 
  rulesValidator, 
  rightSideCoinsValidation, 
  leftSideCoinsValidation, 
  upsideCoinsValidation,
  downsideCoinsValidation,
  leftUpCrossCoinsValidation,
  rightUpCrossCoinsValidation,
  leftDownCrossCoinsValidation,
  rightDownCrossCoinsValidation
};