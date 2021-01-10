const setNewMenuItemId = (container, item, idToAdd) => {
  if (container.length === 0 ) return {...item, id: 0};

  idToAdd = container[container.length - 1].id + 1;

  const checkIfIdIsUnique = (array, idToCheck) => {
    array.every((containerItem) => containerItem.id === idToCheck)
  };
  if(checkIfIdIsUnique(container, idToAdd)) {
    idToAdd += 1;
    setNewMenuItemId(container, item,  idToAdd);
  } else {
    return {...item, id: idToAdd};
  }
};

export default setNewMenuItemId;
