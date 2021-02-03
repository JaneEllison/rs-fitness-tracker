const setCompleteExercise = (items, id) => items.map((item) => (item.id === id
  ? {
    ...item,
    isComplete: !item.isComplete,
  }
  : item));

export default setCompleteExercise;
