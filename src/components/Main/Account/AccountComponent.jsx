import React from 'react';
import { Row, Col, Image } from 'antd';
import { useSelector } from 'react-redux';
import placeholderPicture from '../../../assets/nopic.png';
import profileSelector from '../../../store/Selectors/profileSelector';
import ProfileInfoComponent from './ProfileInfo/ProfileInfoComponent';
import UserPhysicsComponent from './userPhysics/UserPhysicsComponent';

const AccountComponent = () => {
  const profile = useSelector(profileSelector);

  const { avatarUrl } = profile;

  return (
    <Row>
      <Col span={16}>
        <ProfileInfoComponent />
        <UserPhysicsComponent />
      </Col>
      <Col span={8}>
        <Image width={200} src={avatarUrl} fallback={placeholderPicture} />
      </Col>
    </Row>
  );
};

export default AccountComponent;
