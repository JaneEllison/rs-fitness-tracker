import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  userSummarySelector,
  userGoalSelector,
  userDatasetSelector
} from './../../../store/Selectors/userSelector';
import { Row, Col } from 'antd';
import { VALUES } from '../../../config/statsRadioConfig';

import UserSummaryComponent from './UserSummary/UserSummaryComponent';
import ChartControlsComponent from './ChartControls/ChartControlsComponent';
import ChartComponent from './Chart/ChartComponent';

function StatsComponent() {
  const [ selectedField, setSelectedField ] = useState(VALUES.CALORIES);
  const summary = useSelector(userSummarySelector);
  const goal = useSelector(userGoalSelector);
  const dataset = useSelector(userDatasetSelector);

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
              summary={summary} 
              goal={goal}
              />
          </Col>
          <Col md={12} lg={24}>
            <ChartControlsComponent
              selectedField={selectedField}
              onChange={setSelectedField}
              goal={goal}
              />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default StatsComponent;