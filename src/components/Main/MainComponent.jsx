import React from 'react';
import style from './Main.module.css';
import { Route } from 'react-router-dom';
import ExerciseComponent from './Exercise/ExerciseComponent'
import StatsComponent from './Stats/StatsComponent';
import FoodComponent from './Food/FoodComponent';
import { Row, Col } from 'antd';

const MainComponent = () => {
  return (
    <div className={style.mainComponent}>
      <Row
        align="center"
        justify="center"
      >
        <Col span={22}>
          <Route exact path="/" render={() => <div>Default page</div>} />
          <Route path="/search_food" render={() => <FoodComponent/>} />
          <Route path="/exercise" render={() => <ExerciseComponent/>} />
          <Route path="/stats" render={() => <StatsComponent />} />
        </Col>
      </Row>
    </div>
  );
};

export default MainComponent;
