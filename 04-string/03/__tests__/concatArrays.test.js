import concatArrays from '../solution/js/concatArrays';

describe('concatArrays ', () => {
  test('should flat arrays, remove duplicated elements, filter elements that contain a character and trim them', () => {
    const arr1 = ['alma', 'körte', 'szilva'];
    const arr2 = ['alma', 'banán', 'cseresznye'];
    const char = 'ö';

    const result = concatArrays(char, arr1, arr2);
    const expected = ['alma', 'szilva', 'banán', 'cseresznye'];

    expect(result).toEqual(expected);
  });
});
