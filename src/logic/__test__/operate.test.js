import operate from '../operate';

const obj = {
  A: 10,
  B: 22,
  C: 6,
  D: 2,
};

describe('test calculation', () => {
  test('operate func return 32', () => {
    expect(Number(operate(obj.A, obj.B, '+'))).toBe(32);
  });
  test('operate func return -12', () => {
    expect(Number(operate(obj.A, obj.B, '-'))).toBe(-12);
  });

  test('operate func return 220', () => {
    expect(Number(operate(obj.A, obj.B, 'x'))).toBe(220);
  });

  test('operate func return 3', () => {
    expect(Number(operate(obj.C, obj.D, '÷'))).toBe(3);
  });
});
