import React from 'react';
import style from './Main.module.css';
import { Route, Switch } from 'react-router-dom';
import StatsComponent from './Stats/StatsComponent';
import FoodComponent from './Food/FoodComponent';
import { Row, Col } from 'antd';
import SignUpComponent from './Authentification/SignUpComponent';
import AccountComponent from './Account/AccountComponent';
import PrivateRoute from '../commonComponents/PrivateRoute';

const MainComponent = () => {
  return (
    <div className={style.mainComponent}>
      <Row
        align="center"
        justify="center"
      >
        <Col span={22}>
          <Switch>
            <Route exact path="/" render={() => <div>Default page</div>} />
            <Route path="/search_food" render={() => <FoodComponent/>} />
            <Route path="/todo" render={() => <div>Todo</div>} />
            <Route path="/register" render={() => <SignUpComponent/>} />
            <Route path="/stats" render={() => <StatsComponent />} />
            <PrivateRoute path="/account" >
              <AccountComponent/>
            </PrivateRoute>
          </Switch>
        </Col>
      </Row>

    </div>
  );
};

export default MainComponent;
