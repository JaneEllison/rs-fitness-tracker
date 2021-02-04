import React from 'react';
import { Descriptions } from 'antd';
import { useSelector } from 'react-redux';
import AccountInfoItemComponent from '../AccountInfoItem/AccountInfoItemComponent';
import updateProfileData from '../updateProfileData';
import profileFieldsLabels from '../../../../config/profileFieldsLabels';
import profileSelector from '../../../../store/Selectors/profileSelector';
import style from '../AccountComponent.module.css';

const ProfileInfoComponent = () => {
  const { authData } = profileFieldsLabels;
  const profile = useSelector(profileSelector);

  return (
    <Descriptions
      title="User Info"
      column={1}
      bordered
      className={style.descriptions}
    >
      {
        authData.map((item) => {
          const { label, paramName } = item;
          const info = profile[paramName];
          return (
            <Descriptions.Item key={paramName} label={label}>
              <AccountInfoItemComponent
                label={label}
                info={info}
                paramName={paramName}
                updateCallBack={updateProfileData}
              />
            </Descriptions.Item>
          );
        })
      }
    </Descriptions>
  );
};

export default ProfileInfoComponent;
