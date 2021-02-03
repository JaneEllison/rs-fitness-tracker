import setCompleteExercise from '../utils/setCompleteExercise';
import 'jest-extended';

describe('Set complete exercise function:', () => {
  let exercises;
  let currentId;
  let setComplete;

  beforeEach(() => {
    exercises = [
      {
        id: 1,
        isComplete: false,
      },
      {
        id: 2,
        isComplete: false,
      },
    ];
    currentId = 1;
    setComplete = setCompleteExercise(exercises, currentId);
  });

  it('should be defined', () => {
    expect(setComplete).toBeDefined();
    expect(exercises).toBeDefined();
    expect(currentId).toBeDefined();

    expect(exercises).toBeArray();
    expect(currentId).toBeNumber();
    expect(currentId).toBeTruthy();
  });

  it('should be change complete', () => {
    const checkToComplete = exercises.map(({ id, isComplete }) =>
      id === currentId ? (isComplete = true) : isComplete
    );

    expect(setCompleteExercise([{ id: 1, isComplete: false }], 1)).toEqual([
      { id: 1, isComplete: true },
    ]);
    expect(setCompleteExercise([{ id: 2, isComplete: false }], 1)).toEqual([
      { id: 2, isComplete: false },
    ]);
    expect(setComplete.some(({ id }) => typeof id !== 'number')).toBe(false);
    expect(
      setComplete.some(({ isComplete }) => typeof isComplete !== 'boolean')
    ).toBe(false);
    expect(setComplete.map(({ isComplete }) => isComplete)).toEqual(
      checkToComplete
    );

    expect(setComplete).toContainEqual({ id: 1, isComplete: true });
    expect(setComplete).toEqual([
      { id: 1, isComplete: true },
      { id: 2, isComplete: false },
    ]);
  });
});
