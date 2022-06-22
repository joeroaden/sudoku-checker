import Checker from './../src/sudoku.js';

describe('Checker', () => {
  test("should verify input numbers are 1-9", () => {
    const row1 = new Checker ([1,2,3,4,5,6,7,8,9]);
    expect(row1.row).toEqual ([1,2,3,4,5,6,7,8,9])
  });
});

