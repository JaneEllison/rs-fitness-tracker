import React from 'react';
import {
  Col,
  Form,
  Input,
  Button,
} from 'antd';
import { useSelector } from 'react-redux';
import { useFirebase } from 'react-redux-firebase';
import showProfileInfoModal from './showProfileInfoModal';
import profileFieldsLabels from '../../../../config/profileFieldsLabels';
import profileSelector from '../../../../store/Selectors/profileSelector';
import accountComponentConstants from '../../../../constants/accountComponentConstants';
import antdPropConstants from '../../../../constants/antdPropConstants';
import style from '../AccountComponent.module.css';

const {
  ACCOUNT_COMPONENT: {
    PROFILE_INFO: {
      INPUT_LABEL_ALIGN,
      BUTTON_TYPE,
      BUTTON_HTML_TYPE,
    },
  },
} = antdPropConstants;

const {
  PROFILE_INFO: {
    BUTTON_TEXT,
  },
} = accountComponentConstants;

const ProfileInfoComponent = () => {
  const firebase = useFirebase();
  const profile = useSelector(profileSelector);
  const { authData } = profileFieldsLabels;

  return (
    <Col className={style.profileInfoWrapper}>
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={
          authData.reduce((acc, { paramName }) => {
            acc[paramName] = profile[paramName];
            return acc;
          }, {})
        }
        onFinish={(obj) => { showProfileInfoModal(obj, firebase); }}
      >
        {authData.map(({ label, paramName }, index) => {
          const keyProp = `form${index}`;
          return (
            <Form.Item
              key={keyProp}
              label={`${label}: `}
              name={paramName}
              labelAlign={INPUT_LABEL_ALIGN}
              className={style.accountInputField}
            >
              <Input />
            </Form.Item>
          );
        })}
        <Button
          type={BUTTON_TYPE}
          htmlType={BUTTON_HTML_TYPE}
        >
          {BUTTON_TEXT}
        </Button>
      </Form>
    </Col>
  );
};

export default ProfileInfoComponent;
