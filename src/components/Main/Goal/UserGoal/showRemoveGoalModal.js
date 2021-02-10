import React from 'react';
import { Modal } from 'antd';
import { updateUserGoalsData } from '../../Account/updateProfileData';
import goalComponentConstants from '../../../../constants/goalComponentConstants';

const {
  GOAL: {
    MODAL: {
      REMOVE_TEXT,
      REMOVE_TITLE,
    },
  },
} = goalComponentConstants;

function showRemoveGoalModal({ firebase }) {
  return Modal.confirm({
    title: REMOVE_TITLE,
    content: (
      <div>{REMOVE_TEXT}</div>
    ),
    onOk: () => {
      updateUserGoalsData({
        activityLevel: '',
        intensityLevel: '',
        weightPlan: '',
        goalCalories: '',
      }, firebase);
    },
  });
}

export default showRemoveGoalModal;
