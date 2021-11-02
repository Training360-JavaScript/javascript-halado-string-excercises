import concatArrays from '../solution/js/concatArrays';

describe('concatArrays ', () => {
  test('shoul flat arrays, remove duplicated elements, and filter elements witch contains a character and trim them', () => {
    const arr1 = ['alma', 'körte', 'szilva'];
    const arr2 = ['alma', 'banán', 'csersznye'];
    const char = 'ö';

    const result = concatArrays(char, arr1, arr2);
    const expected = ['alma', 'szilva', 'banán', 'csersznye'];

    expect(result).toEqual(expected);
  });
});
