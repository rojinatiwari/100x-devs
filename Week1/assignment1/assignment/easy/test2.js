const findLargestElement = require('./findLargestElement');

test('returns the largest number in a normal array', () => {
  expect(findLargestElement([1, 3, 7, 2, 5])).toBe(7);
});

test('returns null for an empty array', () => {
  expect(findLargestElement([])).toBeNull();
});

test('returns the only element for a single-element array', () => {
  expect(findLargestElement([42])).toBe(42);
});

test('works with negative numbers', () => {
  expect(findLargestElement([-10, -20, -3, -50])).toBe(-3);
});

test('works with repeated numbers', () => {
  expect(findLargestElement([4, 4, 4, 4])).toBe(4);
});