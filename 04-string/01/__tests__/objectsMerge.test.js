import objectsMerge from '../solution/js/objectsMerge';

describe('objectsMerge ', () => {
  test('should return a concated object', () => {
    const johnDoe = {
      firstName: 'Jonh',
      lastName: 'Doe',
    };

    const janeDoe = {
      firstName: 'Jane',
      lastName: 'Doe',
    };

    const result = objectsMerge(johnDoe, janeDoe);

    const expected = {
      0: {
        firstName: 'Jonh',
        lastName: 'Doe',
      },
      1: {
        firstName: 'Jane',
        lastName: 'Doe',
      },
    };

    expect(result).toEqual(expected);
  });
});
