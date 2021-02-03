import roundToPrecision from '../utils/roundToPrecision';
import 'jest-extended';

describe('Round a value function', () => {
  let value;
  beforeEach(() => {
    value = 3.2896241;
  });

  it('should be defined', () => {
    expect(roundToPrecision(value)).toBeDefined();
    expect(value).toBeDefined();
    expect(value).toBeNumber();
  });

  it('should be rounded', () => {
    expect(roundToPrecision(value)).toBe(3.29);
  });

  it('should be return number', () => {
    expect(roundToPrecision(value)).toBeNumber();
  });
});
