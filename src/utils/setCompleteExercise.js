const setCompleteExercise = (items, id) => {
  return items.map((item) => {
    return item.id === id ?  {...item, isComplete: !item.isComplete} : item;
  });
};

export default setCompleteExercise;
