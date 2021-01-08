import React from 'react';
import { Route } from 'react-router-dom';
import FoodComponent from './Food/FoodComponent';
import { Row, Col } from 'antd';

const MainComponent = () => {
  return (
    <main>
      <Row>
        <Col span={22} offset={1}>
          <Route exact path="/" render={() => <div>Default page</div>} />
          <Route path="/search_food" render={() => <FoodComponent/>} />
          <Route path="/todo" render={() => <div>Todo</div>} />
        </Col>
      </Row>

    </main>
  );
};

export default MainComponent;
