import { useEffect } from 'react';
import checkArrayForNullUndefNaN from '../utils/checkArrayForNullUndefNaN';

const useCheckButtonDisabled = ({
  foodData,
  intakeWeight,
  intakeTime,
  toggleButtonDisabled,
}) => {
  const {
    food_name: foodName,
    nf_calories: nfCalories,
    nf_total_fat: nfTotalFat,
    nf_total_carbohydrate: nfTotalCarbohydrate,
    nf_protein: nfProtein,
  } = foodData;

  useEffect(() => {
    if (checkArrayForNullUndefNaN([
      foodName,
      nfCalories,
      nfTotalFat,
      nfTotalCarbohydrate,
      nfProtein,
      intakeWeight,
      intakeTime,
    ])) {
      toggleButtonDisabled(false);
    } else {
      toggleButtonDisabled(true);
    }
  }, [
    foodData,
    intakeWeight,
    intakeTime,
  ]);
};

export default useCheckButtonDisabled;
