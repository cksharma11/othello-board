import { isValidMove } from "../engine/moveHelper";

const coins = {
  1: { isPlaced: false, color: null },
  2: { isPlaced: false, color: null },
  3: { isPlaced: false, color: null },
  4: { isPlaced: false, color: null },
  5: { isPlaced: false, color: null },
  6: { isPlaced: false, color: null },
  7: { isPlaced: false, color: null },
  8: { isPlaced: false, color: null },
  9: { isPlaced: false, color: null },
  10: { isPlaced: false, color: null },
  11: { isPlaced: false, color: null },
  12: { isPlaced: false, color: null },
  13: { isPlaced: false, color: null },
  14: { isPlaced: false, color: null },
  15: { isPlaced: false, color: null },
  16: { isPlaced: false, color: null },
  17: { isPlaced: false, color: null },
  18: { isPlaced: false, color: null },
  19: { isPlaced: false, color: null },
  20: { isPlaced: false, color: null },
  21: { isPlaced: false, color: null },
  22: { isPlaced: false, color: null },
  23: { isPlaced: false, color: null },
  24: { isPlaced: false, color: null },
  25: { isPlaced: false, color: null },
  26: { isPlaced: false, color: null },
  27: { isPlaced: false, color: null },
  28: { isPlaced: false, color: null },
  29: { isPlaced: false, color: null },
  30: { isPlaced: false, color: null },
  31: { isPlaced: false, color: null },
  32: { isPlaced: false, color: null },
  33: { isPlaced: false, color: null },
  34: { isPlaced: false, color: null },
  35: { isPlaced: false, color: null },
  36: { isPlaced: false, color: null },
  37: { isPlaced: false, color: null },
  38: { isPlaced: false, color: null },
  39: { isPlaced: false, color: null },
  40: { isPlaced: false, color: null },
  41: { isPlaced: false, color: null },
  42: { isPlaced: false, color: null },
  43: { isPlaced: false, color: null },
  44: { isPlaced: false, color: null },
  45: { isPlaced: false, color: null },
  46: { isPlaced: false, color: null },
  47: { isPlaced: false, color: null },
  48: { isPlaced: false, color: null },
  49: { isPlaced: false, color: null },
  50: { isPlaced: false, color: null },
  51: { isPlaced: false, color: null },
  52: { isPlaced: false, color: null },
  53: { isPlaced: false, color: null },
  54: { isPlaced: false, color: null },
  55: { isPlaced: false, color: null },
  56: { isPlaced: false, color: null },
  57: { isPlaced: false, color: null },
  58: { isPlaced: false, color: null },
  59: { isPlaced: false, color: null },
  60: { isPlaced: false, color: null },
  61: { isPlaced: false, color: null },
  62: { isPlaced: false, color: null },
  63: { isPlaced: false, color: null },
  64: { isPlaced: false, color: null }
};

xdescribe("isValidMove", () => {
  it("should validate the move", () => {
    coins[28].isPlaced = true;
    coins[28].color = "white";

    coins[29].isPlaced = true;
    coins[29].color = "black";

    coins[36].isPlaced = true;
    coins[36].color = "black";

    coins[37].isPlaced = true;
    coins[37].color = "white";

    expect(isValidMove(coins, coins[40], "white")).toBeFalsy();
    expect(isValidMove(coins, coins[30], "black")).toBeTruthy();
  });
});
