import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  userDatasetSelector
} from './../../../store/Selectors/userSelector';
import { Row, Col } from 'antd';
import { VALUES } from '../../../config/statsRadioConfig';

import UserSummaryComponent from './UserSummary/UserSummaryComponent';
import ChartControlsComponent from './ChartControls/ChartControlsComponent';
import ChartComponent from './Chart/ChartComponent';
import profileSelector from '../../../store/Selectors/profileSelector';
import {isLoaded, isEmpty} from 'react-redux-firebase';
import getAgeFromDateString from '../../../utils/getAgeFromDateString';

function StatsComponent() {
  const [ selectedField, setSelectedField ] = useState(VALUES.CALORIES);

  const profile = useSelector(profileSelector);
  // const summary = useSelector(userSummarySelector);
  const {
    birthDay,
    gender,
    height,
    weight,
  } = profile;
  const [summaryData, setSummaryData] = useState([]);
  const dataset = useSelector(userDatasetSelector);

  useEffect(() => {
    if (isLoaded(profile)) {
      return !isEmpty(profile)
        ? setSummaryData({
            ...profile.userPhysics,
            age: getAgeFromDateString(...profile.userPhysics.birthDay),
            goal: profile.userGoals.goalCalories
          })
        : setSummaryData({
          ...profile.userPhysics,
          })
     }
  }, [profile]);

  return (
    <Row gutter={8}>
      <Col md={24} lg={{ span: 18, push: 6, }}>
        <ChartComponent
          selectedFields={selectedField}
          dataset={dataset}
          />
      </Col>
      <Col xs={24} lg={{ span: 6, pull: 18, }}>
        <Row>
          <Col md={12} lg={24}>
            <UserSummaryComponent
              summary={summaryData}
              />
          </Col>
          <Col md={12} lg={24}>
            <ChartControlsComponent
              selectedField={selectedField}
              onChange={setSelectedField}
              summary={summaryData}
              />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default StatsComponent;
