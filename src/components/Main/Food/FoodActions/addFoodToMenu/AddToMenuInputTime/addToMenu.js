/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
import { calculateNutrientsByWeight } from '../../../../../../utils/calculateNutrientsByWeight';
import setNewMenuItemId from '../../../../../../utils/setNewMenuItemId';

const addToMenu = (firebase, foodData, weight, time, profile) => {
  const timeKey = new Date(time).toLocaleDateString('ru-RU');
  time = new Date(time).toLocaleTimeString('ru-RU');
  const {
    food_name,
    nf_calories,
    nf_total_fat,
    nf_total_carbohydrate,
    nf_protein,
  } = foodData;

  const foodItemToAdd = {
    food_name,
    ...calculateNutrientsByWeight({
      nf_calories,
      nf_total_fat,
      nf_total_carbohydrate,
      nf_protein,
    }, weight),
    weight,
    time,
  };

  if (profile.userMenus[timeKey]) {
    firebase.updateProfile({
      userMenus: {
        [timeKey]: [
          ...profile.userMenus[timeKey],
          setNewMenuItemId(profile.userMenus[timeKey], foodItemToAdd),
        ],
      },
    });
  } else {
    firebase.updateProfile({
      userMenus: {
        [timeKey]: [
          { ...foodItemToAdd, id: 0 },
        ],
      },
    });
  }
};

export default addToMenu;
