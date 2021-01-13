import { useEffect } from 'react';
import checkArrayForNullUndefNaN from '../utils/checkArrayForNullUndefNaN';

const useCheckButtonDisabled = ({
    foodData,
    intakeWeight,
    intakeTime,
    toggleButtonDisabled
}) => {
  const {
    food_name,
    nf_calories,
    nf_total_fat,
    nf_total_carbohydrate,
    nf_protein,
  } = foodData;

  useEffect(() => {
    console.log(checkArrayForNullUndefNaN([
      food_name,
      nf_calories,
      nf_total_fat,
      nf_total_carbohydrate,
      nf_protein,
      intakeWeight,
      intakeTime,
    ]));
    if (checkArrayForNullUndefNaN([
      food_name,
      nf_calories,
      nf_total_fat,
      nf_total_carbohydrate,
      nf_protein,
      intakeWeight,
      intakeTime
    ])) {
      toggleButtonDisabled(false);
    } else {
      toggleButtonDisabled(true);
    }
  }, [
    foodData,
    intakeWeight,
    intakeTime
  ]);
};

export default useCheckButtonDisabled;
