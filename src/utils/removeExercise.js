const removeExercise = (items, id) => {
  return items.filter((item) => {
    return item.id !== id;
  });
};

export default removeExercise;
