const getScore = coins => {
  const score = { white: 0, black: 0 };
  Object.keys(coins).forEach(coin => {
    if (coins[coin].color === "white") score.white++;
    if (coins[coin].color === "black") score.black++;
  });
  return score;
};

export { getScore };
