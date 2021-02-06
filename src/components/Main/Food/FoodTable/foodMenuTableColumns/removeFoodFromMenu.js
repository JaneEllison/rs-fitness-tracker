import moment from 'moment';
import { updateUserHistoryData } from '../../../Account/updateProfileData';
import calculateTotalCaloriesForDay from '../../../../../utils/calculateTotalCaloriesForDay';

const removeFoodFromMenu = (key, profile, firebase) => {
  const timeKey = new Date(Date.now()).toLocaleDateString('ru-RU');
  let removeCkal = 0;
  firebase.updateProfile(({
    userMenus: {
      [timeKey]: [
        ...profile.userMenus[timeKey],
      ].filter((item) => {
        if (item.id === key) {
          removeCkal = item.nf_calories;
        }
        return item.id !== key;
      }),
    },
  }));
  console.log(removeCkal);
  updateUserHistoryData({
    weight: profile.userPhysics.weight,
    caloriesConsumed: (parseFloat(calculateTotalCaloriesForDay(profile.userMenus[moment(moment.now()).format('DD.MM.YYYY')]))
      - removeCkal).toFixed(2),
    date: moment(moment.now()).format('MM.DD.YYYY'),
  }, firebase, profile.userHistory);
};

export default removeFoodFromMenu;
