import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Spin } from 'antd';
import { isLoaded, isEmpty } from 'react-redux-firebase';
import { VALUES } from '../../../config/statsRadioConfig';
import UserSummaryComponent from './UserSummary/UserSummaryComponent';
import ChartControlsComponent from './ChartControls/ChartControlsComponent';
import ChartComponent from './Chart/ChartComponent';
import profileSelector from '../../../store/Selectors/profileSelector';
import getAgeFromDateString from '../../../utils/getAgeFromDateString';
import getUserDataset from '../../../utils/getUserDataset';
import antdPropConstants from '../../../constants/antdPropConstants';

const {
  STATS_COMPONENT: {
    SPIN_SIZE,
  },
} = antdPropConstants;

function StatsComponent() {
  const [selectedField, setSelectedField] = useState(VALUES.CALORIES);
  const profile = useSelector(profileSelector);
  const [summaryData, setSummaryData] = useState([]);
  const [dataset, setDataset] = useState({});

  useEffect(() => {
    if (isLoaded(profile)) {
      if (!isEmpty(profile)) {
        setSummaryData({
          ...profile.userPhysics,
          age: getAgeFromDateString(profile.userPhysics.birthDay),
          goal: profile.userGoals.goalCalories,
        });
        setDataset(
          getUserDataset(profile.userGoals.goalCalories, profile.userHistory),
        );
      } else {
        setSummaryData({
          ...profile.userPhysics,
        });
      }
    } return undefined;
  }, [profile, isEmpty(profile), isLoaded(profile)]);

  if (!isLoaded(profile)) {
    return <Spin size={SPIN_SIZE} />;
  }

  if (isEmpty(profile)) {
    return <div>Nothing to show...</div>;
  }

  return (
    <Row gutter={8}>
      <Col md={24} lg={{ span: 18, push: 6 }}>
        <ChartComponent
          selectedFields={selectedField}
          dataset={dataset}
        />
      </Col>
      <Col xs={24} lg={{ span: 6, pull: 18 }}>
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
  );
}

export default StatsComponent;
