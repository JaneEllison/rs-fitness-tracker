import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';

import UserSummaryComponent from './UserSummary/UserSummaryComponent';
import ChartControlsComponent from './ChartControls/ChartControlsComponent';
import ChartComponent from './Chart/ChartComponent';

import userData from './dummy-user-stats.json';
import userHistory from './dummy-user-history.json';


function StatsComponent(props) {  
  return (
    <Row>
      <Col span={6}>
        <UserSummaryComponent userData={ userData } />
        <ChartControlsComponent />
      </Col>
      <Col span={18}>
        <ChartComponent data={userHistory} />
      </Col>
    </Row>
  )
}

export default StatsComponent;