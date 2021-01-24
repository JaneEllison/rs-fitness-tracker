import React from 'react';
import { Descriptions } from 'antd';
import AccountInfoItemComponent from '../AccountInfoItem/AccountInfoItemComponent';
import {updateUserPhysicsData} from '../updateProfileData';
import profileFieldsLabels from '../../../../config/profileFieldsLabels';
import { useSelector } from 'react-redux';
import profileSelector from '../../../../store/Selectors/profileSelector';

const UserPhysicsComponent = () => {

  const {physicsData} = profileFieldsLabels;
  const profile = useSelector(profileSelector);
  const {userPhysics} = profile;
  console.log(profile);
  return (
    <Descriptions title="User physics" column={1} bordered>
      {
        physicsData.map((item) => {
          const { label, paramName } = item;
          const info = userPhysics[paramName];
          return (
            <Descriptions.Item label={label}>
              <AccountInfoItemComponent
                key={item}
                label={label}
                info={info}
                paramName={paramName}
                updateCallBack={updateUserPhysicsData}
              />
            </Descriptions.Item>
          )
        })
      }
    </Descriptions>
  );
};

export default UserPhysicsComponent;
