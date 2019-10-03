import {
  rightSideCoinsValidation,
  leftSideCoinsValidation,
  upsideCoinsValidation
} from "../Game/rules";

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
}

describe('rightSideCoinsValidation', () => {
  it('should handle starting edge case', () => {
    const data = { ...coins };

    data[2].isPlaced = true;
    data[2].color = 'black';
    data[3].isPlaced = true;
    data[3].color = 'black';

    data[4].isPlaced = true;
    data[4].color = 'white';

    const actual = rightSideCoinsValidation(data, 1, 'white');
    expect(actual).toEqual([2, 3]);
  })

  it('should handle last row corner case', () => {
    const data = { ...coins };

    data[58].isPlaced = true;
    data[58].color = 'black';
    data[59].isPlaced = true;
    data[59].color = 'black';

    data[60].isPlaced = true;
    data[60].color = 'white';

    const actual = rightSideCoinsValidation(data, 57, 'white');
    expect(actual).toEqual([58, 59]);
  })

  it('should handle right side corner case', () => {
    const data = { ...coins };

    data[6].isPlaced = true;
    data[6].color = 'black';
    data[7].isPlaced = true;
    data[7].color = 'black';

    data[8].isPlaced = true;
    data[8].color = 'white';

    const actual = rightSideCoinsValidation(data, 5, 'white');
    expect(actual).toEqual([6, 7]);
  })

  it('should handle middle coins', () => {
    const data = { ...coins };

    data[4].isPlaced = true;
    data[4].color = 'white';
    data[5].isPlaced = true;
    data[5].color = 'black';

    const actual = rightSideCoinsValidation(data, 3, 'black');
    expect(actual).toEqual([4]);
  })
})

describe('leftSideCoinsValidation', () => {
  it('should handle starting edge case', () => {
    const data = { ...coins };

    data[1].isPlaced = true;
    data[1].color = 'black';

    data[2].isPlaced = true;
    data[2].color = 'white';
    data[3].isPlaced = true;
    data[3].color = 'white';


    const actual = leftSideCoinsValidation(data, 4, 'black');
    expect(actual).toEqual([3, 2]);
  })

  it('should handle last row corner case', () => {
    const data = { ...coins };

    data[58].isPlaced = true;
    data[58].color = 'black';
    data[59].isPlaced = true;
    data[59].color = 'black';

    data[57].isPlaced = true;
    data[57].color = 'white';

    const actual = leftSideCoinsValidation(data, 60, 'white');
    expect(actual).toEqual([59, 58]);
  })

  it('should handle right side corner case', () => {
    const data = { ...coins };

    data[6].isPlaced = true;
    data[6].color = 'black';
    data[7].isPlaced = true;
    data[7].color = 'black';

    data[5].isPlaced = true;
    data[5].color = 'white';

    const actual = leftSideCoinsValidation(data, 8, 'white');
    expect(actual).toEqual([7, 6]);
  })

  it('should handle middle coins', () => {
    const data = { ...coins };

    data[4].isPlaced = true;
    data[4].color = 'white';
    data[3].isPlaced = true;
    data[3].color = 'black';

    const actual = leftSideCoinsValidation(data, 5, 'black');
    expect(actual).toEqual([4]);
  })
})

describe('upsideCoinsValidation', () => {
  it('should right top coins', () => {
    const data = { ...coins };

    data[1].isPlaced = true;
    data[1].color = 'white';

    data[17].isPlaced = true;
    data[17].color = 'black';

    data[9].isPlaced = true;
    data[9].color = 'black';

    const actual = upsideCoinsValidation(data, 25, 'white');
    expect(actual).toEqual([17, 9]);
  })

  it('should handle middle up coins', () => {
    const data = { ...coins };

    data[19].isPlaced = true;
    data[19].color = 'white';
    data[27].isPlaced = true;
    data[27].color = 'black';

    data[35].isPlaced = true;
    data[35].color = 'black';

    const actual = upsideCoinsValidation(data, 43, 'white');
    expect(actual).toEqual([35, 27]);
  })

  it('should handle right top coins', () => {
    const data = { ...coins };

    data[56].isPlaced = true;
    data[56].color = 'black';
    data[48].isPlaced = true;
    data[48].color = 'black';

    data[40].isPlaced = true;
    data[40].color = 'white';

    const actual = upsideCoinsValidation(data, 64, 'white');
    expect(actual).toEqual([56, 48]);
  })

  it('should handle right bottom', () => {
    const data = { ...coins };

    data[8].isPlaced = true;
    data[8].color = 'white';
    data[16].isPlaced = true;
    data[16].color = 'black';

    const actual = upsideCoinsValidation(data, 32, 'white');
    expect(actual).toEqual([16]);
  })
})