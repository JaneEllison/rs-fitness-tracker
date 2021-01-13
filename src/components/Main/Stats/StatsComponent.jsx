import React, { useState } from 'react';
import { Row, Col } from 'antd';
import UserSummaryComponent from './UserSummary/UserSummaryComponent';
import ChartControlsComponent from './ChartControls/ChartControlsComponent';
import ChartComponent from './Chart/ChartComponent';


function StatsComponent({
  summary,
  goal: {
    startDate,
    endDate,
    startWeight,
    endWeight,
    dailyCalories,
    plan: {
      dates,
      weight
    }
  },
  dateHistory,
  weightHistory,
  caloriesHistory,
  workoutsTime,
}) {
  const [ selectedFields, setSelectedFields ] = useState(['weight', 'calories']);

  return (
    <Row>
      <Col span={6}>
        <UserSummaryComponent 
          summary={summary} 
          goalWeight={endWeight} 
          />
        <ChartControlsComponent
          isGoalMissing={endWeight}
          selectedFields={selectedFields}
          onChange={setSelectedFields} 
          />
      </Col>
      <Col span={18}>
        <ChartComponent 
          selectedFields={selectedFields}
          goalDates={dates}
          goalWeight={weight}
          goalCalories={dailyCalories}
          dates={dateHistory} 
          weight={weightHistory}
          calories={caloriesHistory}
          workouts={workoutsTime}
          />
      </Col>
    </Row>
  )
}

export default StatsComponent;