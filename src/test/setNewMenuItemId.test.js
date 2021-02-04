import setNewMenuItemId from '../utils/setNewMenuItemId';
import 'jest-extended';

describe('Set menu item id function:', () => {
  let foodDataId;
  let foodData;

  beforeEach(() => {
    foodDataId = [
      {
        id: 0,
      },
    ];
    foodData = {
      food_name: 'apple',
      nf_calories: 94.64,
      nf_protein: 0.47,
      nf_total_carbohydrate: 25.13,
      nf_total_fat: 0.31,
      time: '08:02:00',
      weight: 100,
    };
  });

  it('should be obj', () => {
    expect(setNewMenuItemId(foodDataId, foodData)).toBeObject();
  });

  it('should be change id', () => {
    expect(setNewMenuItemId(foodDataId, foodData)).toHaveProperty('id');
    expect(setNewMenuItemId(foodDataId, foodData)).toMatchObject({ id: 1 });
  });
});
