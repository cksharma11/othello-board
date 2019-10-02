const rightSideCoinsValidation = (coins, position, activeColor) => {
  const diff = Math.ceil(position / 8) * 8 - position;
  const coinsToReplace = [];
  let shouldReplace = false;
  for (let i = position + 1; i <= position + diff; i++) {
    if (coins[i].isPlaced && coins[i].color !== activeColor) {
      coinsToReplace.push(i);
    }
    if (coins[i].color === activeColor) {
      shouldReplace = true;
      break;
    }
  }
  return shouldReplace ? coinsToReplace : [];
}

const leftSideCoinsValidation = (coins, position, activeColor) => {
  let diff = position - Math.floor(position / 8) * 8;
  diff = diff === 0 ? 8 : diff;
  const coinsToReplace = [];
  let shouldReplace = false;
  for (let i = position - 1; i > position - diff - 1 && i > 0; i--) {
    if (coins[i].isPlaced && coins[i].color !== activeColor) {
      coinsToReplace.push(i);
    }
    if (coins[i].color === activeColor) {
      shouldReplace = true;
      break;
    }
  }
  return shouldReplace ? coinsToReplace : [];
}

const upsideCoinsValidation = (coins, position, activeColor) => {
  let diff = Math.round(position / 8) - 1;
  if (diff === 0) return [];

  const coinsToReplace = [];
  let shouldReplace = false;
  for (let i = position - 8; i >= position - ((diff - 1) * 8); i -= 8) {
    if (coins[i].isPlaced && coins[i].color !== activeColor) {
      coinsToReplace.push(i);
    }
    if (coins[i].color === activeColor) {
      shouldReplace = true;
      break;
    }
  }
  return shouldReplace ? coinsToReplace : [];
}

const downsideCoinsValidation = (coins, position, activeColor) => {
  let diff = 8 - Math.round(position / 8) - 1;
  if (diff === 0) return [];

  const coinsToReplace = [];
  let shouldReplace = false;
  for (let i = position + 8; i <= position + ((diff) * 8); i += 8) {
    if (coins[i].isPlaced && coins[i].color !== activeColor) {
      coinsToReplace.push(i);
    }
    if (coins[i].color === activeColor) {
      shouldReplace = true;
      break;
    }
  }
  return shouldReplace ? coinsToReplace : [];
}


const leftUpCrossCoinsValidation = (coins, position, activeColor) => {
  let diff = Math.round(position / 8) - 1;
  if (diff === 0) return [];

  const coinsToReplace = [];
  let shouldReplace = false;
  for (let i = position - 9; diff > 0 && i > 0; i -= 9) {
    diff = diff - 1;
    if (coins[i].isPlaced && coins[i].color !== activeColor) {
      coinsToReplace.push(i);
    }
    if (coins[i].color === activeColor) {
      shouldReplace = true;
      break;
    }
  }
  return shouldReplace ? coinsToReplace : [];
}

const rightUpCrossCoinsValidation = (coins, position, activeColor) => {
  let diff = Math.floor(position / 8);
  if (diff === 0) return [];

  const coinsToReplace = [];
  let shouldReplace = false;
  for (let i = position - 7; diff > 0; i -= 7) {
    diff = diff -1;
    if (coins[i].isPlaced && coins[i].color !== activeColor) {
      coinsToReplace.push(i);
    }
    if (coins[i].color === activeColor) {
      shouldReplace = true;
      break;
    }
  }
  return shouldReplace ? coinsToReplace : [];
}

const leftDownCrossCoinsValidation = (coins, position, activeColor) => {
  let diff = 8 - Math.round(position / 8) - 1;
  if (diff === 0) return [];

  const coinsToReplace = [];
  let shouldReplace = false;
  console.log({diff})
  for (let i = position + 7; diff > 0; i += 7) {
    console.log(coins[i]);
    diff = diff -1;
    if (coins[i].isPlaced && coins[i].color !== activeColor) {
      coinsToReplace.push(i);
    }
    if (coins[i].color === activeColor) {
      shouldReplace = true;
      break;
    }
  }
  return shouldReplace ? coinsToReplace : [];
}

const rightDownCrossCoinsValidation = (coins, position, activeColor) => {
  let diff = 8 - Math.round(position / 8);
  if (diff === 0) return [];

  const coinsToReplace = [];
  let shouldReplace = false;
  for (let i = position + 9; diff > 0 && i <= 64; i += 9) {
    diff = diff - 1;
    if (coins[i].isPlaced && coins[i].color !== activeColor) {
      coinsToReplace.push(i);
    }
    if (coins[i].color === activeColor) {
      shouldReplace = true;
      break;
    }
  }
  return shouldReplace ? coinsToReplace : [];
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
  coinsToReplace.forEach(i => {
    update[i].color = activeColor === 'black' ? 'black' : 'white';
  })
  return update;
}

export { rulesValidator };