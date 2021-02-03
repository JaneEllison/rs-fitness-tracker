import { Route, Switch } from 'react-router-dom';
import { Row, Col } from 'antd';
import React from 'react';
import style from './Main.module.css';
import DefaultPageComponent from './DefaultPage/DefaultPageComponent';
import ExerciseComponent from './Exercise/ExerciseComponent';
import StatsComponent from './Stats/StatsComponent';
import FoodComponent from './Food/FoodComponent';
import SignUpComponent from './Authentification/SignUpComponent';
import AccountComponent from './Account/AccountComponent';
import PrivateRoute from '../commonComponents/PrivateRoute';
import SignOut from './Authentification/SignOut';
import SignInComponent from './Authentification/SignInComponent';
import GoalComponent from './Goal/GoalComponent';

const MainComponent = () => (
  <div className={style.mainComponent}>
    <Row
      align="center"
      justify="center"
    >
      <Col span={22}>
        <Switch>
          <Route exact path="/" render={() => <DefaultPageComponent />} />
          <Route path="/search_food" render={() => <FoodComponent />} />
          <Route path="/signup" render={() => <SignUpComponent />} />
          <Route path="/signin" render={() => <SignInComponent />} />
          <PrivateRoute path="/exercise">
            <ExerciseComponent />
          </PrivateRoute>
          <PrivateRoute path="/stats">
            <StatsComponent />
          </PrivateRoute>
          <PrivateRoute path="/goal">
            <GoalComponent />
          </PrivateRoute>
          <PrivateRoute path="/account">
            <AccountComponent />
          </PrivateRoute>
          <PrivateRoute path="/logout">
            <SignOut />
          </PrivateRoute>
        </Switch>
      </Col>
    </Row>
  </div>
);

export default MainComponent;
