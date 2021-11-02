import objectsMerge from '../solution/js/objectsMerge';

describe('objectsMerge ', () => {
  test('should return a concatenated object', () => {
    const johnDoe = {
      firstName: 'John',
      lastName: 'Doe',
    };

    const janeDoe = {
      firstName: 'Jane',
      lastName: 'Doe',
    };

    const result = objectsMerge(johnDoe, janeDoe);

    const expected = {
      0: {
        firstName: 'John',
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
