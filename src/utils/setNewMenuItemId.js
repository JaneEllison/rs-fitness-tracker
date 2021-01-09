const setNewMenuItemId = (container, item, idToAdd = container[container.length - 1].id + 1) => {

  const checkIfIdIsUnique = (array, idToCheck) => {
    array.every((containerItem) => containerItem.id === idToCheck)
  };

  if(checkIfIdIsUnique(container, idToAdd)) {
    idToAdd += 1;
    setNewMenuItemId(container, item,  idToAdd);
  } else {

    console.log({...item, id: idToAdd});
    return {...item, id: idToAdd};
  }
};

export default setNewMenuItemId;
