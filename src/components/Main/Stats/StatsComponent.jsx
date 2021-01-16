import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  userSummarySelector,
  userGoalSelector,
  userDatasetSelector
} from './../../../store/Selectors/userSelector';
import { Row, Col } from 'antd';
import { OPTIONS } from './../../../constants/statsChartConstants';

import UserSummaryComponent from './UserSummary/UserSummaryComponent';
import ChartControlsComponent from './ChartControls/ChartControlsComponent';
import ChartComponent from './Chart/ChartComponent';


function StatsComponent() {
  const [ selectedField, setSelectedField ] = useState(OPTIONS.WEIGHT_WITH_CALORIES);
  const summary = useSelector(userSummarySelector);
  const goal = useSelector(userGoalSelector);
  const dataset = useSelector(userDatasetSelector);

  return (
    <Row gutter={{ xs: 8, md: 32, }}>
      {/* <Col xs={24} md={{ push: 6, span: 18, }}>
        <ChartComponent
          selectedFields={selectedField}
          dataset={dataset}
          />
      </Col> */}
      <Col xs={24} md={{ span:6, pull: 18, }}>
        <Row>
          <Col xs={24} sm={12} md={24}>
            <UserSummaryComponent 
              summary={summary} 
              goal={goal}
              />
          </Col>
          <Col xs={24} sm={12} md={24}>
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