const setUpdateExercise = (items, id, text) => {
  return items.map((item) => {
    return item.id === id ? text : item;
  });
};

export default setUpdateExercise;
