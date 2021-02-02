const setUpdateExercise = (items, id, text) => items.map((item) => (item.id === id ? text : item));

export default setUpdateExercise;
