import React from 'react';
import style from './Main.module.css';
import { Route } from 'react-router-dom';
import StatsComponent from './Stats/StatsComponent';
import FoodComponent from './Food/FoodComponent';
import ExersiseComponent from './Exersise/ExersiseComponent';
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
          <Route path="/todo" render={() => <ExersiseComponent/>}/>
          <Route path="/stats" render={() => <StatsComponent />} />
        </Col>
      </Row>
    </div>
  );
};

export default MainComponent;
