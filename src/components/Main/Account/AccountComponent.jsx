import React from 'react';
import placeholderPicture from '../../../assets/nopic.png';
import { Row, Col, Image } from 'antd';
import profileSelector from '../../../store/Selectors/profileSelector';
import { useSelector } from 'react-redux';
import ProfileInfoComponent from './ProfileInfo/ProfileInfoComponent';
import UserPhysicsComponent from '../Goal/UserPhysics/UserPhysicsComponent';
import moment from 'moment';
import calculateTotalCaloriesForDay from '../../../utils/calculateTotalCaloriesForDay';

const AccountComponent = () => {
  const profile = useSelector(profileSelector);
  const {userPhysics, userMenus, userHistory} = profile;
  const currentDate = moment(moment.now()).format('DD.MM.YYYY');
  const {avatarUrl} = profile;

  return (
    <Row>
      <Col span={16}>
          <ProfileInfoComponent />
          <UserPhysicsComponent
            summary={userPhysics}
            userHistory={userHistory}
            dailyCalories={calculateTotalCaloriesForDay(userMenus[currentDate])}
          />
      </Col>
      <Col span={8}>
        <Image width={200} src={avatarUrl} fallback={placeholderPicture}/>
      </Col>
    </Row>
  );
};

export default AccountComponent;
