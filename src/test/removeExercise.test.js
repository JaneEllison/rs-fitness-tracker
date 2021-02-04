import removeExercise from '../utils/removeExercise';
import 'jest-extended';

describe('Remove exercise function:', () => {
  let exercises;
  let currentId;

  beforeEach(() => {
    exercises = [
      {
        id: 1,
      },
      {
        id: 2,
      },
    ];
    currentId = 1;
  });

  it('should be defined', () => {
    expect(removeExercise(exercises, currentId)).toBeDefined();
    expect(exercises).toBeDefined();
    expect(currentId).toBeDefined();
  });

  it('should be remove', () => {
    const result = [{ id: 2 }];
    expect(removeExercise(exercises, currentId)).toStrictEqual(result);
  });

  it('should not contain same id', () => {
    expect(removeExercise(exercises, currentId)).not.toContainEqual({ id: 1 });
  });

  it('should be change length', () => {
    const result = exercises.length - 1;
    expect(removeExercise(exercises, currentId).length).toBe(result);
  });
});
