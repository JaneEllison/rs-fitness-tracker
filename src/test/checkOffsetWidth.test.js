import checkOffsetWidth from '../utils/checkOffsetWidth';
import 'jest-extended';

describe('Offset width function:', () => {
  let currentWidth;
  let newWidth;
  beforeEach(() => {
    currentWidth = 1280;
    newWidth = 1600;
  });

  it('should be defined', () => {
    expect(checkOffsetWidth(newWidth)).toBeDefined();
    expect(currentWidth).toBeNumber();
    expect(newWidth).toBeNumber();
  });

  it('should be checked width', () => {
    expect(checkOffsetWidth(newWidth)).toBe(true);
  });
});
