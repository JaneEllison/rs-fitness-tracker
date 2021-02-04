import getFoodParamTextValue from '../utils/getFoodParamTextValue';
import 'jest-extended';

describe('Get food text value function:', () => {
  let param;
  let currentConstants;

  beforeEach(() => {
    param = 'food_name';
    currentConstants = [{ API_VALUE: 'food_name', TEXT_VALUE: 'Food' }];
  });

  it('should be defined', () => {
    expect(getFoodParamTextValue(param, currentConstants)).toBeDefined();
    expect(param).toBeDefined();
    expect(currentConstants).toBeDefined();
    expect(currentConstants).toBeArray();
  });

  it('should be return text value', () => {
    expect(getFoodParamTextValue(param, currentConstants)).toBe('Food');
  });

  it('should be return string', () => {
    expect(getFoodParamTextValue(param, currentConstants)).toBeString();
  });
});
