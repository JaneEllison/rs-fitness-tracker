import getAgeFromDateString from '../utils/getAgeFromDateString';
import 'jest-extended';

describe('Get age from date function:', () => {
  let currentDateString;
  beforeEach(() => {
    currentDateString = '1/1/1995';
  });

  it('should be defined', () => {
    expect(getAgeFromDateString(currentDateString)).toBeDefined();
    expect(currentDateString).toBeDefined();
    expect(currentDateString).toBeString();
  });

  it('should be getting age', () => {
    expect(getAgeFromDateString(currentDateString)).toBe(26);
  });
});
