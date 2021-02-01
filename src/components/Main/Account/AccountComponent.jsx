import React from 'react';
import placeholderPicture from '../../../assets/nopic.png';
import { Row, Col, Image } from 'antd';
import profileSelector from '../../../store/Selectors/profileSelector';
import { useSelector } from 'react-redux';
import ProfileInfoComponent from './ProfileInfo/ProfileInfoComponent';
import UserPhysicsComponent from './userPhysics/UserPhysicsComponent';
import AccountMenuComponent from './AccountMenu/AccountMenuComponent';

const AccountComponent = () => {
  const profile = useSelector(profileSelector);

  const {avatarUrl} = profile;

  return (
    <Row>
      <Col span={16}>
          <ProfileInfoComponent />
          <UserPhysicsComponent/>
      </Col>
      <Col span={8}>
        <Image width={200} src={avatarUrl} fallback={placeholderPicture}/>
      </Col>
    </Row>
  );
};

export default AccountComponent;
