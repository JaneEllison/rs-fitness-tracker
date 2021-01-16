import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  userSummarySelector,
  userTimelineSelector
} from './../../../store/Selectors/userSelector';
import { Row, Col } from 'antd';

import UserSummaryComponent from './UserSummary/UserSummaryComponent';
import ChartControlsComponent from './ChartControls/ChartControlsComponent';
import ChartComponent from './Chart/ChartComponent';


function StatsComponent() {
  const [ selectedFields, setSelectedFields ] = useState(['weight', 'calories']);

  const summary = useSelector(userSummarySelector);
  const {
    goalWeight,
    dataset
  } = useSelector(userTimelineSelector);
  
  return (
    <Row gutter={{
      xs: 8,
      md: 32,
    }}>
      <Col 
        xs={24} 
        md={
          {
            push: 6,
            span: 18
          }
        }
        >
        <ChartComponent
          selectedFields={selectedFields}
          dataset={dataset}
          />
      </Col>
      <Col 
        xs={24} 
        md={
          {
            span:6,
            pull: 18,
          }
        }
        >
        <Row>
          <Col 
            xs={24}
            sm={12} 
            md={24}
            >
            <UserSummaryComponent 
              summary={summary} 
              goalWeight={goalWeight}
              />
          </Col>
          <Col 
            xs={24} 
            sm={12} 
            md={24} 
            >
            <ChartControlsComponent
              selectedFields={selectedFields}
              onChange={setSelectedFields} 
              goalWeight={goalWeight}
              />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default StatsComponent;