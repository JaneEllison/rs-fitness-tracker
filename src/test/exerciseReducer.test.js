import {
  exerciseAddAction,
  exerciseCompleteAction,
  exerciseRemoveAction,
  exerciseUpdateAction,
} from '../store/exerciseDataReducer/exerciseReducer/exerciseActionCreators';
import exerciseReducer from '../store/exerciseDataReducer/exerciseReducer/exerciseReducer';
import 'jest-extended';

describe('Exercise reducer:', () => {
  let state;

  describe('Exercise add action:', () => {
    let action = exerciseAddAction(13, 'pull up', false, 'Monday');
    let newState = exerciseReducer(state, action);

    it('should be current action type', () => {
      expect(action.type).toBe('ADD_EXERCISE');
    });

    it('should be add new text', () => {
      expect(newState.Monday.exercises[1].text).toBe('pull up');
      expect(newState.Monday.exercises).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: 13,
            text: 'pull up',
            isComplete: false,
          }),
        ])
      );
    });

    it('should be changed length of exercise', () => {
      expect(newState.Monday.exercises.length).toBe(2);
    });
  });

  describe('Exercise remove action:', () => {
    let action = exerciseRemoveAction(11, 'Monday');
    let newState = exerciseReducer(state, action);

    it('should be current action type', () => {
      expect(action.type).toBe('REMOVE_EXERCISE');
    });

    it('should be remove exercise', () => {
      expect(newState.Monday.exercises.length).toBe(0);
      expect(newState.Monday.exercises).toEqual(
        expect.not.arrayContaining([
          {
            id: 11,
            text: 'jumps',
            isComplete: false,
          },
        ])
      );
    });
  });

  describe('Exercise complete action:', () => {
    let action = exerciseCompleteAction(11, 'Monday');
    let newState = exerciseReducer(state, action);

    it('should be current action type', () => {
      expect(action.type).toBe('COMPLETE_EXERCISE');
    });

    it('should be complete exercise', () => {
      expect(newState.Monday.exercises[0].isComplete).toBe(true);
      expect(newState.Monday.exercises).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: 11,
            text: 'jumps',
            isComplete: true,
          }),
        ])
      );
    });
  });

  describe('Exercise update action:', () => {
    let action = exerciseUpdateAction(11, 'swim', 'Monday');
    let newState = exerciseReducer(state, action);

    it('should be current action type', () => {
      expect(action.type).toBe('UPDATE_EXERCISE');
    });

    it('should be update exercise', () => {
      expect(newState.Monday.exercises[0]).toBe('swim');
    });
  });
});
