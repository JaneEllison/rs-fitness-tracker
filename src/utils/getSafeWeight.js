import { SAFE_BMI } from '../constants/weightChangeConstants';

export const getMaxSafeWeight = (height) => Math.round(SAFE_BMI.MAX * ((height / 100) ** 2));
export const getMinSafeWeight = (height) => Math.round(SAFE_BMI.MIN * ((height / 100) ** 2));
