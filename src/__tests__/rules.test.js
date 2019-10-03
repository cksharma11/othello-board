import {
  rightSideCoinsValidation,
  leftSideCoinsValidation,
  upsideCoinsValidation,
  downsideCoinsValidation,
  leftUpCrossCoinsValidation,
  rightUpCrossCoinsValidation,
  leftDownCrossCoinsValidation,
  rightDownCrossCoinsValidation
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

describe('downsideCoinsValidation', () => {
  it('should right top coins', () => {
    const data = { ...coins };

    data[25].isPlaced = true;
    data[25].color = 'white';

    data[17].isPlaced = true;
    data[17].color = 'black';

    data[9].isPlaced = true;
    data[9].color = 'black';

    const actual = downsideCoinsValidation(data, 1, 'white');
    expect(actual).toEqual([9, 17]);
  })

  it('should handle middle up coins', () => {
    const data = { ...coins };

    data[43].isPlaced = true;
    data[43].color = 'white';
    data[27].isPlaced = true;
    data[27].color = 'black';

    data[35].isPlaced = true;
    data[35].color = 'black';

    const actual = downsideCoinsValidation(data, 19, 'white');
    expect(actual).toEqual([27, 35]);
  })

  it('should handle right top coins', () => {
    const data = { ...coins };

    data[48].isPlaced = true;
    data[48].color = 'white';
    data[56].isPlaced = true;
    data[56].color = 'white';

    data[64].isPlaced = true;
    data[64].color = 'black';

    const actual = downsideCoinsValidation(data, 40, 'black');
    expect(actual).toEqual([48  , 56]);
  })

  it('should handle right bottom', () => {
    const data = { ...coins };

    data[32].isPlaced = true;
    data[32].color = 'white';
    data[16].isPlaced = true;
    data[16].color = 'black';

    const actual = downsideCoinsValidation(data, 8, 'white');
    expect(actual).toEqual([16]);
  })
})

describe('leftUpCrossCoinsValidation', () => {
  it('should right top coins', () => {
    const data = { ...coins };

    data[1].isPlaced = true;
    data[1].color = 'white';

    data[10].isPlaced = true;
    data[10].color = 'black';

    data[19].isPlaced = true;
    data[19].color = 'black';

    const actual = leftUpCrossCoinsValidation(data, 28, 'white');
    expect(actual).toEqual([19, 10]);
  })

  it('should handle middle up coins', () => {
    const data = { ...coins };

    data[37].isPlaced = true;
    data[37].color = 'white';
    data[46].isPlaced = true;
    data[46].color = 'black';

    data[55].isPlaced = true;
    data[55].color = 'black';

    const actual = leftUpCrossCoinsValidation(data, 64, 'white');
    expect(actual).toEqual([55, 46]);
  })

  it('should handle right top coins', () => {
    const data = { ...coins };

    data[7].isPlaced = true;
    data[7].color = 'black';
    data[15].isPlaced = true;
    data[15].color = 'white';

    const actual = leftUpCrossCoinsValidation(data, 24, 'black');
    expect(actual).toEqual([15]);
  })

  it('should handle right bottom', () => {
    const data = { ...coins };

    data[41].isPlaced = true;
    data[41].color = 'white';
    data[50].isPlaced = true;
    data[50].color = 'black';

    const actual = leftUpCrossCoinsValidation(data, 59, 'white');
    expect(actual).toEqual([50]);
  })
})

describe('rightUpCrossCoinsValidation', () => {
  it('should right top coins', () => {
    const data = { ...coins };

    data[8].isPlaced = true;
    data[8].color = 'white';

    data[15].isPlaced = true;
    data[15].color = 'black';

    data[22].isPlaced = true;
    data[22].color = 'black';

    const actual = rightUpCrossCoinsValidation(data, 29, 'white');
    expect(actual).toEqual([22, 15]);
  })

  it('should handle middle up coins', () => {
    const data = { ...coins };

    data[50].isPlaced = true;
    data[50].color = 'black';
    data[43].isPlaced = true;
    data[43].color = 'black';

    data[36].isPlaced = true;
    data[36].color = 'white';

    const actual = rightUpCrossCoinsValidation(data, 57, 'white');
    expect(actual).toEqual([50, 43]);
  })

  it('should handle right top coins', () => {
    const data = { ...coins };

    data[55].isPlaced = true;
    data[55].color = 'black';
    data[48].isPlaced = true;
    data[48].color = 'white';

    const actual = rightUpCrossCoinsValidation(data, 62, 'white');
    expect(actual).toEqual([55]);
  })

  it('should handle right bottom', () => {
    const data = { ...coins };

    data[10].isPlaced = true;
    data[10].color = 'white';
    data[3].isPlaced = true;
    data[3].color = 'black';

    const actual = rightUpCrossCoinsValidation(data, 17, 'black');
    expect(actual).toEqual([10]);
  })
})

describe('leftDownCrossCoinsValidation', () => {
  it('should right top coins', () => {
    const data = { ...coins };

    data[29].isPlaced = true;
    data[29].color = 'white';

    data[15].isPlaced = true;
    data[15].color = 'black';

    data[22].isPlaced = true;
    data[22].color = 'black';

    const actual = leftDownCrossCoinsValidation(data, 8, 'white');
    expect(actual).toEqual([15, 22]);
  })

  it('should handle middle up coins', () => {
    const data = { ...coins };

    data[43].isPlaced = true;
    data[43].color = 'white';
    data[50].isPlaced = true;
    data[50].color = 'white';

    data[57].isPlaced = true;
    data[57].color = 'black';

    const actual = leftDownCrossCoinsValidation(data, 36, 'black');
    expect(actual).toEqual([43, 50]);
  })

  it('should handle right top coins', () => {
    const data = { ...coins };

    data[15].isPlaced = true;
    data[15].color = 'black';
    data[22].isPlaced = true;
    data[22].color = 'white';

    const actual = leftDownCrossCoinsValidation(data, 8, 'white');
    expect(actual).toEqual([15]);
  })

  it('should handle right bottom', () => {
    const data = { ...coins };

    data[62].isPlaced = true;
    data[62].color = 'white';
    data[55].isPlaced = true;
    data[55].color = 'black';

    const actual = leftDownCrossCoinsValidation(data, 48, 'white');
    expect(actual).toEqual([55]);
  })
})

describe('rightDownCrossCoinsValidation', () => {
  it('should right top coins', () => {
    const data = { ...coins };

    data[10].isPlaced = true;
    data[10].color = 'white';

    data[19].isPlaced = true;
    data[19].color = 'white';

    data[28].isPlaced = true;
    data[28].color = 'black';

    const actual = rightDownCrossCoinsValidation(data, 1, 'black');
    expect(actual).toEqual([10, 19]);
  })

  it('should handle middle up coins', () => {
    const data = { ...coins };

    data[15].isPlaced = true;
    data[15].color = 'white';

    data[24].isPlaced = true;
    data[24].color = 'black';

    const actual = rightDownCrossCoinsValidation(data, 6, 'black');
    expect(actual).toEqual([15]);
  })

  it('should handle right top coins', () => {
    const data = { ...coins };

    data[55].isPlaced = true;
    data[55].color = 'black';
    data[64].isPlaced = true;
    data[64].color = 'white';

    const actual = rightDownCrossCoinsValidation(data, 46, 'white');
    expect(actual).toEqual([55]);
  })

  it('should handle right bottom', () => {
    const data = { ...coins };

    data[50].isPlaced = true;
    data[50].color = 'white';
    data[59].isPlaced = true;
    data[59].color = 'black';

    const actual = rightDownCrossCoinsValidation(data, 41, 'black');
    expect(actual).toEqual([50]);
  })
})