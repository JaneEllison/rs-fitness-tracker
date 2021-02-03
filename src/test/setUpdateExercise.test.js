import setUpdateExercise from '../utils/setUpdateExercise';
import 'jest-extended';

describe('Set update exercise function:', () => {
  let exercises;
  let currentId;
  let newText;

  beforeEach(() => {
    exercises = [
      {
        id: 1,
        text: 'jumps',
      },
      {
        id: 2,
        text: 'run',
      },
    ];
    currentId = 1;
    newText = 'pull up';
  });

  it('should be defined', () => {
    expect(setUpdateExercise(exercises, currentId, newText)).toBeDefined();
    expect(exercises).toBeDefined();
    expect(currentId).toBeDefined();
    expect(newText).toBeDefined();
    expect(newText).toBeString();
  });

  it('should be update text', () => {
    const result = ['pull up', { id: 2, text: 'run' }];
    expect(setUpdateExercise(exercises, currentId, newText)).toStrictEqual(
      result
    );
  });
});
