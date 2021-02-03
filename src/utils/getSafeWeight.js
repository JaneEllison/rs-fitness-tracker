const SAFE_BMI = {
  // MIN: 18.5,
  // MAX: 24.9,
  MIN: 15,
  MAX: 30,
};

export const getMaxSafeWeight = (height) => Math.round(SAFE_BMI.MAX * ((height / 100) ** 2));
export const getMinSafeWeight = (height) => Math.round(SAFE_BMI.MIN * ((height / 100) ** 2));
