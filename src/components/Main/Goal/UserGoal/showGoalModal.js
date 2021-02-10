import React from 'react';
import { Modal } from 'antd';
import { updateUserGoalsData } from '../../Account/updateProfileData';
import { isLessThanSafe } from '../../../../utils/getGoalCalories';
import { MINIMUM_CALORIES } from '../../../../constants/weightChangeConstants';
import goalComponentConstants from '../../../../constants/goalComponentConstants';
import style from '../Goal.module.css';
import '../Goal.antd.css';

const {
  GOAL: {
    MODAL: {
      WARNING_TITLE,
      WARNING_CONSTRUCTOR,
      WARNING_INSTRUCTION,
      CONFIRM_TITLE,
      CONFIRM_CONSTRUCTOR,
    },
  },
} = goalComponentConstants;

function showGoalModal({
  gender,
  weightPlan,
  activityLevel,
  intensityLevel,
  goalCalories,
  firebase,
}) {
  return isLessThanSafe(goalCalories, gender)
    ? (
      Modal.error({
        title: WARNING_TITLE,
        content: (
          <div>
            <p className={style.goalModalError}>
              {WARNING_CONSTRUCTOR(goalCalories, gender, MINIMUM_CALORIES[gender])}
            </p>
            <p>{WARNING_INSTRUCTION}</p>
          </div>
        ),
      })
    )
    : Modal.confirm({
      title: CONFIRM_TITLE,
      content: (
        <div>
          <p>{CONFIRM_CONSTRUCTOR(goalCalories)}</p>
        </div>
      ),
      onOk: () => {
        updateUserGoalsData({
          activityLevel,
          intensityLevel,
          weightPlan,
          goalCalories,
        }, firebase);
      },
    });
}

export default showGoalModal;
