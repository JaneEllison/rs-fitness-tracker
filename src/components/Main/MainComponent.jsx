import React from 'react';
import style from './Main.module.css';
import { Route } from 'react-router-dom';
import FoodComponent from './Food/FoodComponent';
import { Row, Col } from 'antd';
import SignUpComponent from './Authentification/SignUpComponent';

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
          <Route path="/todo" render={() => <div>Todo</div>} />
          <Route path="/register" render={() => <SignUpComponent/>} />
        </Col>
      </Row>

    </div>
  );
};

export default MainComponent;
