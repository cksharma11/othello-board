const rightCheck = (coins, position, activeColor) => {
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

const leftCheck = (coins, position, activeColor) => {
  let diff = position - Math.floor(position / 8) * 8;
  diff = diff === 0 ? 8 : diff;
  const coinsToReplace = [];
  let shouldReplace = false;
  for (let i = position - 1; i > position - diff -1; i--) {
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

const upCheck = (coins, position, activeColor) => {
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

const leftDiagonalUpCheck = (coins, position, activeColor) => {
  let diff = Math.round(position / 8) - 1;
  if (diff === 0) return [];

  const coinsToReplace = [];
  let shouldReplace = false;
  for (let i = position - 9; diff > 0; i -= 9) {
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

const rightDiagonalUpCheck = (coins, position, activeColor) => {
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

const downCheck = (coins, position, activeColor) => {
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

const rules = (coins, currentlyPlacedCoin) => {
  const activeColor = currentlyPlacedCoin.color;
  const position = currentlyPlacedCoin.position;

  const coinsToReplace = [
    ...rightCheck(coins, position, activeColor),
    ...leftCheck(coins, position, activeColor),
    ...upCheck(coins, position, activeColor),
    ...downCheck(coins, position, activeColor),
    ...leftDiagonalUpCheck(coins, position, activeColor),
    ...rightDiagonalUpCheck(coins, position, activeColor),
  ];

  const update = { ...coins };
  coinsToReplace.forEach(i => {
    update[i].color = activeColor === 'black' ? 'black' : 'white';
  })
  return update;
}

export { rules };