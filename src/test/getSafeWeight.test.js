import { getMaxSafeWeight, getMinSafeWeight } from '../utils/getSafeWeight';
import 'jest-extended';

describe('Get safe weight function:', () => {
  let height;

  beforeEach(() => {
    height = 65;
  });

  it('should be defined', () => {
    expect(getMaxSafeWeight(height)).toBeDefined();
    expect(getMinSafeWeight(height)).toBeDefined();
    expect(height).toBeNumber();
  });

  it('should be getting max weight', () => {
    expect(getMaxSafeWeight(height)).toBe(11);
  });

  it('should be getting min weight', () => {
    expect(getMinSafeWeight(height)).toBe(8);
  });

  it('should be return number', () => {
    expect(getMaxSafeWeight(height)).toBeNumber();
    expect(getMinSafeWeight(height)).toBeNumber();
  });
});
