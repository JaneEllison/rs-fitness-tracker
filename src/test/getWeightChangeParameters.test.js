import getWeightChangeParameters from '../utils/getWeightChangeParameters';
import 'jest-extended';

describe('Get change weight function: ', () => {
  let summary;
  let activity;

  beforeEach(() => {
    summary = {
      age: 26,
      height: 160,
      weight: 65,
      sex: 'female',
    };

    activity = 'sedentary';
  });

  it('should be defined', () => {
    expect(getWeightChangeParameters(summary, activity)).toBeDefined();
    expect(getWeightChangeParameters(summary, activity)).not.toBeNull();
    expect(getWeightChangeParameters(summary, activity)).not.toBeUndefined();
    expect(summary).toBeDefined();
    expect(activity).toBeDefined();
  });

  it('should be obj', () => {
    expect(getWeightChangeParameters(summary, activity)).toBeObject();
  });

  it('should be not frozen', () => {
    expect(getWeightChangeParameters(summary, activity)).not.toBeFrozen();
  });

  it('should be extensible', () => {
    expect(getWeightChangeParameters(summary, activity)).toBeExtensible();
  });

  it('should be change weight param', () => {
    const result = {
      maintain: 1718,
      mildLoss: 1468,
      normalLoss: 1218,
      extremeLoss: 718,
      mildGain: 1968,
      normalGain: 2218,
      extremeGain: 2718,
    };

    expect(getWeightChangeParameters(summary, activity)).toHaveProperty(
      'maintain'
    );
    expect(getWeightChangeParameters(summary, activity)).toHaveProperty(
      'mildLoss'
    );
    expect(getWeightChangeParameters(summary, activity)).toHaveProperty(
      'normalLoss',
      1218
    );
    expect(
      Boolean(getWeightChangeParameters(summary, activity)[summary.maintain])
    ).toBe(false);
    expect(getWeightChangeParameters(summary, activity)).toEqual(result);
    expect(getWeightChangeParameters(summary, activity)).toMatchObject(result);
  });
});
