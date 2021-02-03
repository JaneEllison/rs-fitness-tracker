import React from 'react';
import { Row, Col, Image } from 'antd';
import { useSelector } from 'react-redux';
import { isLoaded, isEmpty } from 'react-redux-firebase';
import moment from 'moment';
import placeholderPicture from '../../../assets/nopic.png';
import profileSelector from '../../../store/Selectors/profileSelector';
import ProfileInfoComponent from './ProfileInfo/ProfileInfoComponent';
import UserPhysicsComponent from '../Goal/UserPhysics/UserPhysicsComponent';
import calculateTotalCaloriesForDay from '../../../utils/calculateTotalCaloriesForDay';

const AccountComponent = () => {
  const profile = useSelector(profileSelector);
  const { userPhysics, userMenus, userHistory } = profile;
  const currentDate = moment(moment.now()).format('DD.MM.YYYY');
  const { avatarUrl } = profile;

  return isLoaded(profile) && !isEmpty(profile) ? (
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
        <Image width={200} src={avatarUrl} fallback={placeholderPicture} />
      </Col>
    </Row>
  )
    : null;
};

export default AccountComponent;
