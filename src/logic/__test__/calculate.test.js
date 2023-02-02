import calculate from '../calculate';

const obj = {
  total: null,
  next: null,
  operation: null,
};

describe('testing each button', () => {
  test('should set data to null when button is clicked', () => {
    expect(calculate(obj, 'AC')).toEqual(obj);
  });
});

// add more test suites

test('if the button is clicked twice, it should return the same value', () => {
  expect(calculate(obj, 'AC')).toEqual(obj);
});

test(" should return the object followed by '+'", () => {
  const object = { ...obj, total: '5' };
  expect(calculate(object, '+')).toEqual({ ...object, operation: '+' });
});

test('Testing if obj.total is false', () => {
  const object = { ...obj, total: '0', operation: '+' };
  expect(calculate(object, '+')).toEqual({ ...object });
});

test('Testing if obj.total is true', () => {
  const object = { ...obj, total: '5', operation: '+' };
  expect(calculate(object, '+')).toEqual({ ...object, operation: '+' });
});
