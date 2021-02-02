import calculateNutrientsByWeight from '../../../../../../utils/calculateNutrientsByWeight';
import setNewMenuItemId from '../../../../../../utils/setNewMenuItemId';
import { updateUserHistoryData } from '../../../../Account/updateProfileData';
import moment from 'moment';
import calculateTotalCaloriesForDay from '../../../../../../utils/calculateTotalCaloriesForDay';

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
      nf_protein}, weight),
    weight,
    time,
  };

  if (profile.userMenus[timeKey]) {
    firebase.updateProfile({userMenus: {[timeKey]: [
          ...profile.userMenus[timeKey],
          setNewMenuItemId(profile.userMenus[timeKey], foodItemToAdd)
        ]}});
  } else {
    firebase.updateProfile({userMenus: {[timeKey]: [
          {...foodItemToAdd, id: 0}
        ]}});
  }
  updateUserHistoryData({
    weight: profile.userPhysics.weight,
    caloriesConsumed: calculateTotalCaloriesForDay(profile.userMenus[moment(moment.now()).format('DD.MM.YYYY')]),
    date: moment(moment.now()).format('DD.MM.YYYY'),
  }, firebase, profile.userHistory);
};

export default addToMenu;
